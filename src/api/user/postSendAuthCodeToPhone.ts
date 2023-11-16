import { AxiosPromise } from "axios";
import axiosInstance from "../config";

export interface PostSendCodeToPhoneNumberRequest {
  phoneNumber: string;
}

const postSendAuthCodeToPhone = (
  args: PostSendCodeToPhoneNumberRequest,
): AxiosPromise<void> => axiosInstance.post("/auth/message", args);

export default postSendAuthCodeToPhone;
