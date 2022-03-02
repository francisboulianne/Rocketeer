import User from "src/user/domain/User";
import { AuthProvider } from "../domain/AuthProvider";

const jwt = require("jsonwebtoken");
const secretKey = "jwk7fl3nyd51ge3hd9klzmxslopfgt2e";

export default class LocalAuthProvider implements AuthProvider {
  login(user: User): string {
    return jwt.sign({ user_id: user.username }, secretKey);
  }

  verifyToken(token: string): void {
    jwt.verify(token, secretKey);
  }
}
