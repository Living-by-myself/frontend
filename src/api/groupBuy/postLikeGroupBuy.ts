import { AxiosPromise } from "axios";
import axiosInstance from "../config";

type PostLikeGroupBuyRequest = number;

const postLikeGroupBuy = (id: PostLikeGroupBuyRequest): AxiosPromise<void> =>
  axiosInstance.post(`/group-buying/${id}/pick-like`);

export default postLikeGroupBuy;
