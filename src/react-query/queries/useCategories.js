import { useQuery } from "react-query";
import { publicReq } from "../../axios";
import { categoryKeys } from "../keyFactory";

const getCategories = async () => {
  const res = await publicReq.get("categories");
  return res.data;
};

export const useCategories = () => useQuery(categoryKeys.all(), getCategories);
