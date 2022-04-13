import axios from "axios";
import { getToken } from "./utils/token";

const privateReq = axios.create({
  baseURL: "/api/user",
  headers: {
    authorization: getToken()
  }
});

export { privateReq };
