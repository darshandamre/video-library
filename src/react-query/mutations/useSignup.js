import axios from "axios";
import { useMutation } from "react-query";
import { setToken } from "../../utils/token";

export const useSignup = () =>
  useMutation(
    async body => {
      const res = await axios.post("api/auth/signup", body);
      return res.data;
    },
    {
      onError: err => console.error(err),
      onSuccess: ({ encodedToken, createdUser }) => setToken(encodedToken)
    }
  );
