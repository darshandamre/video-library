import axios from "axios";
import { useMutation } from "react-query";
import { privateReq } from "../../axios";
import { setToken } from "../../utils/token";
import { queryClient } from "../client";

export const useSignup = () =>
  useMutation(
    async body => {
      const res = await axios.post("api/auth/signup", body);
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
