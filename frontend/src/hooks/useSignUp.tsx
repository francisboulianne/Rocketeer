import { useAxios } from "./useAxios";

export type SignUpRequest = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
};

export const useSignUp = () => {
  const { data, sendRequest, state, error } = useAxios();

  const signUpUser = (signUpRequest: SignUpRequest) => {
    sendRequest({ url: "/signup", method: "POST", data: signUpRequest });
  };

  return { data, state, signUpUser, error };
};
