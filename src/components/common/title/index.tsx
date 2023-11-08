import * as S from "./styles";

export const TITLE_LEVELS = {
  H1: 1,
  H2: 2,
  H3: 3,
  H4: 4,
} as const;

export type TitleLevel = (typeof TITLE_LEVELS)[keyof typeof TITLE_LEVELS];

interface TitleProps {
  level: TitleLevel;
  children: React.ReactNode;
}

const getTitle = (level: TitleLevel) => {
  switch (level) {
    case 1:
      return "h1";
    case 2:
      return "h2";
    case 3:
      return "h3";
    case 4:
      return "h4";
    default:
      throw new Error("Invalid level");
  }
};

const Title = ({ level, children, ...props }: TitleProps) => {
  return (
    <S.Title as={getTitle(level)} level={level} {...props}>
      {children}
    </S.Title>
  );
};

export default Title;
