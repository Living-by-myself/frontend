import { AxiosPromise } from "axios";
import axiosInstance from "../config";

type PatchCloseGroupBuyPostRequest = number;

interface PatchCloseGroupBuyPostResponse {
  msg: string;
  statusCode: number;
}

const patchCloseGroupBuyPost = (
  id: PatchCloseGroupBuyPostRequest,
): AxiosPromise<PatchCloseGroupBuyPostResponse> =>
  axiosInstance.patch(`/group-buying/${id}/close`);

export default patchCloseGroupBuyPost;
