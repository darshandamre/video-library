import { useMutation } from "react-query";
import { privateReq } from "../../axios";
import { queryClient } from "../client";

export const useRemoveFromWatchLater = () =>
  useMutation(
    async videoId => {
      const res = await privateReq.delete(`watchlater/${videoId}`);
      console.log(res);
      return res.data;
    },
    {
      onSuccess: data => queryClient.setQueryData("watchlater", data)
    }
  );
