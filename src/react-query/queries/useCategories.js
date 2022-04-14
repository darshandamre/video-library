import { useQuery } from "react-query";
import { publicReq } from "../../axios";

export const useCategories = () =>
  useQuery("categories", async () => {
    const res = await publicReq.get("categories");
    return res.data;
  });
