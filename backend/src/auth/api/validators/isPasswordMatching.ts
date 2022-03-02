import { CustomValidator } from "express-validator";
import MongoUserModel, { MongoUser } from "../../../user/infra/models/MongoUserModel";

export const isPasswordMatching: CustomValidator = async (value: string, { req }): Promise<string | void> => {
  const userWithGivenUsername = (await MongoUserModel.findOne({ username: req.body.username })) as unknown as MongoUser;
  if (!userWithGivenUsername || userWithGivenUsername?.password != value) {
    return Promise.reject("Password does not match the given username");
  }

  return Promise.resolve();
};
