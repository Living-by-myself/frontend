import * as S from "./styles";

interface ErrorMessageProps {
  children: React.ReactNode;
}

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return <S.ErrorMessage>{children}</S.ErrorMessage>;
};

export default ErrorMessage;
