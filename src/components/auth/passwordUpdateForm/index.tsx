import * as S from "./styles";
import Label from "../../common/label";
import InputText from "../../common/inputText";
import ErrorMessage from "../../common/errorMessage";
import Button from "../../common/button";
import Typography from "@/components/common/typography";

const PasswordUpdateForm = () => {
  return (
    <S.Container>
      <S.FormInner>
        <S.FormRow>
          <Label htmlFor="password">새 비밀번호</Label>
          <Typography variants="caption1">
            영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
          </Typography>
          <InputText placeholder="이메일" id="password" type="password" />
          <ErrorMessage>
            영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
          </ErrorMessage>
        </S.FormRow>
        <S.FormRow>
          <Label htmlFor="passwordCheck">새 비밀번호 확인</Label>
          <InputText placeholder="이메일" id="passwordCheck" type="password" />
          <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
        </S.FormRow>

        <S.FormRow>
          <Button onClick={() => {}}>비밀번호 변경</Button>
        </S.FormRow>
      </S.FormInner>
    </S.Container>
  );
};

export default PasswordUpdateForm;
