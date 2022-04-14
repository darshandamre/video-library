import { useMutation } from "react-query";
import { privateReq, publicReq } from "../../axios";
import { setToken } from "../../utils/token";
import { queryClient } from "../client";

export const useSignup = () =>
  useMutation(
    async body => {
      const res = await publicReq.post("auth/signup", body);
      return res.data;
    },
    {
      onError: err => console.error(err),
      onSuccess: ({ encodedToken, createdUser }) => {
        setToken(encodedToken);
        privateReq.defaults.headers.authorization = encodedToken;
        queryClient.setQueryData("user", { user: createdUser });
      }
    }
  );
