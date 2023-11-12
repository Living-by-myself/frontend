import { useState } from "react";
import styled from "styled-components";
import Button from "@/components/common/button";

const PostDetailLikes = () => {
  const [isLike, setIsLike] = useState<boolean>(false);
  // 좋아요 누르는 로직
  // 상위 디테일 페이지에서 props로 게시글 아이디 가져오기
  // 현재 로그인한 유저의 아이디와 props의 게시글 아이디를 기반으로 좋아요 낙관적 업데이트 적용

  return (
    <S.Container>
      <Button
        variants={isLike ? "outline" : "contain"}
        // variants="outline"
        color="primary"
        size="sm"
        disabled={false}
        children="좋아요"
        onClick={() => {
          setIsLike(!isLike);
        }}
        type="button"
      />
      {/* <S.Button
        $isLike={isLike}
        onClick={() => {
          setIsLike(!isLike);
        }}
      >
        좋아요 숫자
      </S.Button> */}
    </S.Container>
  );
};

export default PostDetailLikes;

interface ButtonProps {
  $isLike: boolean;
}

const S = {
  Container: styled.div`
    width: 100%;
    padding: 20px 0;
  `,

  Button: styled.button<ButtonProps>`
    /* width: 100%; */
    padding: 8px 16px;
    border-radius: 50px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    /* height: 40px; */

    border: none;
    background-color: ${({ theme }) => theme.colors.green[400]};
    color: ${({ theme }) => theme.colors.gray[0]};
  `,
};
