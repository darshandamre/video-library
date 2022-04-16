import { useQuery } from "react-query";
import { privateReq } from "../../axios";
import { useAuth } from "../../context/AuthContext";
import { userKeys } from "../keyFactory";

const getWatchLater = async () => {
  const res = await privateReq.get("watchlater");
  return res.data;
};

export const useWatchLater = () => {
  const { isAuth } = useAuth();

  return useQuery(userKeys.watchLater(), getWatchLater, {
    enabled: isAuth
  });
};
