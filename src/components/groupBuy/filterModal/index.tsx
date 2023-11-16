import BaseModal from "@/components/common/baseModal";
import Button from "@/components/common/button";
import { GROUP_BUY_SORT } from "@/constants/groupBuy.constants";
import { ModalCommonProps } from "@/types/types";
import { useState } from "react";
import * as S from "./styles";
import { GroupBuySortValues } from "@/types/groupBuy.types";

interface FilterModalProps extends ModalCommonProps {
  initFilter: GroupBuySortValues;
  onConfirm: (filter: GroupBuySortValues) => void;
}

const FilterModal = ({ initFilter, onConfirm, onClose }: FilterModalProps) => {
  const [filter, setFilter] = useState<GroupBuySortValues>(initFilter);

  const handleConfirm = () => {
    onConfirm(filter);
  };

  return (
    <BaseModal onClose={onClose}>
      <S.Container>
        <S.FilterList>
          {Object.entries(GROUP_BUY_SORT).map(([key, c]) => {
            const { value, name } = c;
            return (
              <S.FilterItem
                key={key}
                onClick={() => {
                  setFilter(value);
                }}
                $isChecked={filter === value}
              >
                {name}
              </S.FilterItem>
            );
          })}
        </S.FilterList>
        <S.Buttons>
          <Button onClick={handleConfirm}>확인</Button>
          <Button variants="outline" onClick={() => onClose()}>
            닫기
          </Button>
        </S.Buttons>
      </S.Container>
    </BaseModal>
  );
};

export default FilterModal;
