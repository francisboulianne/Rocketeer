import { CustomValidator } from "express-validator";
import MongoUserModel from "../../../user/infra/models/MongoUserModel";

export const isUnusedUsername: CustomValidator = async (value: string): Promise<string | void> => {
  const usersWithEmail = await MongoUserModel.find({ username: value });
  if (usersWithEmail.length > 1) {
    return Promise.reject("Username already exists");
  }

  return Promise.resolve();
};
