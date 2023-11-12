import styled from "styled-components";

export const Container = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.gray[300]};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  padding: 2rem;
`;
