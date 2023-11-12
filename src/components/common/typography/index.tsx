import React from "react";
import * as S from "./styles";
import { TypographyBold, TypographyVariants } from "@/types/types";

interface TypographyProps {
  variants?: TypographyVariants;
  bold?: TypographyBold;
  children: React.ReactNode;
}

const Typography = ({
  children,
  bold = false,
  variants = "body1",
}: TypographyProps) => {
  return (
    <S.Typography $bold={bold} variants={variants}>
      {children}
    </S.Typography>
  );
};

export default Typography;
