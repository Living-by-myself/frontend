import Icon from "@/components/common/icon";
import { PostDetailProps } from "@/pages/communityDetail";

import styled from "styled-components";

interface PostDetailBodyProps {
  post: PostDetailProps;
}

const PostDetailBody = ({ post }: PostDetailBodyProps) => {
  return (
    <>
      <S.Container>
        <S.Title>{post?.title}</S.Title>
        <S.Body>{post?.description}</S.Body>
      </S.Container>

      {post?.fileUrls ? (
        <S.ImageBox>
          <S.Img src={post.fileUrls} alt="이미지" />
        </S.ImageBox>
      ) : (
        <> </>
      )}

      <S.View>
        <Icon name="eye" size={"12"} />
        {post?.viewCnt}명이 봤어요
      </S.View>
    </>
  );
};

export default PostDetailBody;

const S = {
  Container: styled.div`
    padding: 20px 0 40px;
  `,
  Title: styled.p`
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-bottom: 9px;
  `,
  Body: styled.p`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
  `,
  View: styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xxs};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    line-height: normal;
    color: ${({ theme }) => theme.colors.gray[400]};
    display: flex;
    align-items: center;
    gap: 3px;
  `,
  ImageBox: styled.div`
    width: 100%;
    max-height: 1000px;
    margin-bottom: 40px;
    overflow: hidden;
    border-radius: 10px;
  `,
  Img: styled.img`
    width: 100%;
    border-radius: 10px;
  `,
};
