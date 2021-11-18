import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../types";
import { ogm } from "../index";
import { v4 as uuid } from "uuid";

const tokenExpiryTime = "30s"; // 3 DAYS "3m" 3 MINS

class AuthService {
  async registerRefreshToken(userId: string) {
    const tokenId = uuid();
    const UserModel = ogm.model("User");
    await UserModel.update({
      where: { id: userId },
      create: {
        refreshTokens: [{ node: { id: tokenId } }],
      },
    });
    return tokenId;
  }

  async registerEmailVerificationToken(userId: string) {
    const tokenId = uuid();
    const UserModel = ogm.model("User");
    await UserModel.update({
      where: { id: userId },
      create: {
        emailVerificationTokens: [{ node: { id: tokenId } }],
      },
    });
    return tokenId;
  }

  async hashPassword(password: string) {
    return await new Promise((resolve) =>
      bcrypt.hash(password, 10, function (err: Error, hash: string) {
        if (err) throw err;
        resolve(hash);
      })
    );
  }

  signToken(user: User) {
    const accessToken = jwt.sign({ sub: user.id }, process.env.SECRET, {
      expiresIn: tokenExpiryTime,
    });
    return accessToken;
  }

  checkPassword({ password, hash }: { password: string; hash: string }) {
    return bcrypt.compare(password, hash);
  }
}

export const authService = new AuthService();
