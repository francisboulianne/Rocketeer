import { useAxios } from "./useAxios";

export type Credentials = {
  username: string;
  password: string;
};

export const useLogin = () => {
  const { data, sendRequest, state, error } = useAxios();

  const loginUser = (credentials: Credentials) => {
    sendRequest({ url: "/login", method: "POST", data: credentials, withCredentials: true });
  };

  return { data, state, loginUser, error };
};
