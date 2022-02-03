export default class UserNotFoundException extends Error {
  constructor() {
    super("The user was not found");
  }
}
