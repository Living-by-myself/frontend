import * as S from "./styles";
import Label from "../../common/label";
import InputText from "../../common/inputText";
import ErrorMessage from "../../common/errorMessage";
import Button from "../../common/button";
import Link from "../../common/link";
import Typography from "@/components/common/typography";

const SignUpForm = () => {
  return (
    <S.Container>
      <S.LinkContainer>
        <Typography>이미 아이디가 있으신가요?</Typography>
        <Link to="/login" bold>
          로그인
        </Link>
      </S.LinkContainer>
      <S.FormInner>
        <S.FormRow>
          <Label htmlFor="email">이메일</Label>
          <InputText placeholder="이메일" id="email" type="email" />
          <ErrorMessage>이메일 형식이 올바르지 않습니다.</ErrorMessage>
        </S.FormRow>
        <S.FormRow>
          <Label htmlFor="password">비밀번호</Label>
          <InputText placeholder="이메일" id="password" type="password" />
          <ErrorMessage>
            영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
          </ErrorMessage>
        </S.FormRow>
        <S.FormRow>
          <Label htmlFor="passwordCheck">비밀번호 확인</Label>
          <InputText placeholder="이메일" id="passwordCheck" type="password" />
          <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
        </S.FormRow>
        <S.FormRow>
          <Label htmlFor="phone">전화번호</Label>
          <S.FormColumn>
            <InputText placeholder="전화번호" id="phone" type="tel" />
            <Button onClick={() => {}}>인증번호 받기</Button>
          </S.FormColumn>
          <InputText
            placeholder="인증번호 6자리 숫자 입력"
            id="phone_auth_number"
            type="number"
          />
          <ErrorMessage>인증번호가 일치하지 않습니다.</ErrorMessage>
        </S.FormRow>
      </S.FormInner>

      <Button onClick={() => {}}>회원가입</Button>
    </S.Container>
  );
};

export default SignUpForm;
