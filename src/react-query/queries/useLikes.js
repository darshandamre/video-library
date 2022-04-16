import { useQuery } from "react-query";
import { privateReq } from "../../axios";
import { useAuth } from "../../context/AuthContext";
import { userKeys } from "../keyFactory";

const getLikes = async () => {
  const res = await privateReq.get("likes");
  return res.data;
};

export const useLikes = () => {
  const { isAuth } = useAuth();

  return useQuery(userKeys.likes(), getLikes, {
    enabled: isAuth
  });
};
