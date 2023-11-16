import { AxiosPromise } from "axios";
import axiosInstance from "../config";
import { GroupBuyDetailType } from "@/types/groupBuy.types";

export interface GroupBuyListRequest {
  id: number;
}

const getGroupBuyList = (
  args: GroupBuyListRequest,
): AxiosPromise<GroupBuyDetailType> =>
  axiosInstance.get("/group-buying/login", {
    params: {
      ...args,
    },
  });

export default getGroupBuyList;
