import axios from "axios";
import { useQuery } from "react-query";

export const useVideo = videoId =>
  useQuery(["video", videoId], async () => {
    const res = await axios.get(`/api/video/${videoId}`);
    return res.data;
  });
