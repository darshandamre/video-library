import axios from "axios";
import { useQuery } from "react-query";
import { getToken } from "../../utils/token";

export const useUser = () =>
  useQuery(
    "user",
    async () => {
      const res = await axios.get("/api/user", {
        headers: {
          authorization: getToken()
        }
      });
      return res.data;
    },
    {
      enabled: !!getToken()
    }
  );
