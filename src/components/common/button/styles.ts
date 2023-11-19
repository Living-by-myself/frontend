import styled, { css } from "styled-components";
import theme from "@/styles/theme";
import { ButtonColors, ButtonSizes, ButtonVariants } from "@/types/types";
import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from "@/constants/common.constants";

const getColor = (color: ButtonColors) => {
  switch (color) {
    case BUTTON_COLORS.PRIMARY:
      return theme.colors.green[300];
    case BUTTON_COLORS.SUCCESS:
      return theme.colors.blue[300];
    case BUTTON_COLORS.DANGER:
      return theme.colors.red[300];
    default:
      throw new Error("Invalid color");
  }
};

const getHoverColor = (color: ButtonColors) => {
  switch (color) {
    case BUTTON_COLORS.PRIMARY:
      return theme.colors.green[400];
    case BUTTON_COLORS.SUCCESS:
      return theme.colors.blue[400];
    case BUTTON_COLORS.DANGER:
      return theme.colors.red[400];
    default:
      throw new Error("Invalid color");
  }
};

export const Button = styled.button<{
  variants: ButtonVariants;
  color: ButtonColors;
  size: ButtonSizes;
  $full: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 0.8rem;
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  width: ${({ $full }) => ($full ? "100%" : "auto")};

  &:hover {
    cursor: pointer;
  }
  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }

  ${({ variants, theme, color }) => {
    switch (variants) {
      case BUTTON_VARIANTS.CONTAIN:
        return css`
          background-color: ${getColor(color)};
          color: ${theme.colors.gray[0]};
          border: none;
          &:hover {
            background-color: ${getHoverColor(color)};
          }
        `;
      case BUTTON_VARIANTS.OUTLINE:
        return css`
          background-color: ${theme.colors.gray[0]};
          color: ${getColor(color)};
          border: 1px solid ${getColor(color)};
          &:hover {
            background-color: ${theme.colors.gray[200]};
          }
        `;
      case BUTTON_VARIANTS.TEXT:
        return css`
          background-color: transparent;
          color: ${theme.colors.gray[900]};
          border: none;
          font-weight: ${theme.fontWeights.normal};
          &:hover {
            background-color: ${theme.colors.gray[200]};
          }
        `;
      case BUTTON_VARIANTS.LINK:
        return css`
          background-color: transparent;
          color: ${theme.colors.gray[900]};
          border: none;
          font-weight: ${theme.fontWeights.normal};
          text-decoration: underline;
        `;
      case BUTTON_VARIANTS.ICON:
        return css`
          background-color: transparent;
          color: #000;
          border: none;
          font-weight: ${theme.fontWeights.normal};
          &:hover {
            background-color: ${theme.colors.gray[200]};
          }
        `;
      default:
        return "";
    }
  }}

  ${({ size, theme, variants }) => {
    if (variants === BUTTON_VARIANTS.ICON) {
      return css`
        padding: 0.6rem;
      `;
    }
    switch (size) {
      case BUTTON_SIZES.SM:
        return css`
          height: 3.2rem;
          padding: 0 1.2rem;
          font-size: ${theme.fontSizes.sm};
        `;
      case BUTTON_SIZES.MD:
        return css`
          height: 3.6rem;
          padding: 0.8rem 1.6rem;
        `;
      case BUTTON_SIZES.LG:
        return css`
          height: 4rem;
          padding: 0 3.2rem;
        `;
    }
  }}
`;
