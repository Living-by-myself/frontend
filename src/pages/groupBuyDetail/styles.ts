import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 768px;
  aspect-ratio: 1;
  z-index: 0;
`;

export const DetailContainer = styled.div`
  padding-bottom: 20rem;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const LocAndTimeContainer = styled.div`
  margin-top: 0.6rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const DescContainer = styled.div`
  margin-top: 2rem;
`;

export const ItemLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

export const UserCountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.6rem;
`;

export const UserCountInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const BottomContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
  width: inherit;
  max-width: inherit;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  bottom: 0;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`;
