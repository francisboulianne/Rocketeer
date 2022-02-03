import { CustomValidator } from "express-validator";
import MongoUserModel from "../../../user/infra/models/MongoUserModel";

export const isUnusedEmail: CustomValidator = async (value: string): Promise<string | void> => {
  const usersWithEmail = await MongoUserModel.find({ email: value });
  if (usersWithEmail.length > 1) {
    return Promise.reject("Email is already in use");
  }

  return Promise.resolve();
};
