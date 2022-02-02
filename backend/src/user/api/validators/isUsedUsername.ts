import { CustomValidator } from "express-validator";
import UserModel from "../../infra/models/UserModel";

export const isUsedUsername: CustomValidator = async (value: string): Promise<string | void> => {
  const userWithEmail = await UserModel.findOne({ username: value });
  if (!userWithEmail) {
    return Promise.reject("Username does not exist");
  }

  return Promise.resolve();
};
