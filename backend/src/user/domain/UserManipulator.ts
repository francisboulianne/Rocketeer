import User from "./User";

interface UserManipulator {
  create(user: User): Promise<User>;
}

export default UserManipulator;
