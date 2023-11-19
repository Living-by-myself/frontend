import { AxiosPromise } from "axios";
import axiosInstance from "../config";

export interface SignupRequest {
  username: string;
  password: string;
  passwordCheck: string;
  phoneNumber: string;
}

export interface SignupResponse {
  msg: string;
  statusCode: number;
}

const postSignup = (args: SignupRequest): AxiosPromise<SignupResponse> =>
  axiosInstance.post("/users/signup", args);

export default postSignup;
