import User from "src/user/domain/User";
import UserManipulator from "src/user/domain/UserManipulator";
import { instance, mock, when, verify } from "ts-mockito";
import AuthService from "../AuthService";

describe("AuthService", () => {
  const mockedUserManipulator = mock<UserManipulator>();
  const userManipulator = instance(mockedUserManipulator);
  const authService = new AuthService(userManipulator);

  describe("given UserManipulator creates and returns a user", () => {
    const aUser: User = {
      username: "abv",
      firstName: "asd",
      lastName: "dsa",
      email: "email@email.com",
      phoneNumber: "1234567890"
    };

    when(mockedUserManipulator.create(aUser)).thenResolve(aUser);

    describe("when signup", () => {
      it("should return new user", () => {
        authService.signup(aUser);

        verify(mockedUserManipulator.create(aUser)).called();
      });
    });
  });
});
