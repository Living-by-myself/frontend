import styled from "styled-components";

export const Label = styled.label<{ $bold: boolean }>`
  font-weight: ${({ theme, $bold }) =>
    $bold ? theme.fontWeights.bold : theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray[800]};
`;
