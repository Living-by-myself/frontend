import { AxiosPromise } from "axios";
import axiosInstance from "../config";

interface PutEditUserProfileRequest {
  address: string;
  beobJeongDong: string;
  nickname: string;
}

interface PutEditUserProfileResponse {
  msg: string;
  statusCode: number;
}

const putEditUserProfile = (
  args: PutEditUserProfileRequest,
): AxiosPromise<PutEditUserProfileResponse> =>
  axiosInstance.put("/profile", args);

export default putEditUserProfile;
