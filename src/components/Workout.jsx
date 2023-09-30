import React from "react";
import { nav, workouts } from "../data";

import WorkoutSlider from "./WorkoutSlider";

const Workout = () => {
  //dest
  const { title, icon } = workouts;

  return (
    <div id="Workouts" className="w-full bg-white -mt-1">
      <section className="pb-14  mx-auto">
        <div className="section-title-group max-w-[540px] mx-auto px-4 lg:px0"  data-aos="fade-up" data-aos-delay="200">
          <img src={icon} alt="workoutImg" />
          <h2 className="h2 section-title">
            {title} <span className="text-primary-200">.</span>
          </h2>
        </div>
        <div>
          <WorkoutSlider />
        </div>
      </section>
    </div>
  );
};

export default Workout;
