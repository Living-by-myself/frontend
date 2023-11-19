import { AxiosPromise } from "axios";
import axiosInstance from "../config";

export interface PatchResetPasswordRequest {
  newPassword: string;
  newPasswordCheck: string;
}

export interface PatchResetPasswordResponse {
  msg: string;
  statusCode: number;
}

const patchResetPassword = (
  args: PatchResetPasswordRequest,
): AxiosPromise<PatchResetPasswordResponse> =>
  axiosInstance.patch("/auth/new-password", args);

export default patchResetPassword;
