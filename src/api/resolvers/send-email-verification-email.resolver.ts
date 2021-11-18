import { ogm } from "../../index";
import { v4 as uuid } from "uuid";
import { emailService } from "../../services/email-service";
import jwt, { decode } from "jsonwebtoken";

const errorMessage = "Failed to send email verification email.";

export const sendEmailVerificationEmail = async (
  _source: any,
  {},
  context: any //@TODO type with graphql context
) => {
  try {
    context.res.set("access-control-expose-headers", "Set-Cookie");
    const UserModel = ogm.model("User");

    const id = uuid();

    const accessToken = context?.req?.headers?.authorization?.replace(
      "Bearer ",
      ""
    );

    const decoded = jwt.verify(accessToken, process.env.SECRET);
    const resp = await UserModel.update({
      where: {
        id: decoded?.sub,
      },
      create: {
        emailVerificationTokens: [
          {
            node: {
              id: id,
            },
          },
        ],
      },
    });

    if (resp.users.length < 1) throw new Error(errorMessage);
    const user = resp.users[0];

    const token = jwt.sign({ ...user, tokenId: id }, process.env.SECRET);
    const verifyLink = `https://localhost:8080/verify-email?token=${token}`;

    emailService.sendEmail({
      to: user.email,
      from: "noreply@klick.nz",
      text: "Klick - Verify Your Email",
      subject: "Klick - Verify Your Email Address",
      html: `
      <h1>KLICK - Verify Your Email</h1>
      <p>Click <a href="${verifyLink}">here</a> to verify your email address.<br/>Alternativley copy this URL into your browsers address bar: ${verifyLink}</p>
      `,
    });

    return true;
  } catch (e) {
    console.log(e);
    throw new Error(errorMessage);
  }
};
