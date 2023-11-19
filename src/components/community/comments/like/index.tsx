import Icon from "@/components/common/icon";
import styled from "styled-components";

const CommentLike = () => {
  return (
    <S.Container>
      <Icon name="heart" size={14} /> 좋아요 1
    </S.Container>
  );
};

export default CommentLike;

const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    margin-left: 37px;
    margin-top: 5px;
    /* background-color: red; */

    line-height: 1.5;
    font-size: ${({ theme }) => theme.fontSizes.xxs};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    color: ${({ theme }) => theme.colors.gray[400]};
  `,
};
