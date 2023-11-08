import { MobileContainer } from "@/styles/commonStyles";
import * as S from "./styles";
import Title from "@/components/common/title";
import SignUpForm from "@/components/auth/signUpForm";

const RegisterPage = () => {
  return (
    <MobileContainer>
      <S.Inner>
        <Title level={1}>회원가입</Title>
        <SignUpForm />
      </S.Inner>
    </MobileContainer>
  );
};

export default RegisterPage;
