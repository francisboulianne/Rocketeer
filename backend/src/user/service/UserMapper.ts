import { UserDto } from "../api/dtos/UserDto";
import User from "../domain/User";

export default class UserMapper {
  toUser(userDto: UserDto): User {
    return {
      username: userDto.username,
      firstName: userDto.firstName,
      lastName: userDto.lastName,
      email: userDto.email,
      phoneNumber: userDto.phoneNumber,
      password: userDto.password
    };
  }

  toDto(user: User): UserDto {
    return {
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      password: user.password
    };
  }
}
