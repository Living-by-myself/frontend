import * as S from "./styles";

export const BUTTON_VARIANTS = {
  CONTAIN: "contain",
  OUTLINE: "outline",
  TEXT: "text",
  LINK: "link",
  ICON: "icon",
} as const;

export const BUTTON_COLORS = {
  PRIMARY: "primary",
  SUCCESS: "success",
  DANGER: "danger",
} as const;

export const BUTTON_SIZES = {
  SM: "sm",
  MD: "md",
  LG: "lg",
} as const;

export type ButtonVariants =
  (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];

export type ButtonColors = (typeof BUTTON_COLORS)[keyof typeof BUTTON_COLORS];

export type ButtonSizes = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];

interface ButtonProps {
  variants?: ButtonVariants;
  color?: ButtonColors;
  size?: ButtonSizes;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  variants = "contain",
  color = "primary",
  size = "md",
  disabled,
  children,
  onClick,
  type = "submit",
}: ButtonProps) => {
  return (
    <S.Button
      variants={variants}
      color={color}
      size={size}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </S.Button>
  );
};

export default Button;
