import styled from "styled-components";

export const TextArea = styled.textarea`
  min-height: 6rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.gray[300]};
  border: none;
  border-radius: 0.4rem;
  padding: 0.4rem 1.2rem;
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.gray[800]};
  resize: vertical;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.gray[700]};
    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[300]};
    }
    cursor: not-allowed;
  }
`;
