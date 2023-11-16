import { TitleLevels } from "@/types/types";
import * as S from "./styles";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: TitleLevels;
  children: React.ReactNode;
}

const getTitle = (level: TitleLevels) => {
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
