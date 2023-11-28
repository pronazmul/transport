/* eslint-disable import/no-unresolved */
import React from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slider() {
  return (
    <Swiper
      className="mySwiper w-full h-[31vh] -mt-1"
      loop
      centeredSlides
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <img src="/assets/1.jpg" width="100%" className="object-cover h-full" alt="river" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/2.jpg" width="100%" className="object-cover h-full" alt="river" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/3.jpg" width="100%" className="object-cover h-full" alt="river" />
      </SwiperSlide>
    </Swiper>
  );
}
