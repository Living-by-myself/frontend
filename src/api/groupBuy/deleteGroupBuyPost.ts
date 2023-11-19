import { AxiosPromise } from "axios";
import axiosInstance from "../config";

type DeleteGroupBuyPostRequest = number;

interface DeleteGroupBuyPostResponse {
  msg: string;
  statusCode: number;
}

const deleteGroupBuyPost = (
  id: DeleteGroupBuyPostRequest,
): AxiosPromise<DeleteGroupBuyPostResponse> =>
  axiosInstance.delete(`/group-buying/${id}`);

export default deleteGroupBuyPost;
