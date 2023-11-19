import BaseModal from "@/components/common/baseModal";
import Button from "@/components/common/button";
import { GROUP_BUY_CATEGORIES } from "@/constants/groupBuy.constants";
import { GroupBuyCategoriesValues, ModalCommonProps } from "@/types/types";
import { useState } from "react";
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
    useState<GroupBuyCategoriesValues>(initCategory);

  const handleConfirm = () => {
    onConfirm(category);
  };

  return (
    <BaseModal onClose={onClose}>
      <S.Container>
        <S.CategoryList>
          {Object.entries(GROUP_BUY_CATEGORIES).map(([key, c]) => {
            const { value, name } = c;
            return (
              <S.CategoryItem
                key={key}
                onClick={() => {
                  setCategory(value);
                }}
                $isChecked={category === value}
              >
                {name}
              </S.CategoryItem>
            );
          })}
        </S.CategoryList>
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

export default CategoryModal;
