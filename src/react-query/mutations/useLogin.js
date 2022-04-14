import axios from "axios";
import { useMutation } from "react-query";
import { privateReq } from "../../axios";
import { setToken } from "../../utils/token";
import { queryClient } from "../client";

export const useLogin = () =>
  useMutation(
    async body => {
      const res = await axios.post("api/auth/login", body);
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
