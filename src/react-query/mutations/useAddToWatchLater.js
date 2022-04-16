import { useMutation } from "react-query";
import { privateReq } from "../../axios";
import { queryClient } from "../client";
import { userKeys } from "../keyFactory";

const addToWatchLater = async video => {
  const res = await privateReq.post("watchlater", { video });
  return res.data;
};

export const useAddToWatchLater = () =>
  useMutation(addToWatchLater, {
    onSuccess: data => queryClient.setQueryData(userKeys.watchLater(), data)
  });
