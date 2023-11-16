import { MobileContainer } from "@/styles/commonStyles";
import styled from "styled-components";

const MyPageBadge = () => {
  return (
    <MobileContainer>
      <S.Container>
        <S.ProfileImageBox>
          <S.ProfileImage src="https://via.placeholder.com/70" />
        </S.ProfileImageBox>
        <S.UserName>김토스 님의 활동배지</S.UserName>
        <S.UserInfo>총 00개의 배지를 모으셨어요!</S.UserInfo>
        <S.BadgeContainer>
          {/* 난중에 컴포넌트 분리하고 map */}
          <S.Badge>
            <S.BadgeGraphic></S.BadgeGraphic>
            <S.BadgeTitle>뱃지명10자이내입니다.</S.BadgeTitle>
          </S.Badge>
        </S.BadgeContainer>
      </S.Container>
    </MobileContainer>
  );
};

export default MyPageBadge;

const S = {
  // 뱃지 컨테이너 스타일
  BadgeContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  `,
  Badge: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  BadgeGraphic: styled.div`
    width: 100px;
    height: 100px;
    background-color: royalblue;
    border-radius: 82px;
  `,
  BadgeTitle: styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.gray[800]};
  `,
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 15px;
  `,
  ProfileImageBox: styled.div`
    /* display: flex; */
    position: relative;
    /* flex-direction: column; */
  `,
  ProfileImage: styled.img`
    width: 70px;
    height: 70px;
    border-radius: 35px;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  `,
  ProfileChangeBtn: styled.div`
    padding: 4px;
    border: 1px solid ${({ theme }) => theme.colors.green[400]};
    background-color: white;

    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  UserName: styled.p`
    margin: 8px 0;
    color: ${({ theme }) => theme.colors.gray[900]};
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  `,
  UserInfo: styled.p`
    color: ${({ theme }) => theme.colors.gray[400]};
    font-size: ${({ theme }) => theme.fontSizes.xs};
  `,
};
