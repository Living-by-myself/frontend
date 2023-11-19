import useUserStore from "@/store/useUserStore";
import { getWonString } from "@/utils/string";
import styled from "styled-components";
import { MyPageUserBasicInfoProps } from "../userInfo";

interface MyPagePaymentProps {
  cash: number | undefined;
}

const MyPagePayment = () => {
  const { profile } = useUserStore();

  return (
    <S.Container>
      <S.Inner>
        <S.Label>보유 포인트</S.Label>
        <S.Point>{profile?.cash ? getWonString(profile.cash) : 0}원</S.Point>
      </S.Inner>
      <S.PointCharging>충전하기</S.PointCharging>
    </S.Container>
  );
};

export default MyPagePayment;

const S = {
  Container: styled.div`
    padding: 10px;
    width: 100%;
    justify-content: space-between;
    display: flex;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  `,
  Inner: styled.div``,
  Label: styled.p`
    margin-bottom: 8px;
    font-size: ${({ theme }) => theme.fontSizes.xxs};
    color: ${({ theme }) => theme.colors.gray[400]};
  `,
  Point: styled.p`
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.green[400]};
  `,
  PointCharging: styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.gray[400]};
    font-size: ${({ theme }) => theme.fontSizes.xs};
  `,
};
