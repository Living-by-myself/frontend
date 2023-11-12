import styled from "styled-components";
import { TYPOGRAPHY_VARIANTS, TypographyBold, TypographyVariants } from ".";

export const Typography = styled.p<{
  bold: TypographyBold;
  variants: TypographyVariants;
}>`
  font-weight: ${({ bold, theme }) =>
    bold ? theme.fontWeights.bold : theme.fontWeights.normal};

  font-size: ${({ theme, variants }) => {
    switch (variants) {
      case TYPOGRAPHY_VARIANTS.BODY1:
        return theme.fontSizes.base;
      case TYPOGRAPHY_VARIANTS.BODY2:
        return theme.fontSizes.sm;
      case TYPOGRAPHY_VARIANTS.BODY3:
        return theme.fontSizes.xs;
      case TYPOGRAPHY_VARIANTS.BODY4:
        return theme.fontSizes.xxs;
      case TYPOGRAPHY_VARIANTS.CAPTION1:
        return theme.fontSizes.xs;
      case TYPOGRAPHY_VARIANTS.CAPTION2:
        return theme.fontSizes.xxs;
      default:
        throw new Error("Typography variant not found");
    }
  }};

  color: ${({ theme, variants }) => {
    switch (variants) {
      case TYPOGRAPHY_VARIANTS.CAPTION1:
      case TYPOGRAPHY_VARIANTS.CAPTION2:
        return theme.colors.gray[500];
      default:
        return theme.colors.gray[800];
    }
  }};
`;
