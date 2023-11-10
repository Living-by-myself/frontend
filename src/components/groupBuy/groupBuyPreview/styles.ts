import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 1rem 0;
  align-items: center;
  gap: 1rem;
`;

export const PreviewImage = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 1rem;
`;

export const PreviewInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PreviewSellInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.6rem;
`;

export const PreviewParticipants = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.4rem;
  gap: 0.6rem;
`;
