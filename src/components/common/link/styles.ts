import styled from "styled-components";
import { Link as RLink } from "react-router-dom";
import { LinkBold, LinkSize } from "@/types/types";
import { LINK_SIZE } from "@/constants/common.constants";

export const Link = styled(RLink)<{ size: LinkSize; $bold: LinkBold }>`
  color: ${({ theme }) => theme.colors.gray[800]};
  font-weight: ${({ theme, $bold }) =>
    $bold ? theme.fontWeights.bold : theme.fontWeights.normal};
  text-decoration: ${({ $bold }) => ($bold ? "underline" : "none")};

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  font-size: ${({ size, theme }) => {
    switch (size) {
      case LINK_SIZE.SM:
        return theme.fontSizes.base;
      case LINK_SIZE.MD:
        return theme.fontSizes.sm;
      case LINK_SIZE.LG:
        return theme.fontSizes.xs;
      default:
        throw new Error("Invalid size");
    }
  }};
`;
