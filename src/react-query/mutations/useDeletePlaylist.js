import { useMutation } from "react-query";
import { privateReq } from "../../axios";
import { queryClient } from "../client";
import { userKeys } from "../keyFactory";

const deletePlaylist = async playlistId => {
  const res = await privateReq.delete(`playlists/${playlistId}`);
  return res.data;
};

export const useDeletePlaylist = () =>
  useMutation(deletePlaylist, {
    onSuccess: data => queryClient.setQueryData(userKeys.playlists(), data)
  });
