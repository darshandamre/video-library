import { useMutation } from "react-query";
import { privateReq } from "../../axios";
import { queryClient } from "../client";
import { userKeys } from "../keyFactory";

const removeFromLikes = async videoId => {
  const res = await privateReq.delete(`likes/${videoId}`);
  return res.data;
};

export const useRemoveFromLikes = () =>
  useMutation(removeFromLikes, {
    onSuccess: data => queryClient.setQueryData(userKeys.likes(), data)
  });
