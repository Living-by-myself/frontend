// import { PostDetailProps } from "@/pages/communityDetail";
// import axios, { AxiosPromise } from "axios";

// export const getPostDetail = async (
//   postId: string | undefined,
// ): AxiosPromise<PostDetailProps> => {
//   const { data } = await axios({
//     method: "get",
//     url: `https://tracelover.shop/home/communities/${postId}`,
//     withCredentials: true,
//     headers: {
//       "Content-Type": "application/json",
//
//     },
//   });
//   return data;
// };

// // .get(`https://tracelover.shop/home/communities/${postId}`, {
// //     withCredentials: true,
// //     timeout: 1000,
// //     headers: {
// //       Authorization: `${localStorage.getItem("accessToken")}`,
// //     },
// //   })

// export const getPostDetail = async (postId: string | undefined) => {
//   try {
//     const response = await axios({
//       method: "get",
//       url: `https://tracelover.shop/home/communities/${postId}`,
//       withCredentials: true,
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `${localStorage.getItem("accessToken")}`,
//       },
//     });

//     if (response.status === 403) {
//       throw new Error("401");
//     }
//     if (!response) return null;
//     return response.data;
//   } catch (error) {
//     throw new Error("실패");
//   }
// };
