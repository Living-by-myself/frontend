import { AxiosPromise } from "axios";
import axiosInstance from "../config";

type PostCancelGroupBuyRequest = number;

interface PostCancelGroupBuyResponse {
  msg: string;
  statusCode: number;
}

const postCancelGroupBuy = (
  id: PostCancelGroupBuyRequest,
): AxiosPromise<PostCancelGroupBuyResponse> =>
  axiosInstance.delete(`/group-buying/${id}/application`);

export default postCancelGroupBuy;
