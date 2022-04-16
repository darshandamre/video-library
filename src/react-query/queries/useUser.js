import { useQuery } from "react-query";
import { privateReq } from "../../axios";
import { getToken } from "../../utils/token";
import { userKeys } from "../keyFactory";

const getUser = async () => {
  const res = await privateReq.get("/");
  return res.data;
};

export const useUser = () =>
  useQuery(userKeys.info(), getUser, {
    enabled: !!getToken()
  });
