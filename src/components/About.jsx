import React from "react";
import { about } from "../data";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import bannerAbout from "../assets/Img/moka5.jpg";

const About = () => {
  //destructure about data
  const { icon, title, subtitle, subtitle1, subtitle2, link } = about;

  return (
    <section id="About" className="bg-white w-full py-20">
      <div className="container mx-auto flex flex-row flex-wrap items-start px-6 md:px-16">
        <div className="section-title-group w-full">
          <h2 className="h2 section-tittle ">
            Nosotros <span className="text-primary-200">.</span>
          </h2>
        </div>
        <img src={bannerAbout} alt="Nosotros" className="w-[40%] mr-[5%]" />
        <p className="pb-8 text-lg w-[55%]">
          {subtitle1}
          {subtitle2}
        </p>
      </div>
    </section>
  );
};

export default About;
