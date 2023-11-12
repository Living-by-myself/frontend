import styled from "styled-components";
import PostDetailUser from "../../postDetail/user";
import CommentLike from "../like";

const CommentCard = () => {
  return (
    <S.Container>
      {/* 댓글 유저 정보 컴포넌트 */}
      <PostDetailUser />
      <S.CommentBody>
        댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글
        내용댓글 내용댓글 내용댓글 내용댓글 내용
      </S.CommentBody>

      {/* 댓글좋아요 컴포넌트 */}
      <CommentLike />
    </S.Container>
  );
};

export default CommentCard;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 18px;
  `,
  CommentBody: styled.p`
    margin-left: 37px;

    font-size: ${({ theme }) => theme.fontSizes.xs};
    line-height: 1.5;
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    color: ${({ theme }) => theme.colors.gray[900]};
  `,
};
