import Icon from "@/components/common/icon";
import { Post } from "@/pages/community";
// import { S } from "./styles";
// import theme from "@/styles/theme";
import styled from "styled-components";

const CommunityPost = (props: Post) => {
  return (
    <S.Container>
      <S.ContentsBox>
        <S.TitleBodyBox $isImage={props.fileUrls !== null ? true : false}>
          <S.CategoryContainer>{props.category} 인기글</S.CategoryContainer>

          {/* 컨텐츠 박스의 크기가 조절 됨 */}
          <S.Title>{props.title}</S.Title>
          <S.Body>{props.description}</S.Body>
        </S.TitleBodyBox>

        {/* 이미지속성 있고 없고로 조건부 렌더링 */}
        {props.fileUrls ? (
          <S.ImageBox>
            <S.Image alt="이미지명" src={props.fileUrls} />
          </S.ImageBox>
        ) : (
          <></>
        )}
      </S.ContentsBox>

      <S.PostInfoContainer>
        <S.TimeViewBox>
          <S.Time>{props.getCreatedAtAsString}</S.Time>
          <S.View> · {props.viewCnt}</S.View>
        </S.TimeViewBox>
        <S.CommentLikeBox>
          <Icon name="message-circle" size={"12"} />
          <S.Comment>{props.commentCnt}</S.Comment>
        </S.CommentLikeBox>
        <Icon name="heart" size={"12"} />
        <S.Like>{props.likeCnt}</S.Like>
      </S.PostInfoContainer>
    </S.Container>
  );
};

export default CommunityPost;

interface imgProps {
  $isImage: boolean;
}

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
  ContentsBox: styled.div`
    display: flex;
    gap: 15px;
  `,
  TitleBodyBox: styled.div<imgProps>`
    ${({ $isImage }) =>
      $isImage ? "width: calc(100% - 65px)" : "width: 100%"};
  `,
  Title: styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.gray[900]};
    margin-bottom: 5px;

    /* background-color: royalblue; */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  `,
  Body: styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    color: ${({ theme }) => theme.colors.gray[400]};
    margin-bottom: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
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
  ImageBox: styled.div`
    min-width: 50px;
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 5px;
    margin-left: auto;
  `,
  Image: styled.img`
    width: 100%;
    height: auto;
    min-width: 50px;

    border-radius: 5px;
  `,
};
