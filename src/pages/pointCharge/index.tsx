import { MobileContainer } from "@/styles/commonStyles";
import * as S from "./styles";
import Title from "@/components/common/title";
import PointChargeForm from "@/components/point/pointChargeForm";

const PointChargePage = () => {
  return (
    <MobileContainer>
      <S.Inner>
        <Title level={1}>포인트 결제</Title>
        <PointChargeForm />
      </S.Inner>
    </MobileContainer>
  );
};

export default PointChargePage;
