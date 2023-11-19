import styled from "styled-components";

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.red[300]};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-top: 0.25rem;
`;
