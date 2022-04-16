import { useMutation } from "react-query";
import { privateReq } from "../../axios";
import { queryClient } from "../client";
import { userKeys } from "../keyFactory";

const removeFromHistory = async videoId => {
  const res = await privateReq.delete(`history/${videoId}`);
  return res.data;
};

export const useRemoveFromHistory = () =>
  useMutation(removeFromHistory, {
    onSuccess: data => queryClient.setQueryData(userKeys.history(), data)
  });
