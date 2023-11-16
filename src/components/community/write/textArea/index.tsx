import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useCommunityWriteStore } from "@/store/useCommunityStore";

const CommunityWriteText = () => {
  const textareaRef1 = useRef<HTMLTextAreaElement | null>(null);
  const title = useCommunityWriteStore((state) => state.title);
  const body = useCommunityWriteStore((state) => state.body);

  const titleHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // 첫 번째 textarea 높이 조절
    useCommunityWriteStore.setState({ title: e.currentTarget.value });
    if (textareaRef1 && textareaRef1.current) {
      textareaRef1.current.style.height = "auto";
      const scrollHeight = textareaRef1.current.scrollHeight;
      textareaRef1.current.style.height = scrollHeight + "px";
    }
  };

  const textareaRef2 = useRef<HTMLTextAreaElement | null>(null);

  const bodyHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    useCommunityWriteStore.setState({ body: e.currentTarget.value });
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
        ref={textareaRef1}
        value={title}
        onChange={titleHandler}
        placeholder="제목을 입력하세요."
        rows={1}
      />
      <S.Body
        ref={textareaRef2}
        value={body}
        onChange={bodyHandler}
        placeholder="공유하고 싶은 글을 입력하세요."
        rows={1}
      />
    </S.Container>
  );
};

export default CommunityWriteText;

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px 0;

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
