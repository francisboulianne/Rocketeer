import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { authService } from "../../AppContext";
import { UserDto } from "src/user/api/dtos/UserDto";
import MongoUserModel from "../../user/infra/models/MongoUserModel";
import { CredentialsDto } from "./dtos/CredentialsDto";
import { isUnusedEmail } from "./validators/isUnusedEmail";
import { isUnusedUsername } from "./validators/isUnusedUsername";
import { isUsedUsername } from "./validators/isUsedUsername";

const router = express.Router();

router.post(
  "/signup",
  body("username").exists().withMessage("The username field is required").custom(isUnusedUsername),
  body("email").isEmail().withMessage("Email is not valid ").custom(isUnusedEmail),
  body("firstName").exists().withMessage("The first name field is required"),
  body("lastName").exists().withMessage("The last name field is required"),
  body("phoneNumber").isMobilePhone("any").withMessage("Phone number is not valid"),
  body("password").exists().withMessage("The password field is required"),
  async (req: Request<Record<string, unknown>, Record<string, unknown>, UserDto>, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newUser = await authService.signup(req.body);
    return res.status(201).setHeader("LOCATION", `/users/${newUser.username}`).json(newUser);
  }
);

router.post(
  "/login",
  body("username").exists().withMessage("The username field is required").custom(isUsedUsername),
  body("password").custom(async (value, { req }): Promise<string | void> => {
    const userWithGivenUsername = await MongoUserModel.findOne({ username: req.body.username });
    if (!userWithGivenUsername || userWithGivenUsername?.password != value) {
      return Promise.reject("Password does not match the given username");
    }

    return Promise.resolve();
  }),
  async (req: Request<Record<string, unknown>, Record<string, unknown>, CredentialsDto>, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = await authService.login(req.body.username);
    return res.status(201).setHeader("LOCATION", `/users/${user.username}`).json(user);
  }
);

module.exports = router;
