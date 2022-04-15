import { useQuery } from "react-query";
import { privateReq } from "../../axios";

export const useLikes = () =>
  useQuery("likes", async () => {
    const res = await privateReq.get("likes");
    return res.data;
  });
