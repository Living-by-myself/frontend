import Typography from "@/components/common/typography";
import * as S from "./styles";

const HomePage = () => {
  return (
    <S.Container>
      <Typography variants="body1">body1입니다</Typography>
      <Typography variants="body2">body2입니다</Typography>
      <Typography variants="body3">body3입니다</Typography>
      <Typography variants="body4">body4입니다</Typography>
    </S.Container>
  );
};

export default HomePage;
