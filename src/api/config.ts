import axios, { AxiosInstance } from "axios";
import { checkAndSetAccessToken } from "./interceptors";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "/api/home",
});

axiosInstance.interceptors.request.use(checkAndSetAccessToken);

// axiosInstance.interceptors.response.use((res) => res, handleTokenError);
export default axiosInstance;
