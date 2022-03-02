import { UserDto } from "../api/dtos/UserDto";
import UserRepository from "../domain/UserRepository";
import UserMapper from "./UserMapper";

export default class UserService {
  constructor(private userMapper: UserMapper, private userRepository: UserRepository) {}

  public async findByUsername(username: string): Promise<UserDto> {
    return this.userMapper.toDto(await this.userRepository.findByUsername(username));
  }
}
