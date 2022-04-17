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
    onError: err => console.error({ err }),
    onSuccess: data => {
      queryClient.setQueryData(userKeys.playlists(), prevData => ({
        playlists: prevData?.playlists?.map(playlist =>
          playlist?._id === data?.playlist?._id ? data.playlist : playlist
        )
      }));
      queryClient.setQueryData(userKeys.playlist(data.playlist._id), data);
    }
  });
