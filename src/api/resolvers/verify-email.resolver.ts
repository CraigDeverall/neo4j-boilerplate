import { ogm } from "../../index";
import jwt, { JwtPayload } from "jsonwebtoken";
import { authService } from "../../services/auth-service";

const errorMessage = "Failed to verify email address.";

type ResolverParams = { token: string };

export const verifyEmailResolver = async (
  _source: any,
  { token }: ResolverParams,
  context: any
) => {
  try {
    // We are only verifying email address on user if they are in accessToken
    // and they are connected to passed in emailVerificationToken.
    const accessToken = context?.req?.headers?.authorization?.replace(
      "Bearer ",
      ""
    );
    const decodedEmailVerificationToken = jwt.verify(
      token,
      process.env.SECRET
    ) as JwtPayload;
    const decodedAccessToken = jwt.verify(accessToken, process.env.SECRET);
    const UserModel = ogm.model("User");
    const EmailVerificationTokenModel = ogm.model("EmailVerificationToken");
    console.log("-----------------------");
    console.log("DECODED!!!!", JSON.stringify(decodedEmailVerificationToken));
    console.log("-----------------------");
    const resp = await UserModel.update({
      where: {
        id: decodedAccessToken?.sub,
        emailVerificationTokens: {
          id: decodedEmailVerificationToken?.tokenId,
        },
      },
      update: {
        emailVerified: true,
      },
    });

    // The presence of no users means the security check above didnt pass
    if (resp.users.length < 1) throw new Error(errorMessage);

    // Ensure verification token is single use
    await EmailVerificationTokenModel.delete({
      where: { id: token },
    });

    const user = resp.users[0];

    return user;
  } catch (e) {
    console.log(e);
    throw new Error(errorMessage);
  }
};
