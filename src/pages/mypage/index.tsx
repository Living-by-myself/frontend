import MyPageMenuList from "@/components/mypage/menu";
import MyPagePayment from "@/components/mypage/payment";
import MyPageUserBasicInfo from "@/components/mypage/userInfo";
import { MobileContainer } from "@/styles/commonStyles";
// import axios from "axios";
// import { useEffect } from "react";

const MyPage = () => {
  // const getUserInfo = async () => {
  // 로그인 한 유저의 토큰을 헤더에 보내면 해당 유저의 정보가 내려올것임......
  //   const token =
  //     "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3ZXIwNjA5OUBuYXZlci5jb20iLCJhdXRoIjoiTUVNQkVSIiwiZXhwIjoxNjk5NjAwMjQyLCJpYXQiOjE2OTk1OTY2NDJ9.-JSaWQz5vNczbJfkv6de7z4hYC1QPgcM-N7tCWzGDdQ";
  //   axios({
  //     method: "get",
  //     url: "https://tracelover.shop/home/profile",

  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: token,
  //     },
  //   })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   getUserInfo();
  // }, []);

  return (
    <MobileContainer>
      <MyPageUserBasicInfo />
      <MyPagePayment />
      <MyPageMenuList />
    </MobileContainer>
  );
};

export default MyPage;
