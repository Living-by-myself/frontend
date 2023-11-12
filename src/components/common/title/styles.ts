import styled from "styled-components";
import { TITLE_LEVELS, TitleLevel } from ".";

export const Title = styled.h1<{ level: TitleLevel }>`
  color: ${({ theme }) => theme.colors.gray[800]};
  margin: 0.5em 0;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme, level }) => {
    switch (level) {
      case TITLE_LEVELS.H1:
        return theme.fontSizes.xxl;
      case TITLE_LEVELS.H2:
        return theme.fontSizes.xl;
      case TITLE_LEVELS.H3:
        return theme.fontSizes.lg;
      case TITLE_LEVELS.H4:
        return theme.fontSizes.base;
    }
  }};
`;
