import { CustomValidator } from "express-validator";
import MongoUserModel from "../../../user/infra/models/MongoUserModel";

export const isUsedUsername: CustomValidator = async (value: string): Promise<string | void> => {
  const userWithEmail = await MongoUserModel.findOne({ username: value });
  if (!userWithEmail) {
    return Promise.reject("Username does not exist");
  }

  return Promise.resolve();
};
