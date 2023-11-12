import { BadgeVariants } from "@/types/types";
import * as S from "./styles";

interface BadgeProps {
  variant?: BadgeVariants;
  children: React.ReactNode;
}

const Badge = ({ variant = "primary", children }: BadgeProps) => {
  return <S.Badge variant={variant}>{children}</S.Badge>;
};

export default Badge;
