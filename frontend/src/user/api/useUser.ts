import { useAxios } from "../../hooks/useAxios";
import { useEffect } from "react";
import UserMapper from "./UserMapper";

export type UserDto = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

export const useUser = (username: string) => {
  const { data, sendRequest, state, error } = useAxios();

  useEffect(() => {
    if (username) {
      const getByUsername = async () => {
        await sendRequest({ url: `/users/${username}`, method: "GET", withCredentials: true });
      };

      getByUsername();
    }
  }, [username]);

  return { user: UserMapper.toUser(data?.data as UserDto), state, error };
};
