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
  axiosInstance.post("/users/login", args);

export default postLogin;
