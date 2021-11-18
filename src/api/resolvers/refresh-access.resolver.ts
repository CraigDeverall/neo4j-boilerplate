import { authService } from "../../services/auth-service";
import { User } from "../../types";
import { ogm } from "../../index";

const failedAuthMessage = `Failed Authentication via refresh. Please Re-Authenticate.`;

export const refreshAccessResolver = async (_source: any, {}, context: any) => {
  try {
    context.res.set("access-control-expose-headers", "Set-Cookie");
    const UserModal = ogm.model("User");

    const refreshToken = context.req.cookies.refreshToken;

    // Get user that is connected to refresh token AND user also has id of jwt subject.
    const resp = await UserModal.find<[User]>({
      where: {
        AND: [
          {
            refreshTokens: {
              id: refreshToken,
            },
          },
          {
            id: context?.auth.jwt?.sub,
          },
        ],
      },
    });

    console.log("REFRESH TOKEN ISSUE", resp);

    const existingUser =
      Array.isArray(resp) && resp.length === 1 ? resp[0] : undefined;

    // If user exists then they owned the refreshToken and had an access token signed for the user.
    if (!existingUser) {
      throw new Error(failedAuthMessage);
    }

    // Sign a new access token
    const token = authService.signToken(existingUser);

    return { access: token };
  } catch (e) {
    throw new Error(failedAuthMessage);
  }
};
