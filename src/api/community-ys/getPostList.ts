import { Post } from "@/pages/community";
import axios, { AxiosPromise } from "axios";

// 데이터 서버에서 받아오는 로직 리액트 쿼리화 필요
export const getPosts = async (): AxiosPromise<Post[]> => {
  const response = await axios({
    method: "get",
    url: "https://tracelover.shop/home/communities",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return response;
};
