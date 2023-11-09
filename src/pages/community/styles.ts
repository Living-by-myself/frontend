import styled from "styled-components";

export const S = {
  FilterArea: styled.div`
    width: 100%;
    display: flex;
    gap: 8px;
    padding: 12px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  `,
  FilterBtn: styled.button`
    padding: 8px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.green[300]};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.green[300]};
  `,
};
