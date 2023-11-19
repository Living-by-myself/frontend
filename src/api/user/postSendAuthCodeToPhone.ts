import { AxiosPromise } from "axios";
import axiosInstance from "../config";
import { PostVerifyAuthCodeKind } from "./postVerifyAuthCode";

export interface PostSendCodeToPhoneNumberRequest {
  phoneNumber: string;
}

export interface PostSendCodeToPhoneNumberResponse {
  msg: string;
  statusCode: number;
}

const postSendAuthCodeToPhone = (
  args: PostSendCodeToPhoneNumberRequest,
  kind: PostVerifyAuthCodeKind,
): AxiosPromise<PostSendCodeToPhoneNumberResponse> =>
  kind === "find"
    ? axiosInstance.post("/auth/message?authentication=find", args)
    : axiosInstance.post("/auth/message", args);

export default postSendAuthCodeToPhone;
