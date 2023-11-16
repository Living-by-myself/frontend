import styled from "styled-components";

export const InputFile = styled.input``;

export const InputButton = styled.button`
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  background-color: ${({ theme }) => theme.colors.gray[0]};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.gray[500]};
  padding: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1;
  align-items: center;
  width: 48px;
  height: 48px;
  aspect-ratio: 1;
  border-radius: 0.6rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[200]};
  }
`;

export const FileCount = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
