import { useMutation } from "react-query";
import { privateReq, publicReq } from "../../axios";
import { setToken } from "../../utils/token";
import { queryClient } from "../client";
import { userKeys } from "../keyFactory";

const signup = async body => {
  const res = await publicReq.post("auth/signup", body);
  return res.data;
};

export const useSignup = () =>
  useMutation(signup, {
    onError: err => console.error(err),
    onSuccess: ({ encodedToken, createdUser }) => {
      setToken(encodedToken);
      privateReq.defaults.headers.authorization = encodedToken;
      queryClient.setQueryData(userKeys.info(), { user: createdUser });
    }
  });
