import * as S from "./styles";
import Label from "../../common/label";
import InputText from "../../common/inputText";
import ErrorMessage from "../../common/errorMessage";
import Button from "../../common/button";
import Link from "../../common/link";

const LoginForm = () => {
  return (
    <S.Container>
      <S.FormInner>
        <S.FormRow>
          <Label htmlFor="email">이메일</Label>
          <InputText placeholder="이메일" id="email" type="email" />
          <ErrorMessage>이메일 형식이 올바르지 않습니다.</ErrorMessage>
        </S.FormRow>
        <S.FormRow>
          <Label htmlFor="password">비밀번호</Label>
          <InputText placeholder="이메일" id="password" type="password" />
          <ErrorMessage>비밀번호가 올바르지 않습니다.</ErrorMessage>
        </S.FormRow>
      </S.FormInner>

      <Button onClick={() => {}}>로그인</Button>

      <S.LinkContainer>
        <Link to="/password-find">비밀번호 찾기</Link>
        <Link to="/signup">회원가입</Link>
      </S.LinkContainer>
    </S.Container>
  );
};

export default LoginForm;
