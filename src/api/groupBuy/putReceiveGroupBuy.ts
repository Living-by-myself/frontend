import { AxiosPromise } from "axios";
import axiosInstance from "../config";

type PutReceiveGroupBuyRequest = number;

interface PutReceiveGroupBuyResponse {
  msg: string;
  statusCode: number;
}

const putReceiveGroupBuy = (
  id: PutReceiveGroupBuyRequest,
): AxiosPromise<PutReceiveGroupBuyResponse> =>
  axiosInstance.put(`/group-buying/${id}/application`);

export default putReceiveGroupBuy;
