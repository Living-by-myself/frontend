import * as S from "./styles";
import Label from "../../common/label";
import InputText from "../../common/inputText";
import ErrorMessage from "../../common/errorMessage";
import Button from "../../common/button";
import Link from "../../common/link";
import Typography from "@/components/common/typography";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupFormData } from "@/types/form.types";

const validatePhoneNumber = (phoneNumber: string) => {
  const phoneNumberRegex = new RegExp(/^010\d{8}$/);
  return phoneNumberRegex.test(phoneNumber.toString());
};

const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+]).{8,}$/;

const validatePassword = (password: string) => {
  const passwordRegex = new RegExp(PASSWORD_REGEX);
  console.log(password, passwordRegex.test(password));
  return passwordRegex.test(password);
};

const schema = z
  .object({
    username: z.string().email({ message: "올바른 이메일을 입력해주세요." }),
    password: z
      .string()
      .min(8, { message: "8자리 이상의 비밀번호를 입력해주세요." })
      .refine(validatePassword, {
        message:
          "영문, 숫자, 특수문자(!@#$%^&*()_+)를 포함한 8자 이상의 비밀번호를 입력해주세요.",
      }),
    passwordCheck: z.string().min(8),
    phoneNumber: z.string().refine(validatePhoneNumber, {
      message: "올바른 전화번호를 입력해주세요.",
    }),
    phoneAuthNumber: z
      .string()
      .min(6, {
        message: "인증번호 6자리를 입력해주세요.",
      })
      .max(6, {
        message: "인증번호 6자리를 입력해주세요.",
      }),
  })
  .refine((data) => data.password === data.passwordCheck, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["passwordCheck"],
  });

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignupFormData>({
    resolver: zodResolver(schema),
  });

  const requestAuthNumber = () => {
    console.log(getValues("phoneNumber"));
  };

  return (
    <S.Container>
      <S.LinkContainer>
        <Typography>이미 아이디가 있으신가요?</Typography>
        <Link to="/login" bold>
          로그인
        </Link>
      </S.LinkContainer>
      <form onSubmit={handleSubmit((d) => console.log(d))}>
        <S.FormInner>
          <S.FormRow>
            <Label htmlFor="username">이메일</Label>
            <InputText
              placeholder="이메일"
              id="username"
              type="email"
              {...register("username")}
            />
            <ErrorMessage>{errors.username?.message}</ErrorMessage>
          </S.FormRow>
          <S.FormRow>
            <Label htmlFor="password">비밀번호</Label>
            <InputText
              placeholder="이메일"
              id="password"
              type="password"
              {...register("password")}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
          </S.FormRow>
          <S.FormRow>
            <Label htmlFor="passwordCheck">비밀번호 확인</Label>
            <InputText
              placeholder="이메일"
              id="passwordCheck"
              type="password"
              {...register("passwordCheck")}
            />
            <ErrorMessage>{errors.passwordCheck?.message}</ErrorMessage>
          </S.FormRow>
          <S.FormRow>
            <Label htmlFor="phoneNumber">전화번호</Label>
            <S.FormColumn>
              <InputText
                placeholder="전화번호"
                id="phoneNumber"
                {...register("phoneNumber")}
              />
              <Button type="button" onClick={requestAuthNumber}>
                인증번호 받기
              </Button>
            </S.FormColumn>
            <InputText
              placeholder="인증번호 6자리 숫자 입력"
              id="phoneAuthNumber"
              {...register("phoneAuthNumber")}
            />
            <ErrorMessage>
              {errors.phoneNumber?.message || errors.phoneAuthNumber?.message}
            </ErrorMessage>
            <Button>회원가입</Button>
          </S.FormRow>
        </S.FormInner>
      </form>
    </S.Container>
  );
};

export default SignUpForm;
