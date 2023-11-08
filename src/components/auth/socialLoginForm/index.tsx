import SNSButton from "@/components/common/snsButton";
import Typography from "@/components/common/typography";
import * as S from "./styles";

const SocialLoginForm = () => {
  return (
    <S.Container>
      <Typography variants="caption1">
        SNS 계정으로 간편 로그인/회원가입
      </Typography>
      <S.SocialButtonContainer>
        <SNSButton type="kakao" />
        <SNSButton type="google" />
      </S.SocialButtonContainer>
    </S.Container>
  );
};

export default SocialLoginForm;
