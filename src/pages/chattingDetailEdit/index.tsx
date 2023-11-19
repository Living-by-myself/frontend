import Button from "@/components/common/button";
import { MobileContainer } from "@/styles/commonStyles";
import styled from "styled-components";

const ChattingDetailEdit = () => {
  return (
    <MobileContainer>
      <S.Container>채팅 참여자</S.Container>
      <S.UserContainer>
        {/* 유저 정보 나열 */}
        <S.User>
          <S.UserProfile></S.UserProfile>
          <S.UserNickname>닉네임</S.UserNickname>
          <S.UserInfo>동네</S.UserInfo>
        </S.User>
        <S.User>
          <S.UserProfile></S.UserProfile>
          <S.UserNickname>닉네임</S.UserNickname>
          <S.UserInfo>동네</S.UserInfo>
        </S.User>
        <S.User>
          <S.UserProfile></S.UserProfile>
          <S.UserNickname>닉네임</S.UserNickname>
          <S.UserInfo>동네</S.UserInfo>
        </S.User>
        <S.User>
          <S.UserProfile></S.UserProfile>
          <S.UserNickname>닉네임</S.UserNickname>
          <S.UserInfo>동네</S.UserInfo>
        </S.User>
      </S.UserContainer>

      {/* 해당게시글 이동 버튼 (공구채팅방일때만..) */}
      {/* 채팅방 나가기 버튼 */}
      <S.ButtonContainer>
        <Button>게시글 이동</Button>
        <Button>채팅방 나가기</Button>
      </S.ButtonContainer>
    </MobileContainer>
  );
};

export default ChattingDetailEdit;

const S = {
  Container: styled.div`
    padding-top: 9px;
  `,
  UserContainer: styled.div`
    width: 100%;
  `,
  User: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 8px;

    padding: 10px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[400]};
  `,
  UserProfile: styled.div`
    width: 30px;
    height: 30px;
    background-color: royalblue;
    border-radius: 15px;
  `,
  UserNickname: styled.div`
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  `,
  UserInfo: styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.gray[400]};
  `,
  ButtonContainer: styled.div``,
};
