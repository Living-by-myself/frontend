import * as S from "./styles";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  bold?: boolean;
}

const Label = ({ bold = false, children, ...props }: LabelProps) => {
  return (
    <S.Label $bold={bold} {...props}>
      {children}
    </S.Label>
  );
};

export default Label;
