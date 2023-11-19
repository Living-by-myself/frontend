import BaseModal from "@/components/common/baseModal";
import Button from "@/components/common/button";
import { COMMUNITY_FILTERS } from "@/constants/community.constants";
import { CommunityFiltersValues, ModalCommonProps } from "@/types/types";
import React from "react";
import styled from "styled-components";

interface FilterModalProps extends ModalCommonProps {
  initFilter: CommunityFiltersValues;
  onConfirm: (filter: CommunityFiltersValues) => void;
}

const CommunityFilterModal = ({
  initFilter,
  onConfirm,
  onClose,
}: FilterModalProps) => {
  const [filter, setFilter] =
    React.useState<CommunityFiltersValues>(initFilter);

  return (
    <BaseModal onClose={onClose}>
      <S.Container>
        {Object.entries(COMMUNITY_FILTERS).map(([key, c]) => {
          const { value, name } = c;
          return (
            <div
              key={key}
              onClick={() => {
                setFilter(value);
              }}
            >
              {name}
              {filter === value && "✓"}
            </div>
          );
        })}
        <Button onClick={() => onConfirm(filter)}>확인</Button>
        <Button variants="outline" onClick={() => onClose()}>
          닫기
        </Button>
      </S.Container>
    </BaseModal>
  );
};

export default CommunityFilterModal;

const S = {
  Container: styled.div`
    background-color: ${({ theme }) => theme.colors.gray[0]};
    padding: 4rem;
    border: 1px solid ${({ theme }) => theme.colors.gray[300]};
    border-radius: 1rem;
  `,
};
