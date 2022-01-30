import User from "src/user/domain/User";
import UserAssembler from "../assemblers/UserAssembler";
import { SignUpRequest } from "../dtos/SignUpRequest";

describe("UserAssembler", () => {
  const userAssembler = new UserAssembler();
  const aUsername = "frankTheTank";
  const aFirstName = "Franky";
  const aLastName = "Boy";
  const anEmail = "franky@email.com";
  const aPhoneNumber = "418-123-4567";

  describe("given a SignUpRequest", () => {
    const aUserDto: SignUpRequest = {
      username: aUsername,
      firstName: aFirstName,
      lastName: aLastName,
      email: anEmail,
      phoneNumber: aPhoneNumber
    };

    describe("when assembling to domain", () => {
      it("should assemble with corresponding parameters", () => {
        const actual = userAssembler.toDomain(aUserDto);

        const expected: User = {
          username: aUsername,
          firstName: aFirstName,
          lastName: aLastName,
          email: anEmail,
          phoneNumber: aPhoneNumber
        };

        expect(actual).toEqual(expected);
      });
    });
  });
});
