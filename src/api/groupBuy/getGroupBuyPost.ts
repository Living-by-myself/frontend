import { AxiosPromise } from "axios";
import axiosInstance from "../config";
import { GroupBuyDetailType } from "@/types/groupBuy.types";

const getGroupBuyPost = (id: number): AxiosPromise<GroupBuyDetailType> =>
  axiosInstance.get(`/group-buying/${id}`);

export default getGroupBuyPost;
