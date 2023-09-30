import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import "swiper/css/effect-cards";

import "../workoutSlider.css";

import { community } from "../data";

import { Navigation, Pagination, FreeMode } from "swiper/modules";

const CommunitySlider = () => {
  var mobile = "";
  if (window.innerWidth < 768) {
    mobile = "cards";
  }
  //destr
  const { testimonials } = community;
  return (
    <Swiper
      effect={mobile}
      grabCursor={true}
      modules={[EffectCards, FreeMode]}
      freeMode={false}
      className="mySwiper"
      slidesPerView={1}
      loop={true}
      spaceBetween={20}
      breakpoints={{
        768: {
          freeMode: true,
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 32,
        },
      }}
    >
      {testimonials.map((testimonial, id) => {
        //destr
        const { name, image, message } = testimonial;

        return (
          <SwiperSlide key={id} className="">
            <div className="">
              <img
                src={image}
                alt="imageTestimonial"
                className="rounded-lg w-full object-cover"
              />
            </div>
            <div className="text-white absolute bottom-1 z-10 p-4">
              <div className="testimonial font-light text-sm text-center">
                {message}
              </div>
              <div className="name text-center font-normal flex items-center justify-center mt-2">
                <span className="mr-2 text-primary-200 text-xl">~</span>
                {name}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CommunitySlider;
