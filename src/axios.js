import axios from "axios";
import { getToken } from "./utils/token";

const publicReq = axios.create({
  baseURL: "/api"
});

const privateReq = axios.create({
  baseURL: "/api/user",
  headers: {
    authorization: getToken()
  }
});

export { publicReq, privateReq };
