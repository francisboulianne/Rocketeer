import User from "../../domain/User";
import { SignUpRequest } from "../dtos/SignUpRequest";

export default class UserAssembler {
  toDomain(signUpRequest: SignUpRequest): User {
    return {
      username: signUpRequest.username,
      firstName: signUpRequest.firstName,
      lastName: signUpRequest.lastName,
      email: signUpRequest.email,
      phoneNumber: signUpRequest.phoneNumber
    };
  }
}
