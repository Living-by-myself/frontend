import { forwardRef } from "react";
import * as S from "./styles";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = forwardRef<HTMLTextAreaElement, Props>((props: Props, ref) => {
  return <S.TextArea {...props} ref={ref} />;
});

export default TextArea;
