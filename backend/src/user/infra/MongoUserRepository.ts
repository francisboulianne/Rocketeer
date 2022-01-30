import User from "../domain/User";
import UserManipulator from "../domain/UserManipulator";
import UserAssembler from "./UserAssembler";

export default class MongoDbUserRepository implements UserManipulator {
  constructor(private userAssembler: UserAssembler) {
    this.userAssembler = userAssembler;
  }

  public async create(user: User): Promise<User> {
    const userModel = this.userAssembler.toExternal(user);
    return this.userAssembler.toDomain(await userModel.save());
  }
}
