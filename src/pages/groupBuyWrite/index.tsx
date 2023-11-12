import { MobileContainer } from "@/styles/commonStyles";
import * as S from "./styles";
import Title from "@/components/common/title";
import GroupBuyWriteForm from "@/components/groupBuy/groupBuyWriteForm";

const GroupBuyWritePage = () => {
  return (
    <MobileContainer>
      <S.Inner>
        <Title level={1}>공동구매 등록</Title>
        <GroupBuyWriteForm />
      </S.Inner>
    </MobileContainer>
  );
};

export default GroupBuyWritePage;
