import { useMutation } from "react-query";
import { privateReq, publicReq } from "../../axios";
import { setToken } from "../../utils/token";
import { queryClient } from "../client";

export const useLogin = () =>
  useMutation(
    async body => {
      const res = await publicReq.post("auth/login", body);
      return res.data;
    },
    {
      onError: err => console.error(err),
      onSuccess: ({ encodedToken, foundUser }) => {
        setToken(encodedToken);
        privateReq.defaults.headers.authorization = encodedToken;
        queryClient.setQueryData("user", { user: foundUser });
      }
    }
  );
