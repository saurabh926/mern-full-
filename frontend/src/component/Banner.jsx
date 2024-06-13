import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import b1 from "../images/b3.webp";
import b2 from "../images/b2.png";
import b3 from "../images/b1.png";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import custom CSS for styling


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <img src={b1} alt="Banner 1" />  </SwiperSlide>
        <SwiperSlide><img src={b2} alt="Banner 2" /></SwiperSlide>
        <SwiperSlide><img src={b3} alt="Banner 3" /></SwiperSlide>
      </Swiper>
    </>
  );
}
