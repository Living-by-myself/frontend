import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  border-radius: 1.2rem;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  background-color: ${({ theme }) => theme.colors.gray[0]};
`;

export const StMap = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 1.2rem;
  overflow: hidden;
  display: flex;
`;

export const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
`;
