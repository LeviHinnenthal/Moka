import React from "react";
import { about } from "../data";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const About = () => {
  //destructure about data
  const { icon, title, subtitle, subtitle1, subtitle2, link } = about;

  return (
    <section id="About" className="bg-white w-full py-20">
      <div className="container mx-auto flex flex-col items-start px-6 md:px-16 lg:w-[1000px]">
        <div
          className="section-title-group"
          data-aos="fade-down"
          data-aos-delay="500"
        >
          <img src={icon} alt="IconAbout" />
          <h2 className="h2 section-tittle">
            {title} <span className="text-primary-200">.</span>
          </h2>
        </div>
        <p className="pb-8 text-lg" data-aos="fade-down" data-aos-delay="100">
          {subtitle1}
        </p>
        <p className="pb-8 text-lg" data-aos="fade-down" data-aos-delay="600">
          {subtitle2}
        </p>
        <div className="flex text-black items-center"  data-aos="fade-down"
              data-aos-delay="700">
          <a href="#" className="font-bold uppercase mr-2 hover:mr-6 transition-all">
            {link}
          </a>
          <IoIosArrowDroprightCircle className="text-2xl" />
        </div>
      </div>
    </section>
  );
};

export default About;
