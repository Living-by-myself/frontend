import { AxiosPromise } from "axios";
import axiosInstance from "../config";

export interface PostSendCodeToPhoneNumberRequest {
  phoneNumber: string;
}

const PostSendCodeToPhoneNumber = (
  args: PostSendCodeToPhoneNumberRequest,
): AxiosPromise<void> => axiosInstance.post("/auth/message", args);

export default PostSendCodeToPhoneNumber;
