import BaseModal from "@/components/common/baseModal";
import Button from "@/components/common/button";
import { GROUP_BUY_FILTERS } from "@/constants/groupBuy.constants";
import { GroupBuyFiltersValues, ModalCommonProps } from "@/types/types";
import React from "react";
import * as S from "./styles";

interface FilterModalProps extends ModalCommonProps {
  initFilter: GroupBuyFiltersValues;
  onConfirm: (filter: GroupBuyFiltersValues) => void;
}

const FilterModal = ({ initFilter, onConfirm, onClose }: FilterModalProps) => {
  const [filter, setFilter] = React.useState<GroupBuyFiltersValues>(initFilter);

  return (
    <BaseModal onClose={onClose}>
      <S.Container>
        {Object.entries(GROUP_BUY_FILTERS).map(([key, c]) => {
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

export default FilterModal;
