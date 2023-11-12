import BaseModal from "@/components/common/baseModal";
import Button from "@/components/common/button";
import { GROUP_BUY_CATEGORIES } from "@/constants/groupBuy.constants";
import { GroupBuyCategoriesValues, ModalCommonProps } from "@/types/types";
import React from "react";
import * as S from "./styles";

interface CategoryModalProps extends ModalCommonProps {
  initCategory: GroupBuyCategoriesValues;
  onConfirm: (category: GroupBuyCategoriesValues) => void;
}

const CategoryModal = ({
  initCategory,
  onConfirm,
  onClose,
}: CategoryModalProps) => {
  const [category, setCategory] =
    React.useState<GroupBuyCategoriesValues>(initCategory);

  return (
    <BaseModal onClose={onClose}>
      <S.Container>
        {Object.entries(GROUP_BUY_CATEGORIES).map(([key, c]) => {
          const { value, name } = c;
          return (
            <div
              key={key}
              onClick={() => {
                setCategory(value);
              }}
            >
              {name}
              {category === value && "✓"}
            </div>
          );
        })}
        <Button onClick={() => onConfirm(category)}>확인</Button>
        <Button variants="outline" onClick={() => onClose()}>
          닫기
        </Button>
      </S.Container>
    </BaseModal>
  );
};

export default CategoryModal;
