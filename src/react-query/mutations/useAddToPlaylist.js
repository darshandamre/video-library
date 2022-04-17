import { useMutation } from "react-query";
import { privateReq } from "../../axios";
import { queryClient } from "../client";
import { userKeys } from "../keyFactory";

const addToPlaylist = async ({ playlistId, video }) => {
  const res = await privateReq.post(`playlists/${playlistId}`, {
    video
  });
  return res.data;
};

export const useAddToPlaylist = () =>
  useMutation(addToPlaylist, {
    onSuccess: data =>
      queryClient.setQueryData(userKeys.playlist(data.playlist._id), data)
  });
