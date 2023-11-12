import { useState } from "react";
import styled from "styled-components";

const info = {
  userId: 1,
  userNickname: "wer06099@naver.com",
  fileUrls:
    "https://tracelover.s3.ap-northeast-2.amazonaws.com/b82b98c4-5b30-4a5d-9019-0ff0372ea0c9test1.png",
};

interface PostDetailUserProps {
  userId: number;
  getCreatedAtAsString: string;
}

const PostDetailUser = ({
  userId,
  getCreatedAtAsString,
}: PostDetailUserProps) => {
  console.log(userId);
  const [user] = useState<typeof info>(info);

  // 아이디만 받아오면 별도 쿼리로 유저정보를 받아와서 사용
  // 작성시간은 그냥 props로 받아서 사용
  return (
    <S.UserContainer>
      <S.ProfileImg src={user.fileUrls}></S.ProfileImg>
      <S.InfoContainer>
        <S.NickName>{user.userNickname}</S.NickName>
        <S.LocationTimeBox>
          <S.Location>신월 2동</S.Location>
          <S.Time> · {getCreatedAtAsString}</S.Time>
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
