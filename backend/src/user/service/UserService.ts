import User from "../domain/User";
import UserRepository from "../domain/UserRepository";

export default class UserService {
  constructor(private userRepository: UserRepository) {}

  public async findByUsername(username: string): Promise<User> {
    return await this.userRepository.findByUsername(username);
  }
}
