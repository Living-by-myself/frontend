import styled from "styled-components";

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  align-items: center;
  gap: 3rem;
`;

export const PointContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 2rem;
`;

export const PointRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
`;

export const PointLink = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #c4c4c4;
`;
