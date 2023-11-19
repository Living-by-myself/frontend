import { AxiosPromise } from "axios";
import axiosInstance from "../config";

type PostApplyGroupBuyRequest = number;

interface PostApplyGroupBuyResponse {
  msg: string;
  statusCode: number;
}

const postApplyGroupBuy = (
  id: PostApplyGroupBuyRequest,
): AxiosPromise<PostApplyGroupBuyResponse> =>
  axiosInstance.post(`/group-buying/${id}/application`);

export default postApplyGroupBuy;
