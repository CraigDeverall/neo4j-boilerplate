import { signUpResolver } from "./sign-up.resolver";
import { signInResolver } from "./sign-in.resolver";
import { refreshAccessResolver } from "./refresh-access.resolver";
import { signOutReslover } from "./sign-out.resolver";
import { resetPasswordLinkResolver } from "./reset-password-link.resolver";
import { resetPasswordResolver } from "./reset-password.resolver";
import { sendEmailVerificationEmail } from "./send-email-verification-email.resolver";
import { verifyEmailResolver } from "./verify-email.resolver";

export const resolvers = {
  Mutation: {
    signIn: signInResolver,
    signUp: signUpResolver,
    refreshAccess: refreshAccessResolver,
    signOut: signOutReslover,
    resetPasswordLink: resetPasswordLinkResolver,
    resetPassword: resetPasswordResolver,
    sendEmailVerificationEmail: sendEmailVerificationEmail,
    verifyEmail: verifyEmailResolver,
  },
};
