import { AxiosPromise } from "axios";
import axiosInstance from "../config";

export interface DeleteLogoutResponse {
  msg: string;
  statusCode: number;
}

const deleteLogout = (): AxiosPromise<DeleteLogoutResponse> =>
  axiosInstance.delete("/users/logout");

export default deleteLogout;
