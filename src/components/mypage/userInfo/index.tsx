import Icon from "@/components/common/icon";
import styled from "styled-components";

const MyPageUserBasicInfo = () => {
  return (
    <S.Container>
      <S.ProfileImageBox>
        <S.ProfileChangeBtn>
          <Icon name="camera" size="16px" />
        </S.ProfileChangeBtn>
        <S.ProfileImage src="https://via.placeholder.com/70" />
      </S.ProfileImageBox>
      <S.UserName>김토스</S.UserName>
      <S.UserInfo>Lv. 100 | 신월 2동</S.UserInfo>
    </S.Container>
  );
};

export default MyPageUserBasicInfo;

const S = {
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
