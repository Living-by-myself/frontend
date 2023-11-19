import { SNS_Buttons } from "@/types/types";
import * as S from "./styles";
import GOOGLE_ICON from "/google_login.svg";
import KAKAO_ICON from "/kakao_login.svg";
import { SNS_BUTTONS } from "@/constants/common.constants";

interface SNSButtonProps {
  type: SNS_Buttons;
}

const SNSButton = ({ type, ...props }: SNSButtonProps) => {
  return (
    <S.SNSButton {...props}>
      <img src={type === SNS_BUTTONS.KAKAO ? KAKAO_ICON : GOOGLE_ICON} />
    </S.SNSButton>
  );
};

export default SNSButton;
