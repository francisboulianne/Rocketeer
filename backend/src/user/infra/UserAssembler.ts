import User from "../domain/User";
import UserModel, { UserDto } from "./models/UserModel";

export default class UserAssembler {
  toExternal(user: User) {
    return new UserModel({
      email: user.email,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      password: user.password
    });
  }

  toDomain(userDto: UserDto): User {
    return {
      username: userDto.username,
      firstName: userDto.firstName,
      lastName: userDto.lastName,
      email: userDto.email,
      phoneNumber: userDto.phoneNumber,
      password: userDto.password
    };
  }
}
