import { AuthenticateUserArgs } from "../../definitions";
import { authService } from "../../services/auth-service";
import { User } from "../../types";
import { ogm } from "../../index";

export const signInResolver = async (
  _source: any,
  { email, password }: AuthenticateUserArgs,
  context: any,
  info: any
) => {
  try {
    context.res.set("access-control-expose-headers", "Set-Cookie");
    const UserModal = ogm.model("User");
    const selectionSet = `
        {
            id
            name
            email
            password
            roles {
              id
            }
        }
    `;

    UserModal.setSelectionSet(selectionSet);

    const resp = await UserModal.find<[User & { password: string }]>({
      where: {
        email,
      },
    });

    const existingUser = Array.isArray(resp) ? resp[0] : undefined;

    const failedAuthMessage = `Failed Authentication. Mismatched email and password.`;

    if (!existingUser) {
      throw new Error(failedAuthMessage);
    }

    const hash = existingUser.password;

    // Match Password and Hash
    const passwordMatched = await authService.checkPassword({ password, hash });
    if (!passwordMatched) {
      throw new Error(failedAuthMessage);
    }

    // Sign a new access token
    const token = authService.signToken(existingUser);

    // Set the refresh token as a httpOnly cookie on client
    const refreshToken = await authService.registerRefreshToken(
      existingUser.id
    );

    context?.res?.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
    });

    return { access: token };
  } catch (e) {
    console.log(e);
    throw e;
  }
};
