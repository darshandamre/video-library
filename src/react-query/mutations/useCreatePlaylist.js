import { useMutation } from "react-query";
import { privateReq } from "../../axios";
import { queryClient } from "../client";
import { userKeys } from "../keyFactory";

const createPlaylist = async playlist => {
  const res = await privateReq.post("playlists", { playlist });
  return res.data;
};

export const useCreatePlaylist = () =>
  useMutation(createPlaylist, {
    onSuccess: data => queryClient.setQueryData(userKeys.playlists(), data)
  });
