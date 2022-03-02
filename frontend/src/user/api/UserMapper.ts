import User from "../domain/User";
import { UserDto } from "./useUser";

class UserMapper {
  public toUser(userDto: UserDto): User | undefined {
    if (userDto) {
      return new User(userDto?.username, userDto?.email, userDto?.firstName, userDto?.lastName, userDto?.phoneNumber);
    }
  }
}

export default new UserMapper();
