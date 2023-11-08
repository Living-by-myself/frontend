import * as S from "./styles";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = ({ children, ...props }: LabelProps) => {
  return <S.Label {...props}>{children}</S.Label>;
};

export default Label;
