import { MobileContainer } from "@/styles/commonStyles";
import * as S from "./styles";
import Title from "@/components/common/title";
import UserProfileForm from "@/components/mypage/userProfileForm";

const UserUpdateInfoPage = () => {
  return (
    <MobileContainer>
      <S.Inner>
        <Title level={1}>회원정보 수정</Title>
        <UserProfileForm />
      </S.Inner>
    </MobileContainer>
  );
};

export default UserUpdateInfoPage;
