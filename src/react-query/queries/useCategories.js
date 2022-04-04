import axios from "axios";
import { useQuery } from "react-query";

export const useCategories = () =>
  useQuery("categories", async () => (await axios.get("/api/categories")).data);
