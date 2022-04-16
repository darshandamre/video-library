import { useMutation } from "react-query";
import { privateReq } from "../../axios";
import { queryClient } from "../client";
import { userKeys } from "../keyFactory";

const addToHistory = async video => {
  const res = await privateReq.post("history", { video });
  return res.data;
};

export const useAddToHistory = () =>
  useMutation(addToHistory, {
    onSuccess: data => queryClient.setQueryData(userKeys.history(), data)
  });
