import { useMutation } from "react-query";
import { privateReq } from "../../axios";
import { queryClient } from "../client";

export const useAddToLikes = () =>
  useMutation(
    async video => {
      const res = await privateReq.post("likes", { video });
      return res.data;
    },
    {
      onSuccess: data => queryClient.setQueryData("likes", data)
    }
  );
