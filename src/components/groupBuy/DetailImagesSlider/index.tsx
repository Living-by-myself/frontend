import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

interface Props {
  imageUrls: string[];
}

const DetailImagesSlider = ({ imageUrls }: Props) => {
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {imageUrls.map((image) => (
        <SwiperSlide>
          <img key={image} src={image} alt="item detail" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DetailImagesSlider;
