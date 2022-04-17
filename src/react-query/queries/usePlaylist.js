import { useQuery } from "react-query";
import { privateReq } from "../../axios";
import { useAuth } from "../../context/AuthContext";
import { userKeys } from "../keyFactory";

const getPlaylistById = playlistId => {
  const res = privateReq.get(`playlists/${playlistId}`);
  return res.data;
};

export const usePlaylist = playlistId => {
  const { isAuth } = useAuth();

  return useQuery(
    userKeys.playlist(playlistId),
    () => getPlaylistById(playlistId),
    {
      enabled: isAuth
    }
  );
};
