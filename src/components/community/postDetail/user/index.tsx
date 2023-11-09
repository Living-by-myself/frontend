import React from "react";
import styled from "styled-components";

const PostDetailUser = () => {
  return (
    <S.UserContainer>
      <S.ProfileImg></S.ProfileImg>
      <S.InfoContainer>
        <S.NickName>유저의 닉네임</S.NickName>
        <S.LocationTimeBox>
          <S.Location>신월 2동</S.Location>
          <S.Time> · 13시간 전</S.Time>
        </S.LocationTimeBox>
      </S.InfoContainer>
    </S.UserContainer>
  );
};

export default PostDetailUser;

const S = {
  UserContainer: styled.div`
    display: flex;
  `,
  ProfileImg: styled.img`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    border: none;
    background-color: red;
  `,
  InfoContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 7px;
  `,
  NickName: styled.p`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.gray[900]};
    margin-bottom: 3px;
  `,
  Title: styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.gray[900]};
    margin-bottom: 5px;
  `,
  LocationTimeBox: styled.div`
    display: flex;
    align-items: center;
    /* margin-top: auto; */
    font-size: ${({ theme }) => theme.fontSizes.xxs};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    color: ${({ theme }) => theme.colors.gray[400]};
  `,
  Location: styled.p``,
  Time: styled.p``,
};
