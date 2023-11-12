import RoundButton from "@/components/common/roundButton";
import React from "react";
import styled from "styled-components";

const CommunityWriteCategory = () => {
  return (
    <S.Container>
      <RoundButton>청소</RoundButton>
      <RoundButton>인테리어</RoundButton>
      <RoundButton>요리</RoundButton>
      <RoundButton>자유</RoundButton>
    </S.Container>
  );
};

export default CommunityWriteCategory;

const S = {
  Container: styled.div`
    padding: 12px 16px;
    width: 100vw;
    gap: 5px;
    display: flex;

    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  `,
};
