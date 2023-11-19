import { forwardRef, InputHTMLAttributes } from "react";
import * as S from "./styles";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputText = forwardRef<HTMLInputElement, InputTextProps>((props, ref) => {
  return <S.InputText {...props} ref={ref} />;
});

export default InputText;
