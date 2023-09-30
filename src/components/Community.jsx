import React from "react";
import { community } from "../data";

import CommunitySlider from "./CommunitySlider";

const Community = () => {
  // destr
  const { icon, title, testimonials } = community;
  return (
    <div id="Community" className="w-full bg-white -mt-1 pt-10 lg:pt-18">
      <section className="section mx-auto">
        <div
          className="section-title-group"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img src={icon} alt="workoutImg" />
          <h2 className="h2 section-title">
            {title} <span className="text-primary-200">.</span>
          </h2>
        </div>
        <div className="mx-12 md:mx-0">
          <CommunitySlider testimonials={testimonials} className="" />
        </div>
      </section>
    </div>
  );
};

export default Community;
