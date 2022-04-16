import { useQuery } from "react-query";
import { publicReq } from "../../axios";
import { videoKeys } from "../keyFactory";

const getVideos = async () => {
  const res = await publicReq.get("videos");
  return res.data;
};

export const useVideos = () => useQuery(videoKeys.all(), getVideos);
