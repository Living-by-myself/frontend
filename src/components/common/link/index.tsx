import { LinkProps as RLinkProps } from "react-router-dom";
import * as S from "./styles";
import { LinkBold, LinkSize } from "@/types/types";

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
