import { useQuery } from "react-query";
import { privateReq } from "../../axios";

export const useWatchLater = () =>
  useQuery("watchlater", async () => {
    const res = await privateReq.get("watchlater");
    return res.data;
  });
