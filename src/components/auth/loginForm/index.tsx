import * as S from "./styles";
import Label from "../../common/label";
import InputText from "../../common/inputText";
import ErrorMessage from "../../common/errorMessage";
import Button from "../../common/button";
import Link from "../../common/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginFormData } from "@/types/form.types";
import useLoginMutation from "@/queries/userLoginMutation";

const schema = z.object({
  username: z.string().min(2, { message: "2자 이상의 아이디를 입력해주세요." }),
  password: z
    .string()
    .min(3, { message: "6자 이상의 비밀번호를 입력해주세요." }),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(schema),
  });
  const loginMutation = useLoginMutation();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    loginMutation.mutate(data);
  });

  return (
    <S.Container>
      <form onSubmit={onSubmit}>
        <S.FormInner>
          <S.FormRow>
            <Label htmlFor="username">이메일</Label>
            <InputText
              placeholder="이메일"
              id="uesrname"
              type="email"
              {...register("username")}
            />
            <ErrorMessage>{errors.username?.message}</ErrorMessage>
          </S.FormRow>
          <S.FormRow>
            <Label htmlFor="password">비밀번호</Label>
            <InputText
              placeholder="비밀번호"
              id="password"
              type="password"
              {...register("password")}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
          </S.FormRow>
          <Button onClick={() => {}}>로그인</Button>
        </S.FormInner>
      </form>

      <S.LinkContainer>
        <Link to="/password-find">비밀번호 찾기</Link>
        <Link to="/signup">회원가입</Link>
      </S.LinkContainer>
    </S.Container>
  );
};

export default LoginForm;
