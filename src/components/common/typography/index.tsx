import React from "react";
import * as S from "./styles";
import { TypographyBold, TypographyVariants } from "@/types/types";

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variants?: TypographyVariants;
  bold?: TypographyBold;
  children: React.ReactNode;
}

const Typography = ({
  children,
  bold = false,
  variants = "body1",
  ...props
}: TypographyProps) => {
  return (
    <S.Typography $bold={bold} variants={variants} {...props}>
      {children}
    </S.Typography>
  );
};

export default Typography;
