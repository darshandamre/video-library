import { useMutation } from "react-query";
import { privateReq } from "../../axios";
import { queryClient } from "../client";

export const useAddToWatchLater = () =>
  useMutation(
    async video => {
      const res = await privateReq.post("watchlater", { video });
      return res.data;
    },
    {
      onSuccess: data => queryClient.setQueryData("watchlater", data)
    }
  );
