import { AxiosPromise } from "axios";
import axiosInstance from "../config";

interface PutEditGroupBuyPostResponse {
  msg: string;
  statusCode: number;
}

const putEditGroupBuyPost = (
  id: number,
  formData: FormData,
): AxiosPromise<PutEditGroupBuyPostResponse> =>
  axiosInstance.put(`/group-buying/${id}`, formData);

export default putEditGroupBuyPost;
