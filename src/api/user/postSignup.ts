import { AxiosPromise } from "axios";
import axiosInstance from "../config";

export interface SignupRequest {
  username: string;
  password: string;
  passwordCheck: string;
  phoneNumber: string;
}

export interface SignupResponse {
  atk: string;
  rtk: string;
}

const postLogin = (args: SignupRequest): AxiosPromise<SignupResponse> =>
  axiosInstance.post("/users/login", args);

export default postLogin;
