import styled from "styled-components";
import BaseModal from "@/components/common/baseModal";
import { CommunityCategoriesValues, ModalCommonProps } from "@/types/types";
import React from "react";
import { COMMUNITY_CATEGORIES } from "@/constants/community.constants";
import Button from "@/components/common/button";

interface CategoryModalProps extends ModalCommonProps {
  initCategory: CommunityCategoriesValues;
  onConfirm: (category: CommunityCategoriesValues) => void;
}

const CommunityCategoryModal = ({
  initCategory,
  onConfirm,
  onClose,
}: CategoryModalProps) => {
  const [category, setCategory] =
    React.useState<CommunityCategoriesValues>(initCategory);

  return (
    <BaseModal onClose={onClose}>
      <S.Container>
        {Object.entries(COMMUNITY_CATEGORIES).map(([key, c]) => {
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

export default CommunityCategoryModal;

const S = {
  Container: styled.div`
    background-color: ${({ theme }) => theme.colors.gray[0]};
    padding: 4rem;
    border: 1px solid ${({ theme }) => theme.colors.gray[300]};
    border-radius: 1rem;
  `,
};
