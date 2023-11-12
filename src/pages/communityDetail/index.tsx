import { useState } from "react";
import PostDetailCommentInput from "@/components/community/comments/commentInput";
import PostDetailCommentList from "@/components/community/comments/list";
import PostDetailLikes from "@/components/community/postDetail/like";
import PostDetailBody from "@/components/community/postDetail/postBody";
import PostDetailUser from "@/components/community/postDetail/user";
import { MobileContainer } from "@/styles/commonStyles";
import styled from "styled-components";

const dummy = {
  id: 6,
  viewCnt: 0,
  title: "제제목목",
  description: "내내용용",
  category: "CLEAN",
  userId: 1,
  userNickname: "wer06099@naver.com",
  getCreatedAtAsString: "2023-11-08 14:56:26",
  commentCnt: 0,
  likeCnt: 0,
  fileUrls:
    "https://tracelover.s3.ap-northeast-2.amazonaws.com/b82b98c4-5b30-4a5d-9019-0ff0372ea0c9test1.png",
};

export const userInfo = {
  userId: 1,
  getCreatedAtAsString: "2023-11-08 14:56:26",
};

const CommunityDetailPage = () => {
  // 리액트 쿼리활용 아이디값 기준의 값을 GET!
  const [post] = useState<typeof dummy>(dummy);
  // 동일하게 유저 정보를 따로 받던가 아니면 아래와 같이 받아서 사용하면 될듯

  return (
    <MobileContainer>
      <S.Container>
        <S.CategoryContainer>{post.category} 인기글</S.CategoryContainer>

        {/* 유저정보 컴포넌트 */}
        <PostDetailUser
          userId={post.userId}
          getCreatedAtAsString={post.getCreatedAtAsString}
        />

        {/* 게시글 본문 컴포넌트 */}
        <PostDetailBody />

        {/* 좋아요 버튼 컴포넌트 */}
        <PostDetailLikes />

        {/* 댓글 입력 컴포넌트 */}
        <PostDetailCommentInput />

        {/* 중간 간지 */}
        <S.Line />

        {/* 댓글  */}
        <PostDetailCommentList />

        {/* 중간 간지 */}
        <S.Line />
      </S.Container>
    </MobileContainer>
  );
};

export default CommunityDetailPage;

const S = {
  Container: styled.div`
    padding: 12px 0 0;
    width: 100%;
  `,
  CategoryContainer: styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xxs};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    color: ${({ theme }) => theme.colors.gray[400]};
    margin-bottom: 7px;
  `,
  Line: styled.div`
    width: 100%;

    height: 7px;
    background-color: ${({ theme }) => theme.colors.gray[200]};
    margin: 15px 0;
  `,
};
