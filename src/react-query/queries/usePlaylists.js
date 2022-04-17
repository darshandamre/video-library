import { useQuery } from "react-query";
import { privateReq } from "../../axios";
import { useAuth } from "../../context/AuthContext";
import { userKeys } from "../keyFactory";

const getAllPlaylists = async () => {
  const res = await privateReq.get("playlists");
  return res.data;
};

export const usePlaylists = () => {
  const { isAuth } = useAuth();

  return useQuery(userKeys.playlists(), getAllPlaylists, {
    enabled: isAuth
  });
};
