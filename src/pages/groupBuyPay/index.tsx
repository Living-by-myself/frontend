import { MobileContainer } from "@/styles/commonStyles";
import * as S from "./styles";
import Title from "@/components/common/title";
import GroupBuyPreview from "@/components/groupBuy/groupBuyPreview";
import { GroupBuyPreviewType } from "@/types/types";

const DUMMY_DATA: GroupBuyPreviewType = {
  id: 1,
  title: "폴라로이드 카메라 필름 4명 공동구매합니다",
  max_user: 4,
  current_user_count: 1,
  image: "https://placehold.co/100",
  price_per_user: 900000,
  enumShare: "SELL",
  address: "서울시 강남구",
  created_at: "Thu, 09 Nov 2023 08:46:13 GMT",
};

const GroupBuyPayPage = () => {
  return (
    <MobileContainer>
      <S.Inner>
        <Title level={1}>공동구매 신청</Title>
        <GroupBuyPreview data={DUMMY_DATA} />
        <Title level={2}>결제 정보</Title>
      </S.Inner>
    </MobileContainer>
  );
};

export default GroupBuyPayPage;
