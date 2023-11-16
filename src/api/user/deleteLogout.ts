import { AxiosPromise } from "axios";
import axiosInstance from "../config";

export interface PatchResetPasswordResponse {
  msg: string;
  statusCode: number;
}

const patchResetPassword = (): AxiosPromise<PatchResetPasswordResponse> =>
  axiosInstance.delete("/users/logout");

export default patchResetPassword;
