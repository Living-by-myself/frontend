import { MobileContainer } from "@/styles/commonStyles";
import React from "react";
import styled from "styled-components";

const ChattingDetailPage = () => {
  return (
    <MobileContainer>
      <S.Container>ChattingDetailPage</S.Container>

      {/*채팅 관련 하나의 컴포넌트로 내부에서 또다시 map을 돌려야함 한 줄에 유저가 나냐 아니냐로 구분해서 */}
    </MobileContainer>
  );
};

export default ChattingDetailPage;

const S = {
  Container: styled.div`
    padding-top: 9px;
  `,
};
