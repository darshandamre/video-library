import { useMutation } from "react-query";
import { privateReq } from "../../axios";
import { queryClient } from "../client";
import { userKeys } from "../keyFactory";

const removeFromWatchLater = async videoId => {
  const res = await privateReq.delete(`watchlater/${videoId}`);
  return res.data;
};

export const useRemoveFromWatchLater = () =>
  useMutation(removeFromWatchLater, {
    onSuccess: data => queryClient.setQueryData(userKeys.watchLater(), data)
  });
