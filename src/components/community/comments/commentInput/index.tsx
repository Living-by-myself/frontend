import styled from "styled-components";
import { useRef, useState } from "react";

const PostDetailCommentInput = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [text, setText] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
    // textarea 높이 조절
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  };

  return (
    <S.Container
      onSubmit={(e) => {
        e.preventDefault();
        console.log("엔터");
      }}
    >
      <S.InputArea
        ref={textareaRef}
        value={text}
        onChange={onChange}
        placeholder="내용을 입력하세요."
        rows={1}
        onSubmit={(e) => {
          e.preventDefault;
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            console.log("엔터");
          }
        }}
      >
        {/* <S.CommentInput placeholder="댓글을 입력해주세요." /> */}
      </S.InputArea>
      <S.CommentBtn>등록</S.CommentBtn>
    </S.Container>
  );
};

export default PostDetailCommentInput;

const S = {
  Container: styled.form`
    display: flex;
    gap: 8px;
  `,
  InputArea: styled.textarea`
    background-color: ${({ theme }) => theme.colors.gray[200]};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 13px 13px 13px 15px;

    resize: none;
    width: 100%;

    border-radius: 50px;
    border: none;
    outline: none;

    font-size: ${({ theme }) => theme.fontSizes.xs};
  `,
  CommentBtn: styled.button`
    width: 40px;
    /* height: 40px; */
    min-width: 40px;
    min-height: 40px;
    border-radius: 50px;
    border: none;
    background-color: ${({ theme }) => theme.colors.gray[200]};
  `,
};
