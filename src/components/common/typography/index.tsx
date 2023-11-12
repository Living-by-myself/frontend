import React from "react";
import * as S from "./styles";

export const TYPOGRAPHY_VARIANTS = {
  BODY1: "body1",
  BODY2: "body2",
  BODY3: "body3",
  BODY4: "body4",
  CAPTION1: "caption1",
  CAPTION2: "caption2",
} as const;

export type TypographyVariants =
  (typeof TYPOGRAPHY_VARIANTS)[keyof typeof TYPOGRAPHY_VARIANTS];

export type TypographyBold = boolean;

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
    <S.Typography bold={bold} variants={variants}>
      {children}
    </S.Typography>
  );
};

export default Typography;
