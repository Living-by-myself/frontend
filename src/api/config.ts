import { getAccessTokenFromLocalStorage } from "@/utils/localStorage";
import axios, {
  AxiosInstance,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
} from "axios";
import { checkAndSetAccessToken } from "./interceptors";

const BASE_URL = `${
  import.meta.env.DEV ? "/api" : import.meta.env.VITE_API_URL
}/home`;

const COMMON_HEADERS: CreateAxiosDefaults = {
  baseURL: BASE_URL,
  timeout: 5000,
};

const axiosInstance: AxiosInstance = axios.create({
  ...COMMON_HEADERS,
});

axiosInstance.interceptors.request.use(checkAndSetAccessToken);

// axiosInstance.interceptors.response.use((res) => res, handleTokenError);
export default axiosInstance;
