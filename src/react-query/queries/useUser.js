import { useQuery } from "react-query";
import { privateReq } from "../../axios";
import { useAuth } from "../../context/AuthContext";
import { userKeys } from "../keyFactory";

const getUser = async () => {
  const res = await privateReq.get("/");
  return res.data;
};

export const useUser = () => {
  const { isAuth } = useAuth();

  return useQuery(userKeys.info(), getUser, {
    enabled: isAuth
  });
};
