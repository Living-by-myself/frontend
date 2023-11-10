import PostDetailCommentInput from "@/components/community/comments/commentInput";
import PostDetailCommentList from "@/components/community/comments/list";
import PostDetailLikes from "@/components/community/postDetail/like";
import PostDetailBody from "@/components/community/postDetail/postBody";
import PostDetailUser from "@/components/community/postDetail/user";
import { MobileContainer } from "@/styles/commonStyles";
import styled from "styled-components";

const CommunityDetailPage = () => {
  return (
    <MobileContainer>
      <S.Container>
        <S.CategoryContainer>카테고리 인기글</S.CategoryContainer>

        {/* 유저정보 컴포넌트 */}
        <PostDetailUser />

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
