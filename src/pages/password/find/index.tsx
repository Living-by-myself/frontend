import { MobileContainer } from "@/styles/commonStyles";
import * as S from "./styles";
import Title from "@/components/common/title";
import PasswordFindForm from "@/components/auth/passwordFindForm";

const PasswordFindPage = () => {
  return (
    <MobileContainer>
      <S.Inner>
        <Title level={1}>비밀번호 찾기</Title>
        <PasswordFindForm />
      </S.Inner>
    </MobileContainer>
  );
};

export default PasswordFindPage;
