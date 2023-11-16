import RoundButton from "@/components/common/roundButton";
import { useCommunityWriteStore } from "@/store/useCommunityStore";
import styled from "styled-components";

const CommunityWriteCategory = () => {
  const category = useCommunityWriteStore((state) => state.category);
  const clickCategory = (value: string) => {
    useCommunityWriteStore.setState({ category: value });
  };

  return (
    <S.Container>
      <RoundButton
        onClick={() => {
          clickCategory("clean");
        }}
        isCheck={category === "clean" && true}
      >
        청소
      </RoundButton>
      <RoundButton
        onClick={() => {
          clickCategory("interior");
        }}
        isCheck={category === "interior" && true}
      >
        인테리어
      </RoundButton>
      <RoundButton
        onClick={() => {
          clickCategory("food");
        }}
        isCheck={category === "food" && true}
      >
        요리
      </RoundButton>
      <RoundButton
        onClick={() => {
          clickCategory("etc");
        }}
        isCheck={category === "etc" && true}
      >
        자유
      </RoundButton>
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
