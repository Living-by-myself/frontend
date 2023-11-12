import * as S from "./styles";
import GOOGLE_ICON from "/google_login.svg";
import KAKAO_ICON from "/kakao_login.svg";

const SNS_BUTTONS = {
  KAKAO: "kakao",
  GOOGLE: "google",
} as const;

type SNS_BUTTONS = (typeof SNS_BUTTONS)[keyof typeof SNS_BUTTONS];

interface SNSButtonProps {
  type: SNS_BUTTONS;
}

const SNSButton = ({ type, ...props }: SNSButtonProps) => {
  return (
    <S.SNSButton {...props}>
      <img src={type === SNS_BUTTONS.KAKAO ? KAKAO_ICON : GOOGLE_ICON} />
    </S.SNSButton>
  );
};

export default SNSButton;
