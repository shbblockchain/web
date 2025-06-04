// components/Slider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const Slider = () => {
  return (
    <div className="slider-wrapper">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/joki.png" alt="Slide 1" className="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/joki2.jpg" alt="Slide 2" className="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/joki3.jpg" alt="Slide 3" className="slider-img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
