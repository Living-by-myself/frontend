import { MobileContainer } from "@/styles/commonStyles";
import * as S from "./styles";
import Title from "@/components/common/title";
import PasswordUpdateForm from "@/components/auth/passwordUpdateForm";

const PasswordUpdatePage = () => {
  return (
    <MobileContainer>
      <S.Inner>
        <Title level={1}>비밀번호 변경</Title>
        <PasswordUpdateForm />
      </S.Inner>
    </MobileContainer>
  );
};

export default PasswordUpdatePage;
