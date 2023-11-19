import { MobileContainer } from "@/styles/commonStyles";
import * as S from "./styles";
import Title from "@/components/common/title";
import PasswordResetForm from "@/components/auth/passwordResetForm";

const PasswordResetPage = () => {
  return (
    <MobileContainer>
      <S.Inner>
        <Title level={1}>비밀번호 재설정</Title>
        <PasswordResetForm />
      </S.Inner>
    </MobileContainer>
  );
};

export default PasswordResetPage;
