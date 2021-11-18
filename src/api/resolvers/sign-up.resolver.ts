import { AuthenticateUserArgs } from "../../definitions";
import { authService } from "../../services/auth-service";
import { User } from "../../types";
import { ogm } from "../../index";
import { emailService } from "../../services/email-service";
import { subYears } from "date-fns";

interface RegisterUserArgs extends AuthenticateUserArgs {
  name: string;
  dateOfBirth: string;
}

export const signUpResolver = async (
  _source: any,
  { email, password, name, dateOfBirth }: RegisterUserArgs,
  context: any,
  info: any
) => {
  const UserModal = ogm.model("User");

  context.res.set("access-control-expose-headers", "Set-Cookie");

  try {
    const resp = await UserModal.find<[User]>({
      where: {
        email,
      },
    });
    const existingUser = resp && resp[0];

    if (existingUser) {
      throw new Error(`User with username ${email} already exists.`);
    }
  } catch (e) {
    console.log(e);
    throw e;
  }

  const passwordHash = await authService.hashPassword(password);
  const resp = await UserModal.create<{ users: [User] }>({
    input: [
      {
        name,
        email,
        dateOfBirth,
        password: passwordHash,
      },
    ],
  });

  const newUser = Array.isArray(resp?.users) ? resp.users[0] : undefined;
  const accessToken = authService.signToken(newUser && newUser);
  const verifyEmailToken = await authService.registerEmailVerificationToken(
    newUser?.id
  );

  emailService.sendSignUpEmail(newUser, verifyEmailToken);

  await UserModal.update<{ users: [User] }>({
    where: {
      id: newUser.id,
    },
    update: {
      profile: {
        create: {
          node: {
            public: false,
            name: "",
            availability: "",
            description: "",
            pricingInformation: "",
          },
        },
      },
    },
  });

  // Set the refresh token as a httpOnly cookie on client
  const refreshToken = await authService.registerRefreshToken(newUser.id);

  context?.res?.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
  });

  return { access: accessToken };
};
