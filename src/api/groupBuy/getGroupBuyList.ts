import { AxiosPromise } from "axios";
import axiosInstance from "../config";
import { GroupBuyPreviewType } from "@/types/types";

export interface GroupBuyListRequest {
  page: number;
  size: number;
}

export interface GroupBuyListResponse {
  data: GroupBuyPreviewType[];
}

const getGroupBuyList = (
  args: GroupBuyListRequest,
): AxiosPromise<GroupBuyListResponse> =>
  axiosInstance.get("/group-buying/login", {
    params: {
      page: args.page,
      size: args.size,
    },
  });

export default getGroupBuyList;
