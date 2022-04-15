import { useMutation } from "react-query";
import { privateReq } from "../../axios";
import { queryClient } from "../client";

export const useRemoveFromLikes = () =>
  useMutation(
    async videoId => {
      const res = await privateReq.delete(`likes/${videoId}`);
      return res.data;
    },
    {
      onSuccess: data => queryClient.setQueryData("likes", data)
    }
  );
