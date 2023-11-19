import * as S from "./styles";
import Label from "../../common/label";
import InputText from "../../common/inputText";
import ErrorMessage from "../../common/errorMessage";
import Button from "../../common/button";
import Link from "../../common/link";
import { useNavigate } from "react-router-dom";

const PasswordFindForm = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.FormInner>
        <S.FormRow>
          <Label htmlFor="email">이메일</Label>
          <InputText placeholder="이메일" id="email" type="email" />
          <ErrorMessage>이메일 형식이 올바르지 않습니다.</ErrorMessage>
        </S.FormRow>
        <S.FormRow>
          <Label htmlFor="phone">전화번호</Label>
          <InputText
            placeholder="전화번호(- 없이 숫자만 입력)"
            id="phone"
            type="tel"
          />
          <ErrorMessage>전화번호 형식이 올바르지 않습니다.</ErrorMessage>
        </S.FormRow>
        <S.FormRow>
          <Button variants="outline" onClick={() => {}}>
            인증번호 받기
          </Button>
          <Label htmlFor="verification-code">인증번호</Label>
          <InputText
            placeholder="전화번호(- 없이 숫자만 입력)"
            id="verification-code"
            type="number"
          />
        </S.FormRow>

        <S.FormRow>
          <Button
            onClick={() => {
              navigate("/password-reset");
            }}
          >
            비밀번호 찾기
          </Button>
        </S.FormRow>
      </S.FormInner>

      <S.LinkContainer>
        <Link to="/login">로그인</Link>
        <Link to="/signup">회원가입</Link>
      </S.LinkContainer>
    </S.Container>
  );
};

export default PasswordFindForm;
