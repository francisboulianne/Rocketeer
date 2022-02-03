import User from "../domain/User";
import MongoUserModel, { MongoUser } from "./models/MongoUserModel";

export default class MongoUserMapper {
  toUser(mongoUser: MongoUser): User {
    return {
      email: mongoUser.email,
      username: mongoUser.username,
      firstName: mongoUser.firstName,
      lastName: mongoUser.lastName,
      phoneNumber: mongoUser.phoneNumber,
      password: mongoUser.password
    };
  }

  toMongoUser(user: User) {
    return new MongoUserModel({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      password: user.password
    });
  }
}
