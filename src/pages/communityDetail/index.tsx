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

        {/* 댓글  */}
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
};
