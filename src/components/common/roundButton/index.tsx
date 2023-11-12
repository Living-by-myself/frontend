import styled, { css } from "styled-components";
import theme from "@/styles/theme";

interface RoundButtonProps {
  children: string;
  onClick?: () => void;
  isCheck?: boolean;
}

// isCheck = true면 초록색, false면 회색
const RoundButton = ({ children, onClick, isCheck }: RoundButtonProps) => {
  console.log(isCheck);
  return (
    <S.Button onClick={onClick} $isCheck={isCheck}>
      {children}
    </S.Button>
  );
};

export default RoundButton;

interface ButtonStyleProps {
  $isCheck?: boolean;
}

const S = {
  Button: styled.button<ButtonStyleProps>`
    padding: 6px 12px;
    border-radius: 20px;
    outline: none;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    background-color: transparent;

    ${({ $isCheck }) => {
      if ($isCheck) {
        return css`
          color: ${theme.colors.green[400]};
          border: 1px solid ${theme.colors.green[400]};
        `;
      } else {
        return css`
          color: ${theme.colors.gray[400]};
          border: 1px solid ${theme.colors.gray[400]};
        `;
      }
    }}
  `,
};
