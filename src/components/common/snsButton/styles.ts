import styled from "styled-components";

export const SNSButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  height: 4.8rem;
  width: 4.8rem;
  border-radius: 50%;
`;
