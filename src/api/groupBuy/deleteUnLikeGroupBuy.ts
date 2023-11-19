import { AxiosPromise } from "axios";
import axiosInstance from "../config";

type PostUnLikeGroupBuyRequest = number;

const postUnLikeGroupBuy = (
  id: PostUnLikeGroupBuyRequest,
): AxiosPromise<void> => axiosInstance.delete(`/group-buying/${id}/pick-like`);

export default postUnLikeGroupBuy;
