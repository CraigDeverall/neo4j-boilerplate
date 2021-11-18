import { ogm } from "../../index";
import jwt, { JwtPayload } from "jsonwebtoken";
import { authService } from "../../services/auth-service";

const errorMessage = "Failed to reset password.";

type ResolverParams = { token: string; password: string };

export const resetPasswordResolver = async (
  _source: any,
  { token, password }: ResolverParams,
  context: any
) => {
  try {
    context.res.set("access-control-expose-headers", "Set-Cookie");
    const decoded = jwt.verify(token, process.env.SECRET) as JwtPayload;
    const UserModel = ogm.model("User");
    const PasswordResetTokenModel = ogm.model("PasswordResetToken");
    const hash = await authService.hashPassword(password);
    const resp = await UserModel.update({
      where: {
        passwordResetTokens: {
          id: decoded.tokenId,
        },
      },
      update: {
        password: hash,
      },
    });

    if (resp.users.length < 1) throw new Error(errorMessage);

    const deleteResp = await PasswordResetTokenModel.delete({
      where: { id: decoded.tokenId },
    });

    const user = resp.users[0];
    const accessToken = authService.signToken(user);
    return { access: accessToken };
  } catch (e) {
    console.log(e);
    throw new Error(errorMessage);
  }
};
