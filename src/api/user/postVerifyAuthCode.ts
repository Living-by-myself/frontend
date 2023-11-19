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

export type PostVerifyAuthCodeKind = "find" | "signup";

const postVerifyAuthCode = (
  args: PostVerifyAuthCodeRequest,
  kind: PostVerifyAuthCodeKind,
): AxiosPromise<PostVerifyAuthCodeResponse> => {
  return kind === "find"
    ? axiosInstance.post("/auth/message-code", args)
    : axiosInstance.post("/auth/message-code/signup", args);
};

export default postVerifyAuthCode;
