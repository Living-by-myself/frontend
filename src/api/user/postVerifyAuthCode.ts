import { AxiosPromise } from "axios";
import axiosInstance from "../config";

export interface PostVerifyAuthCodeRequest {
  phoneNumber: string;
  code: number;
}

export interface PostVerifyAuthCodeResponse {
  msg: string;
  statusCode: number;
}

export type PostVerifyAuthCodeKind = "findPassword" | "signup";

const postVerifyAuthCode = (
  args: PostVerifyAuthCodeRequest,
  kind: PostVerifyAuthCodeKind,
): AxiosPromise<PostVerifyAuthCodeResponse> => {
  return kind === "findPassword"
    ? axiosInstance.post("/auth/message/find-password", args)
    : axiosInstance.post("/auth/message/signup", args);
};

export default postVerifyAuthCode;
