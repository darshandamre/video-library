import { useMutation } from "react-query";
import { privateReq } from "../../axios";
import { queryClient } from "../client";
import { userKeys } from "../keyFactory";

const addToLikes = async video => {
  const res = await privateReq.post("likes", { video });
  return res.data;
};

export const useAddToLikes = () =>
  useMutation(addToLikes, {
    onSuccess: data => queryClient.setQueryData(userKeys.likes(), data)
  });
