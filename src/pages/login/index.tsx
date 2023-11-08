import Title from "@/components/common/title";
import LoginForm from "@/components/auth/loginForm";
import SocialLoginForm from "@/components/auth/socialLoginForm";
import * as S from "./styles";
import { MobileContainer } from "@/styles/commonStyles";

const LoginPage = () => {
  return (
    <MobileContainer>
      <S.Inner>
        <Title level={1}>로그인</Title>
        <LoginForm />
        <SocialLoginForm />
      </S.Inner>
    </MobileContainer>
  );
};

export default LoginPage;
