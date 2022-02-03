import { prop, getModelForClass, modelOptions } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { collection: "users", timestamps: true } })
export class MongoUser {
  @prop({ type: String, required: true })
  public username: string;

  @prop({ type: String, required: true })
  public email: string;

  @prop({ type: String, required: true })
  public firstName: string;

  @prop({ type: String, required: true })
  public lastName: string;

  @prop({ type: String, required: true })
  public phoneNumber: string;

  @prop({ type: String, required: true })
  public password: string;

  public createdAt?: Date;

  public updatedAt?: Date;
}

const MongoUserModel = getModelForClass(MongoUser);

export default MongoUserModel;
