import User from "../domain/User";
import UserManipulator from "../domain/UserManipulator";

export default class AuthService {
  constructor(private userManipulator: UserManipulator) {}

  public async signup(user: User): Promise<User> {
    return this.userManipulator.create(user);
  }
}
