import { useMutation } from "react-query";
import { privateReq } from "../../axios";
import { queryClient } from "../client";
import { userKeys } from "../keyFactory";

const removeAllHistory = async () => {
  const res = await privateReq.delete("history/all");
  return res.data;
};

export const useRemoveAllHistory = () =>
  useMutation(removeAllHistory, {
    onSuccess: data => queryClient.setQueryData(userKeys.history(), data)
  });
