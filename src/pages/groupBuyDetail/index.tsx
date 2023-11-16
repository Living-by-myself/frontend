import { MobileContainer } from "@/styles/commonStyles";
import * as S from "./styles";
import Badge from "@/components/common/badge";
import Typography from "@/components/common/typography";
import Title from "@/components/common/title";
import { getRelativeTimeString } from "@/utils/date";
import Link from "@/components/common/link";
import Icon from "@/components/common/icon";
import theme from "@/styles/theme";
import StaticMap from "@/components/kakaoMap/staticMap";
import DetailImagesSlider from "@/components/groupBuy/DetailImagesSlider";
import Button from "@/components/common/button";
import { useState } from "react";

const DUMMY_DATA = {
  title: "폴라로이드 카메라 필름 4명 공동구매합니다.",
  description:
    "폴라로이드 카메라 필름 4명 공동구매합니다.  폴라로이드 카메라 필름 4명 공동구매합니다. 폴라로이드 카메라 필름 4명 공동구매합니다. ",
  itemLink: "https://www.naver.com/",
  maxUser: 4,
  currentUserCount: 1,
  images: ["https://picsum.photos/700", "https://picsum.photos/700"],
  perUserPrice: 900000,
  enumShare: "SELL",
  enumCategory: "ETC",
  enumStatus: "PROGRESS",
  address: "서울시 중구 세종대로 110",
  lat: 37.56669,
  lng: 126.9784949,
  created_at: "Thu, 09 Nov 2023 08:46:13 GMT",
};

const GroupBuyDetailPage = () => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <MobileContainer>
      <S.CarouselContainer>
        <DetailImagesSlider imageUrls={DUMMY_DATA.images} />
      </S.CarouselContainer>

      <S.DetailContainer>
        <div>
          <Title level={4}>{DUMMY_DATA.title}</Title>
        </div>
        <S.PriceContainer>
          <Badge variant="success">
            {DUMMY_DATA.enumStatus === "PROGRESS" ? "판매중" : "판매완료"}
          </Badge>
          <Typography bold variants="body1">
            {DUMMY_DATA.perUserPrice.toLocaleString()}원
          </Typography>
        </S.PriceContainer>

        <S.LocAndTimeContainer>
          <Typography variants="caption1">
            {DUMMY_DATA.address} ·{" "}
            {getRelativeTimeString(DUMMY_DATA.created_at)}
          </Typography>
        </S.LocAndTimeContainer>

        <S.DescContainer>
          <Typography variants="body1">{DUMMY_DATA.description}</Typography>
        </S.DescContainer>

        <S.ItemLinkContainer>
          <Typography variants="body2">제품 링크: </Typography>
          <Link to={DUMMY_DATA.itemLink} target="_blank" bold>
            바로가기
          </Link>
        </S.ItemLinkContainer>

        <S.UserCountContainer>
          <Typography variants="body2">참여중인 인원: </Typography>
          <S.UserCountInfo>
            <Icon name="users" color={theme.colors.gray[500]} size={20} />
            <Typography variants="caption1">
              {DUMMY_DATA.currentUserCount}/{DUMMY_DATA.maxUser}명
            </Typography>
          </S.UserCountInfo>
        </S.UserCountContainer>

        <Title level={4}>장소</Title>
        <StaticMap lat={DUMMY_DATA.lat} lng={DUMMY_DATA.lng} />
      </S.DetailContainer>
      <S.BottomContainer>
        <Button variants="icon" onClick={toggleLike}>
          <Icon
            name="heart"
            color={isLiked ? "#ff0000" : theme.colors.gray[400]}
            fill={isLiked ? "#ff0000" : "#fff"}
          />
        </Button>
        <Button variants="outline" full>
          채팅하기
        </Button>
        <Button full>공동구매하기</Button>
      </S.BottomContainer>
    </MobileContainer>
  );
};

export default GroupBuyDetailPage;
