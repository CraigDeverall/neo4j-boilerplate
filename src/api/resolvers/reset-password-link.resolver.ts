import { ogm } from "../../index";
import { v4 as uuid } from "uuid";
import { emailService } from "../../services/email-service";
import jwt from "jsonwebtoken";

const errorMessage = "Failed to create password reset link.";

export const resetPasswordLinkResolver = async (
  _source: any,
  { email }: { email: string },
  context: any
) => {
  try {
    context.res.set("access-control-expose-headers", "Set-Cookie");
    const UserModel = ogm.model("User");

    const id = uuid();

    const resp = await UserModel.update({
      where: {
        email: email,
      },
      create: {
        passwordResetTokens: [
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

    const resetLink = `https://localhost:8080/reset-password?token=${token}`;

    emailService.sendEmail({
      to: user.email,
      from: "noreply@klick.nz",
      text: "Klick - Password Reset Link",
      html: `
      <h1>KLICK - Password Reset</h1>
      <p>Click <a href="${resetLink}">here</a> to enter a new password<br/>or copy this URL into your browsers address bar: ${resetLink}</p>
      `,
    });

    return true;
  } catch (e) {
    console.log(e);
    throw new Error(errorMessage);
  }
};
