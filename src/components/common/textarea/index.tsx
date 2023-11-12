import * as S from "./styles";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = (props: Props) => {
  return <S.TextArea {...props} />;
};

export default TextArea;
