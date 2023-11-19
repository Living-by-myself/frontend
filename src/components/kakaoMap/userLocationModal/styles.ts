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
  position: relative;
`;

export const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
`;

export const LocationButton = styled.div`
  background-color: #fff;
  z-index: 100;
  position: absolute;
  bottom: 6px;
  right: 6px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
