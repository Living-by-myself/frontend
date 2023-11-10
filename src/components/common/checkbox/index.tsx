import React from "react";
import * as S from "./styles";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = (props: CheckboxProps) => {
  return <S.Checkbox type="checkbox" {...props} />;
};

export default Checkbox;
