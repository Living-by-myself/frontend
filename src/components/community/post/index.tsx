import Icon from "@/components/common/icon";
// import { S } from "./styles";
import styled from "styled-components";

const CommunityPost = () => {
  return (
    <S.Container>
      <S.CategoryContainer>카테고리 인기글</S.CategoryContainer>
      <S.Title>글의 제목이 되는 부분입니다 14px Prete...</S.Title>
      <S.Body>글의 제목이 되는 부분입니다 14px Pretendard medium black</S.Body>
      <S.PostInfoContainer>
        <S.TimeViewBox>
          <S.Time>5시간 전</S.Time>
          <S.View> · 조회 100</S.View>
        </S.TimeViewBox>
        <S.CommentLikeBox>
          <Icon name="message-circle" size={"12"} />
          <S.Comment>4</S.Comment>
        </S.CommentLikeBox>
        <Icon name="heart" size={"12"} />
        <S.Like>4</S.Like>
      </S.PostInfoContainer>
    </S.Container>
  );
};

export default CommunityPost;

const S = {
  Container: styled.div`
    padding: 14px 0 16px;
    width: 100%;
  `,
  CategoryContainer: styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xxs};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    color: ${({ theme }) => theme.colors.gray[400]};
    margin-bottom: 7px;
  `,
  Title: styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.gray[900]};
    margin-bottom: 5px;
  `,
  Body: styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    color: ${({ theme }) => theme.colors.gray[400]};
    margin-bottom: 5px;
  `,
  PostInfoContainer: styled.div`
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.xxs};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    color: ${({ theme }) => theme.colors.gray[400]};
  `,
  TimeViewBox: styled.div`
    display: flex;
    align-items: center;
    margin-right: auto;
  `,
  CommentLikeBox: styled.div`
    display: flex;
    align-items: center;
    margin-left: 0;
  `,
  Time: styled.p``,
  View: styled.p``,
  Comment: styled.p`
    margin: 1px 10px 0 3px;
  `,
  Like: styled.p`
    margin: 1px 0 0 3px;
  `,
  ImageBox: styled.div``,
  Image: styled.img``,
};
