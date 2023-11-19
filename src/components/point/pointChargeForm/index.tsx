import * as S from "./styles";
import Typography from "@/components/common/typography";
import InputText from "@/components/common/inputText";
import Button from "@/components/common/button";
import theme from "@/styles/theme";

const PointChargeForm = () => {
  return (
    <>
      <S.PointContainer>
        {/* <S.PointRow>
          <Typography bold>보유 포인트</Typography>
          <Typography bold>{(1000000).toLocaleString()}원</Typography>
        </S.PointRow> */}
        <S.PointRow>
          <Typography bold>충전 포인트</Typography>
        </S.PointRow>
        <S.PointRow>
          <InputText
            id=""
            placeholder="충전할 포인트 금액"
            defaultValue={100000}
          />
          <Typography bold style={{ color: theme.colors.green[300] }}>
            원
          </Typography>
        </S.PointRow>
        <S.Separator />
        <S.PointRow>
          <Typography bold>충전 후 포인트</Typography>
          <Typography bold>{(1100000).toLocaleString()}원</Typography>
        </S.PointRow>
      </S.PointContainer>
      <Button full>100,000원 충전하기</Button>
    </>
  );
};

export default PointChargeForm;
