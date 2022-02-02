import User from "./User";

interface UserRepository {
  create(user: User): Promise<User>;
}

export default UserRepository;
