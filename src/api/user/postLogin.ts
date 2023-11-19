import axios, { AxiosPromise } from "axios";
import axiosInstance from "../config";

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  atk: string;
  rtk: string;
}

const postLogin = (args: LoginRequest): AxiosPromise<LoginResponse> =>
  axios.post("https://tracelover.shop/home/users/login", args);

export default postLogin;
