import { useAxios } from "./useAxios";

export const useLogout = () => {
  const { data, sendRequest, state, error } = useAxios();

  const logout = () => {
    sendRequest({ url: "/logout", method: "GET", withCredentials: true });
  };

  return { data, state, logout, error };
};
