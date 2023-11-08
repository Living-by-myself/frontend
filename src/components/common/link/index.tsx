import { LinkProps as RLinkProps } from "react-router-dom";
import * as S from "./styles";

export const LINK_SIZE = {
  SM: "sm",
  MD: "md",
  LG: "lg",
} as const;

export type LinkSize = (typeof LINK_SIZE)[keyof typeof LINK_SIZE];
export type LinkBold = boolean;

interface LinkProp extends RLinkProps {
  bold?: LinkBold;
  size?: LinkSize;
}

const Link = ({ size = "md", children, bold = false, ...props }: LinkProp) => {
  return (
    <S.Link size={size} bold={bold} {...props}>
      {children}
    </S.Link>
  );
};

export default Link;
