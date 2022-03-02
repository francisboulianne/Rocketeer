import User from "src/user/domain/User";

export interface AuthProvider {
  login(user: User): string;
  verifyToken(token: string): void;
}
