import React from "react";
import protagonistas from "../assets/Img/protagonistas.png";
import protagonista1 from "../assets/Img/protagonista1.png";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import "swiper/css/free-mode";

const Protagonistas = () => {
  return (
    <div className="relative" id="testimonios">
      <img
        className="w-[90%] mx-auto"
        src={protagonistas}
        alt="Nuestros protagonistas image"
      />
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className="ProductosSlider absolute w-[50%] top-20 left-2/4 -translate-x-2/4"
      >
        <SwiperSlide>
          <img src={protagonista1} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={protagonista1} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={protagonista1} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Protagonistas;
