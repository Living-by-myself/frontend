import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[0]};
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 1rem;
  min-width: 20rem;
`;

export const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const CategoryItem = styled.button<{ $isChecked: boolean }>`
  border: none;
  cursor: pointer;
  padding: 1.3rem 2rem;
  border-radius: 1rem;
  background-color: ${({ theme, $isChecked }) =>
    $isChecked ? theme.colors.gray[200] : theme.colors.gray[0]};
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

export const Buttons = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
