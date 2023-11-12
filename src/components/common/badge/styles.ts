import { BADGE_VARIANTS } from "@/constants/common.constants";
import { BadgeVariants } from "@/types/types";
import styled, { css } from "styled-components";

export const Badge = styled.div<{ variant: BadgeVariants }>`
  display: inline-flex;
  align-items: center;
  border-radius: 0.4rem;
  padding: 0.5rem 0.8rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.gray[0]};
  border: none;

  ${({ variant, theme }) => {
    switch (variant) {
      case BADGE_VARIANTS.PRIMARY:
        return css`
          background-color: ${theme.colors.gray[800]};
        `;
      case BADGE_VARIANTS.SECONDARY:
        return css`
          background-color: ${theme.colors.gray[200]};
          color: ${theme.colors.gray[800]};
        `;
      case BADGE_VARIANTS.OUTLINE:
        return css`
          background-color: ${theme.colors.gray[0]};
          color: ${theme.colors.gray[800]};
          box-shadow: 0 0 0 1px ${theme.colors.gray[300]} inset;
        `;
      case BADGE_VARIANTS.SUCCESS:
        return css`
          background-color: ${theme.colors.blue[300]};
        `;
      case BADGE_VARIANTS.DANGER:
        return css`
          background-color: ${theme.colors.red[300]};
        `;
      default:
        throw new Error("Invalid Badge variant");
    }
  }}
`;
