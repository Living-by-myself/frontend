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
import { useState } from "react";
import Timer from "@/components/timer";
import postSendAuthCodeToPhone from "@/api/user/postSendAuthCodeToPhone";
import postVerifyAuthCode from "@/api/user/postVerifyAuthCode";

const validatePhoneNumber = (phoneNumber: string) => {
  const phoneNumberRegex = new RegExp(/^010\d{8}$/);
  return phoneNumberRegex.test(phoneNumber);
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
    watch,
  } = useForm<SignupFormData>({
    resolver: zodResolver(schema),
  });
  const [isSendAuthNumber, setIsSendAuthNumber] = useState(false);
  const [isPhoneNumberVerified, setIsPhoneNumberVerified] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);

  // 타이머 초기화 함수
  const handleTimerReset = () => {
    setResetTimer(true);
    setTimeout(() => {
      setResetTimer(false);
    }, 0);
  };

  const requestAuthNumber = async () => {
    console.log(getValues("phoneNumber"));
    try {
      await postSendAuthCodeToPhone(
        { phoneNumber: getValues("phoneNumber") },
        "signup",
      );
      alert("인증번호가 전송되었습니다.");
      setIsSendAuthNumber(true);
      handleTimerReset();
    } catch (e) {
      console.log(e);
      alert("인증번호 전송에 실패했습니다.");
    }
  };

  const handleVerifyAuthNumber = async () => {
    console.log(getValues("phoneAuthNumber"));

    try {
      await postVerifyAuthCode(
        {
          phoneNumber: getValues("phoneNumber"),
          code: Number(getValues("phoneAuthNumber")),
        },
        "signup",
      );
      alert("인증되었습니다.");
      setIsPhoneNumberVerified(true);
    } catch (e) {
      console.log(e);
      alert("인증번호가 일치하지 않습니다.");
    }
  };

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    alert("회원가입 완료!");
  });

  return (
    <S.Container>
      <S.LinkContainer>
        <Typography>이미 아이디가 있으신가요?</Typography>
        <Link to="/login" bold>
          로그인
        </Link>
      </S.LinkContainer>
      <form onSubmit={onSubmit}>
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
            <Typography variants="caption1">
              영문, 숫자, 특수문자(!@#$%^&*()_+)를 포함한 8자 이상의 비밀번호를
              입력해주세요.
            </Typography>
            <InputText
              placeholder="비밀번호"
              id="password"
              type="password"
              {...register("password")}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
          </S.FormRow>
          <S.FormRow>
            <Label htmlFor="passwordCheck">비밀번호 확인</Label>
            <InputText
              placeholder="비밀번호 확인"
              id="passwordCheck"
              type="password"
              {...register("passwordCheck")}
            />
            <ErrorMessage>{errors.passwordCheck?.message}</ErrorMessage>
          </S.FormRow>
          <S.FormRow>
            <Label htmlFor="phoneNumber">전화번호</Label>
            <Typography variants="caption1">
              인증번호를 받을 휴대폰 번호를 입력해주세요.
            </Typography>
            <S.FormColumn>
              <InputText
                placeholder="전화번호"
                id="phoneNumber"
                {...register("phoneNumber")}
                disabled={isPhoneNumberVerified}
              />
              <Button
                type="button"
                onClick={requestAuthNumber}
                disabled={
                  isPhoneNumberVerified ||
                  !validatePhoneNumber(watch("phoneNumber"))
                }
              >
                인증번호 받기
              </Button>
            </S.FormColumn>
            <S.FormColumn>
              <InputText
                placeholder="인증번호 6자리 숫자 입력"
                id="phoneAuthNumber"
                {...register("phoneAuthNumber")}
                disabled={isPhoneNumberVerified}
              />
              <Timer
                initialTime={180}
                key={String(resetTimer)}
                isStopped={isPhoneNumberVerified || !isSendAuthNumber}
              />
            </S.FormColumn>
            <ErrorMessage>
              {errors.phoneNumber?.message || errors.phoneAuthNumber?.message}
            </ErrorMessage>
            <Button
              type="button"
              variants="outline"
              onClick={handleVerifyAuthNumber}
              disabled={
                isPhoneNumberVerified ||
                (watch("phoneAuthNumber")
                  ? watch("phoneAuthNumber").length < 6
                  : true)
              }
            >
              인증번호 확인
            </Button>
            <Button disabled={!isPhoneNumberVerified}>회원가입</Button>
          </S.FormRow>
        </S.FormInner>
      </form>
    </S.Container>
  );
};

export default SignUpForm;
