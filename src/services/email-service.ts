import mailgun, { Mailgun } from "mailgun-js";
import { User } from "../types";
import jwt from "jsonwebtoken";

class EmailService {
  private emailClient: Mailgun;

  constructor() {
    this.emailClient = mailgun({
      apiKey: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN,
    });
  }

  async sendEmail(email: mailgun.messages.SendData) {
    await new Promise<void>((resolve) =>
      this.emailClient.messages().send(email, function (error, body) {
        if (!error) resolve();
      })
    );
  }

  async sendSignUpEmail(user: User, emailVerificationTokenId: string) {
    const token = jwt.sign(emailVerificationTokenId, process.env.SECRET);
    const verifyLink = `https://localhost:8080/verify-email?token=${token}`;

    await emailService.sendEmail({
      to: user.email,
      from: "noreply@klick.nz",
      text: "Klick - Verify Your Email",
      subject: "Klick - Verify Your Email Address",
      html: `
      <h1>KLICK - WELCOME! - Verify Your Email</h1>
      <p>Thanks for joining Klick. Welcome!</p>
      <p>Click <a href="${verifyLink}">here</a> to verify your email address.<br/>Alternativley copy this URL into your browsers address bar: ${verifyLink}</p>
      `,
    });
  }
}

export const emailService = new EmailService();
