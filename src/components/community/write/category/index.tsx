import RoundButton from "@/components/common/roundButton";
import { CommunityWriteFormData } from "@/types/form.types";
import { UseFormSetValue, UseFormWatch } from "react-hook-form";
import styled from "styled-components";

interface CommunityWriteCategoryProps {
  watch: UseFormWatch<CommunityWriteFormData>;
  setValue: UseFormSetValue<CommunityWriteFormData>;
}

const CommunityWriteCategory = ({
  watch,
  setValue,
}: CommunityWriteCategoryProps) => {
  return (
    <S.Container>
      <RoundButton
        onClick={() => {
          setValue("category", "clean");
        }}
        isCheck={watch("category") === "clean" && true}
      >
        청소
      </RoundButton>
      <RoundButton
        onClick={() => {
          setValue("category", "interior");
        }}
        isCheck={watch("category") === "interior" && true}
      >
        인테리어
      </RoundButton>
      <RoundButton
        onClick={() => {
          setValue("category", "cook");
        }}
        isCheck={watch("category") === "cook" && true}
      >
        요리
      </RoundButton>
      <RoundButton
        onClick={() => {
          setValue("category", "free");
        }}
        isCheck={watch("category") === "free" && true}
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
