import MyPageMenuList from "@/components/mypage/menu";
import MyPagePayment from "@/components/mypage/payment";
import MyPageUserBasicInfo from "@/components/mypage/userInfo";
import { MobileContainer } from "@/styles/commonStyles";

const MyPage = () => {
  return (
    <MobileContainer>
      <MyPageUserBasicInfo />
      <MyPagePayment />
      <MyPageMenuList />
    </MobileContainer>
  );
};

export default MyPage;
