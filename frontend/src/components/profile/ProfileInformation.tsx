import User from "../../user/domain/User";

interface Props {
  user: User;
}

export const ProfileInformation = ({ user }: Props) => {
  return (
    <div>
      <b>Welcome to Rocketeer</b>
      <h1>{user.username}</h1>
      <h1>{user.firstName}</h1>
      <h1>{user.lastName}</h1>
      <h1>{user.email}</h1>
      <h1>{user.phoneNumber}</h1>
    </div>
  );
};
