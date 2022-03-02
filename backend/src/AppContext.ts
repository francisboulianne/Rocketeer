import LocalAuthProvider from "./auth/infra/LocalAuthProvider";
import AuthService from "./auth/service/AuthService";
import MongoUserMapper from "./user/infra/MongoUserMapper";
import MongoUserRepository from "./user/infra/MongoUserRepository";
import UserMapper from "./user/service/UserMapper";
import UserService from "./user/service/UserService";

const userMapper = new UserMapper();
const mongoUserMapper = new MongoUserMapper();

const userRepository = new MongoUserRepository(mongoUserMapper);

export const localAuthProvider = new LocalAuthProvider();

export const userService = new UserService(userMapper, userRepository);
export const authService = new AuthService(userMapper, userRepository);
