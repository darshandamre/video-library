import axios from "axios";
import { useQuery } from "react-query";

export const useVideos = () =>
  useQuery("videos", async () => {
    const res = await axios.get("/api/videos");
    return res.data;
  });
