import { useMutation } from "react-query";
import { privateReq } from "../../axios";
import { queryClient } from "../client";
import { userKeys } from "../keyFactory";

const removeFromPlaylist = async ({ playlistId, videoId }) => {
  const res = await privateReq.delete(`playlists/${playlistId}/${videoId}`);
  return res.data;
};

export const useRemoveFromPlaylist = () =>
  useMutation(removeFromPlaylist, {
    onSuccess: data => {
      queryClient.setQueryData(userKeys.playlists(), prevData => ({
        playlists: prevData?.playlists?.map(playlist =>
          playlist?._id === data?.playlist?._id ? data.playlist : playlist
        )
      }));
      queryClient.setQueryData(userKeys.playlist(data?.playlist?._id), data);
    }
  });
