import { useMutation } from "react-query";
import { privateReq, publicReq } from "../../axios";
import { setToken } from "../../utils/token";
import { queryClient } from "../client";
import { userKeys } from "../keyFactory";

const login = async body => {
  const res = await publicReq.post("auth/login", body);
  return res.data;
};

export const useLogin = () =>
  useMutation(login, {
    onError: err => console.error(err),
    onSuccess: ({ encodedToken, foundUser }) => {
      setToken(encodedToken);
      privateReq.defaults.headers.authorization = encodedToken;
      queryClient.setQueryData(userKeys.info(), { user: foundUser });
    }
  });
