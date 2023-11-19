import Icon from "@/components/common/icon";
import { UserProps } from "@/pages/mypage";
import styled from "styled-components";

export interface MyPageUserBasicInfoProps {
  user: UserProps | undefined;
}

const MyPageUserBasicInfo = ({ user }: MyPageUserBasicInfoProps) => {
  return (
    <S.Container>
      <S.ProfileImageBox>
        <S.ProfileChangeBtn>
          <Icon name="camera" size="16px" />
        </S.ProfileChangeBtn>
        <S.ProfileImage src="https://via.placeholder.com/70" />
      </S.ProfileImageBox>
      <S.UserName>{user?.nickname}</S.UserName>
      <S.UserInfo>
        Lv. {user?.level} | {user?.address ? user?.address : "주소없음"}
      </S.UserInfo>
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
