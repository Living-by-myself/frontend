import Icon from "@/components/common/icon";
import styled from "styled-components";

const PostDetailBody = () => {
  return (
    <>
      <S.Container>
        <S.Title>제목영역입니다.</S.Title>
        <S.Body>본문내용입니다.</S.Body>
      </S.Container>
      <S.View>
        <Icon name="eye" size={"12"} />
        000명이 봤어요
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
};
