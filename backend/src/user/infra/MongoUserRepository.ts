import User from "../domain/User";
import UserNotFoundException from "../domain/UserNotFoundException";
import UserRepository from "../domain/UserRepository";
import UserModel, { MongoUser } from "./models/MongoUserModel";
import MongoUserMapper from "./MongoUserMapper";

export default class MongoUserRepository implements UserRepository {
  constructor(private mongoUserMapper: MongoUserMapper) {
    this.mongoUserMapper = mongoUserMapper;
  }

  public async save(user: User): Promise<User> {
    const mongoUser = this.mongoUserMapper.toMongoUser(user);
    return this.mongoUserMapper.toUser(await mongoUser.save());
  }

  public async findByUsername(username: string): Promise<User> {
    const userDto = (await UserModel.findOne({ username })) as unknown as MongoUser;

    if (!userDto) {
      throw new UserNotFoundException();
    }

    return this.mongoUserMapper.toUser(userDto);
  }
}
