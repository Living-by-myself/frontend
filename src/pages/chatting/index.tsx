import { MobileContainer } from "@/styles/commonStyles";
import React from "react";
import styled from "styled-components";

const ChattingPage = () => {
  return (
    <MobileContainer>
      <S.Container>
        <S.Label>채팅</S.Label>

        {/* 채팅 리스트 컴포넌트화 해야함 */}
        <S.ChattingContainer>
          <S.ChattingInfoBox>
            <S.ChattingRoomName>채팅방 이름</S.ChattingRoomName>
            <S.ChattingRoomInfo>채팅방 정보</S.ChattingRoomInfo>
          </S.ChattingInfoBox>
          <S.ChattingRoomLastMessage>
            채팅방 마지막 메시지 세부 UI 나중에 조건부로 구현
          </S.ChattingRoomLastMessage>
        </S.ChattingContainer>
      </S.Container>
    </MobileContainer>
  );
};

export default ChattingPage;

const S = {
  Container: styled.div`
    padding-top: 9px;
    width: 100%;
    height: 100%;
  `,
  Label: styled.p`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.gray[900]};
  `,
  ChattingContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 13px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[400]};
  `,
  ChattingInfoBox: styled.div`
    display: flex;
    gap: 6px;
    align-items: center;
  `,
  ChattingRoomName: styled.p`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.gray[900]};
  `,
  ChattingRoomInfo: styled.p`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    color: ${({ theme }) => theme.colors.gray[400]};
  `,
  ChattingRoomLastMessage: styled.p`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    color: ${({ theme }) => theme.colors.gray[900]};
  `,
};
