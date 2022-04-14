import { useQuery } from "react-query";
import { privateReq } from "../../axios";
import { getToken } from "../../utils/token";

export const useUser = () =>
  useQuery(
    "user",
    async () => {
      const res = await privateReq.get("/");
      return res.data;
    },
    {
      enabled: !!getToken()
    }
  );
