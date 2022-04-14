import { useQuery } from "react-query";
import { publicReq } from "../../axios";

export const useVideos = () =>
  useQuery("videos", async () => {
    const res = await publicReq.get("videos");
    return res.data;
  });
