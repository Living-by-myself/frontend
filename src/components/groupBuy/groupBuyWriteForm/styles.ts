import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

export const FormInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const FormRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const FormCol = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RadioWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const RadioButtonLabel = styled.label<{ $checked: boolean }>`
  background-color: ${({ $checked, theme }) =>
    $checked ? theme.colors.green[300] : theme.colors.gray[0]};
  color: ${({ $checked, theme }) =>
    $checked ? theme.colors.gray[0] : theme.colors.green[300]};

  border-radius: 3.8rem;
  padding: 0.6rem 1.4rem;
  border: 1px solid ${({ theme }) => theme.colors.green[300]};
  cursor: pointer;
`;
