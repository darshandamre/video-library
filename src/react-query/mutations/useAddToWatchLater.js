import { useMutation } from "react-query";
import { privateReq } from "../../axios";

export const useAddToWatchLater = () =>
  useMutation(async video => {
    const res = await privateReq.post("watchlater", { video });
    return res.data;
  });
