import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const ImagePreview = styled.img`
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  background-color: ${({ theme }) => theme.colors.gray[0]};
  width: 48px;
  height: 48px;
  aspect-ratio: 1;
  border-radius: 0.6rem;
  object-fit: cover;

  -webkit-user-select: none;
  user-select: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[200]};
  }
`;

export const RemoveButton = styled.button`
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transform: translate(+50%, -50%);
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  position: absolute;
  top: 0;
  right: 0;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[400]};
  }
`;
