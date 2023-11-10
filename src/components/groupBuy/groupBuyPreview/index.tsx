import Badge from "@/components/common/badge";
import Icon from "@/components/common/icon";
import Title from "@/components/common/title";
import Typography from "@/components/common/typography";
import theme from "@/styles/theme";
import { GroupBuyPreviewType } from "@/types/types";
import * as S from "./styles";
import { getRelativeTimeString } from "@/utils/date";

interface GroupBuyPreviewProps {
  data: GroupBuyPreviewType;
}

const GroupBuyPreview = ({ data }: GroupBuyPreviewProps) => {
  const {
    title,
    max_user,
    current_user_count,
    image,
    price_per_user,
    enumShare,
    address,
    created_at,
  } = data;
  return (
    <S.Container>
      <S.PreviewImage src={image} width={100} height={100} />
      <S.PreviewInfo>
        <Title level={4}>{title}</Title>
        <Typography variants="caption1">
          {address} · {getRelativeTimeString(created_at)}
        </Typography>
        <S.PreviewSellInfo>
          <Badge variant="secondary">
            {enumShare === "SELL" ? "모집중" : "나눔중"}
          </Badge>
          <Typography bold>{price_per_user.toLocaleString()}원</Typography>
        </S.PreviewSellInfo>
        <S.PreviewParticipants>
          <Icon name="users" color={theme.colors.gray[500]} size={20} />
          <Typography variants="caption1">
            {current_user_count}/{max_user}명
          </Typography>
        </S.PreviewParticipants>
      </S.PreviewInfo>
    </S.Container>
  );
};

export default GroupBuyPreview;
