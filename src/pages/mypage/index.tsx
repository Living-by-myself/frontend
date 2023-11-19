import MyPageMenuList from "@/components/mypage/menu";
import MyPagePayment from "@/components/mypage/payment";
import MyPageUserBasicInfo from "@/components/mypage/userInfo";
import { MobileContainer } from "@/styles/commonStyles";
import axios from "axios";
import { useEffect, useState } from "react";
// import axios from "axios";
// import { useEffect } from "react";

export interface UserProps {
  nickname: string;
  level: number;
  profileImage: string;
  address: string;
  cash: number;
}

const MyPage = () => {
  const [user, setUser] = useState<UserProps | null>();
  const getUserInfo = async () => {
    // 로그인 한 유저의 토큰을 헤더에 보내면 해당 유저의 정보가 내려올것임......

    await axios({
      method: "get",
      url: "https://tracelover.shop/home/profile",

      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <MobileContainer>
      <MyPageUserBasicInfo user={user} />
      <MyPagePayment cash={user?.cash} />
      <MyPageMenuList />
    </MobileContainer>
  );
};

export default MyPage;
