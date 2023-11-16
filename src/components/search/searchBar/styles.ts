import styled from "styled-components";

export const InputSearch = styled.input`
  font-size: ${({ theme }) => theme.fontSizes.base};
  padding: 0.7rem 1.2rem;
  background-color: ${({ theme }) => theme.colors.gray[200]};
  border-radius: 0.5rem;
  border: none;
`;
