import React from "react";
import * as S from "./styles";

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputText = (props: InputTextProps) => {
  return <S.InputText {...props} />;
};

export default InputText;
