import styled from "styled-components";
import { Link as RLink } from "react-router-dom";
import { LINK_SIZE, LinkSize } from ".";
export const Link = styled(RLink)<{ size: LinkSize }>`
  color: ${({ theme }) => theme.colors.gray[800]};
  text-decoration: none;
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
