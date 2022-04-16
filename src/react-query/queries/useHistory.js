import { useQuery } from "react-query";
import { privateReq } from "../../axios";
import { useAuth } from "../../context/AuthContext";
import { userKeys } from "../keyFactory";

const getHistory = async () => {
  const res = await privateReq.get("history");
  return res.data;
};

export const useHistory = () => {
  const { isAuth } = useAuth();

  return useQuery(userKeys.history(), getHistory, {
    enabled: isAuth
  });
};
