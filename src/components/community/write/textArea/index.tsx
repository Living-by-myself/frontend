import React, { useRef } from "react";
import styled from "styled-components";
import { UseFormSetValue, UseFormWatch } from "react-hook-form";
import { CommunityWriteFormData } from "@/types/form.types";

interface CommunityWriteTextProps {
  watch: UseFormWatch<CommunityWriteFormData>;
  setValue: UseFormSetValue<CommunityWriteFormData>;
  // errors: FieldErrors<CommunityWriteFormData>;
}

const CommunityWriteText = ({
  watch,
  setValue, // errors,
}: CommunityWriteTextProps) => {
  // const { control } = useFormContext();
  const textareaRef1 = useRef<HTMLTextAreaElement | null>(null);

  const titleHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // 첫 번째 textarea 높이 조절

    if (e.currentTarget.value.length > 20) {
      alert("제목은 20자 이내로 입력해주세요.");
      return;
    }
    setValue("title", e.currentTarget.value);
    if (textareaRef1 && textareaRef1.current) {
      textareaRef1.current.style.height = "auto";
      const scrollHeight = textareaRef1.current.scrollHeight;
      textareaRef1.current.style.height = scrollHeight + "px";
    }
  };

  const textareaRef2 = useRef<HTMLTextAreaElement | null>(null);

  const bodyHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue("description", e.currentTarget.value);
    // 두 번째 textarea 높이 조절
    if (textareaRef2 && textareaRef2.current) {
      textareaRef2.current.style.height = "auto";
      const scrollHeight = textareaRef2.current.scrollHeight;
      textareaRef2.current.style.height = scrollHeight + "px";
    }
  };

  return (
    <S.Container>
      <S.Title
        value={watch("title")}
        onChange={titleHandler}
        placeholder="제목을 입력하세요."
        rows={1}
        ref={textareaRef1}
      />
      {/* {errors.description?.message && (
        <S.ErrorMessage>{errors.description?.message}</S.ErrorMessage>
      )} */}
      <S.Body
        value={watch("description")}
        onChange={bodyHandler}
        placeholder="공유하고 싶은 글을 입력하세요."
        rows={1}
        ref={textareaRef2}
      />
    </S.Container>
  );
};

export default CommunityWriteText;

const S = {
  ErrorMessage: styled.p``,
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    /* padding: 12px 0; */
    padding: 0 1rem;
    gap: 8px;
    line-height: normal;
  `,
  Title: styled.textarea`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.gray[900]};

    background-color: transparent;
    border: none;
    outline: none;
  `,
  Body: styled.textarea`
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    color: ${({ theme }) => theme.colors.gray[900]};
    background-color: transparent;
    border: none;
    outline: none;
  `,
};
