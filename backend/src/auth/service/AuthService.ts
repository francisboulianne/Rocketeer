import { UserDto } from "src/user/api/dtos/UserDto";
import UserMapper from "src/user/service/UserMapper";
import UserRepository from "../../user/domain/UserRepository";

export default class AuthService {
  constructor(private userMapper: UserMapper, private userRepository: UserRepository) {}

  public async signup(userDto: UserDto): Promise<UserDto> {
    const user = this.userMapper.toUser(userDto);
    const newUser = await this.userRepository.save(user);
    return this.userMapper.toDto(newUser);
  }

  public async login(username: string): Promise<UserDto> {
    const user = await this.userRepository.findByUsername(username);

    return this.userMapper.toDto(user);
  }
}
