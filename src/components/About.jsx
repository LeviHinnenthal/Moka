import React from "react";
import { about } from "../data";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import logo from "../assets/Img/logo.png";
const About = () => {
  //destructure about data
  const { icon, title, subtitle, subtitle1, subtitle2, link } = about;

  return (
    <section id="About" className="bg-white w-full py-20">
      <div className="container mx-auto flex flex-row flex-wrap items-start px-6 md:px-16 lg:w-[1000px]">
        <div className="section-title-group w-full">
          <h2 className="h2 section-tittle ">
            Nosotros <span className="text-primary-200">.</span>
          </h2>
        </div>
        <img src={logo} alt="Nosotros" className="w-[25%] mr-[5%]" />
        <p className="pb-8 text-lg w-[70%]">
          {subtitle1}
          {subtitle2}
        </p>
      </div>
    </section>
  );
};

export default About;
