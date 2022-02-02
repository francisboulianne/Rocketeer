import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import User from "../domain/User";
import UserModel from "../infra/models/UserModel";
import MongoDbUserRepository from "../infra/MongoUserRepository";
import InfraUserAssembler from "../infra/UserAssembler";
import AuthService from "../service/AuthService";
import ApiUserAssembler from "./assemblers/UserAssembler";
import { LoginRequest } from "./dtos/LoginRequest";
import { SignUpRequest } from "./dtos/SignUpRequest";
import { isUnusedEmail } from "./validators/isUnusedEmail";
import { isUnusedUsername } from "./validators/isUnusedUsername";
import { isUsedUsername } from "./validators/isUsedUsername";

const router = express.Router();

const apiUserAssembler = new ApiUserAssembler();
const infraUserAssembler = new InfraUserAssembler();
const userRepository = new MongoDbUserRepository(infraUserAssembler);
const authService = new AuthService(userRepository);

router.post(
  "/signup",
  body("username").exists().withMessage("The username field is required").custom(isUnusedUsername),
  body("email").isEmail().withMessage("Email is not valid ").custom(isUnusedEmail),
  body("firstName").exists().withMessage("The first name field is required"),
  body("lastName").exists().withMessage("The last name field is required"),
  body("phoneNumber").isMobilePhone("any").withMessage("Phone number is not valid"),
  body("password").exists().withMessage("The password field is required"),
  async (req: Request<Record<string, unknown>, Record<string, unknown>, SignUpRequest>, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = apiUserAssembler.toDomain(req.body);
    const newUser = await authService.signup(user);
    return res.status(201).setHeader("LOCATION", `/users/${newUser.username}`).json(newUser);
  }
);

router.post(
  "/login",
  body("username").exists().withMessage("The username field is required").custom(isUsedUsername),
  body("password").custom(async (value, { req }): Promise<string | void> => {
    const userWithGivenUsername = await UserModel.findOne({ username: req.body.username });
    if (!userWithGivenUsername || userWithGivenUsername?.password != value) {
      return Promise.reject("Password does not match the given username");
    }

    return Promise.resolve();
  }),
  async (req: Request<Record<string, unknown>, Record<string, unknown>, LoginRequest>, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = apiUserAssembler.toDomain(req.body as User);
    const newUser = await authService.signup(user);
    return res.status(201).setHeader("LOCATION", `/users/${newUser.username}`).json(newUser);
  }
);

module.exports = router;
