import { AxiosPromise } from "axios";
import axiosInstance from "../config";

interface PostGroupBuyPostResponse {
  msg: string;
  statusCode: number;
}

const postGroupBuyPost = (
  formData: FormData,
): AxiosPromise<PostGroupBuyPostResponse> =>
  axiosInstance.post(`/group-buying`, formData);

export default postGroupBuyPost;
