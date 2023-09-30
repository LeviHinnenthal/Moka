import React from "react";

import { workouts } from "../data";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "../workoutSlider.css";

import { Navigation, Pagination, FreeMode } from "swiper/modules";

const WorkoutSlider = () => {
  //destr
  const { progrmas } = workouts;
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={16}
      freeMode={false}
      // navigation={true}
      loop={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
          freeMode:true,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 32,
        },
      }}
      modules={[Navigation, FreeMode]}
      className="workoutSlider"
    >
      {progrmas.map((program, id) => {
        //destr
        const { image, name } = program;

        return (
          <SwiperSlide
            className="max-w-[400px] max-h-[400px] relative"
            key={id}
          >
            <img className="w-full h-full object-cover rounded-md" src={image} alt="" />
            <div className="absolute left-[20px] bottom-[20px] z-1 bg-white text-black px-4 py-1 rounded-md">
              <div>{name}</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkoutSlider;
