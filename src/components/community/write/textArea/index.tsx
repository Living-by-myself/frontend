import React, { useRef, useState } from "react";
import styled from "styled-components";

const CommunityWriteText = () => {
  const textareaRef1 = useRef<HTMLTextAreaElement | null>(null);
  const [text1, setText1] = useState("");

  const onChange1 = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText1(e.currentTarget.value);
    // 첫 번째 textarea 높이 조절
    if (textareaRef1 && textareaRef1.current) {
      textareaRef1.current.style.height = "auto";
      const scrollHeight = textareaRef1.current.scrollHeight;
      textareaRef1.current.style.height = scrollHeight + "px";
    }
  };

  const textareaRef2 = useRef<HTMLTextAreaElement | null>(null);
  const [text2, setText2] = useState("");

  const onChange2 = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText2(e.currentTarget.value);
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
        value={text1}
        onChange={onChange1}
        placeholder="제목을 입력하세요."
        rows={1}
      />
      <S.Body
        ref={textareaRef2}
        value={text2}
        onChange={onChange2}
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
