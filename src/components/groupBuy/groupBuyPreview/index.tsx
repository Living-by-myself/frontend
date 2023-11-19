import Badge from "@/components/common/badge";
import Icon from "@/components/common/icon";
import Title from "@/components/common/title";
import Typography from "@/components/common/typography";
import theme from "@/styles/theme";
import * as S from "./styles";
import { getRelativeTimeString } from "@/utils/date";
import { GroupBuyPreviewType } from "@/types/groupBuy.types";
import { getImageUrls } from "@/utils/string";

interface GroupBuyPreviewProps {
  data: GroupBuyPreviewType;
}

const GroupBuyPreview = ({ data }: GroupBuyPreviewProps) => {
  const {
    title,
    maxUser,
    currentUserCount,
    createdAt,
    fileUrls,
    perUserPrice,
    enumShare,
    address,
  } = data;

  const firstImage = getImageUrls(fileUrls)[0];

  return (
    <S.Container>
      <S.PreviewImage src={firstImage} width={100} height={100} />
      <S.PreviewInfo>
        <Title level={4}>{title}</Title>
        <Typography variants="caption1">
          {address} · {getRelativeTimeString(createdAt)}
        </Typography>
        <S.PreviewSellInfo>
          <Badge variant="secondary">
            {enumShare === "BUY" ? "모집중" : "나눔중"}
          </Badge>
          <Typography bold>{perUserPrice.toLocaleString()}원</Typography>
        </S.PreviewSellInfo>
        <S.PreviewParticipants>
          <Icon name="users" color={theme.colors.gray[500]} size={20} />
          <Typography variants="caption1">
            {currentUserCount}/{maxUser}명
          </Typography>
        </S.PreviewParticipants>
      </S.PreviewInfo>
    </S.Container>
  );
};

export default GroupBuyPreview;
