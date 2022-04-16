import axios from "axios";
import { useQuery } from "react-query";
import { videoKeys } from "../keyFactory";

const getVideoById = async videoId => {
  const res = await axios.get(`/api/video/${videoId}`);
  return res.data;
};

export const useVideo = videoId =>
  useQuery(videoKeys.video(videoId), () => getVideoById(videoId));
