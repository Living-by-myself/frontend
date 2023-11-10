import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[0]};
  padding: 4rem;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 1rem;
`;
