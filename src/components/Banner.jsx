import React from "react";
import { banner } from "../data";

const Banner = () => {
  //destructuring
  const { titlePart1, titlePart2, subtitle, textBtn } = banner;
  return (
    <section id="Home" className="mx-auto container bg-neutral-500 h-[790px]">
      <div className="mx-auto h-full">
        <div className="flex items-center h-full relative -space-x-48 lg:-space-x-24">
          <div className="text-white flex-1 z-10 px-6 lg:pl-0 lg:ml-[80px]">
            <h1
              className="h1 text-white mb-8"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {titlePart1} <br />{" "}
              <span className="text-primary-200">{titlePart2}</span>
            </h1>
            <p
              className="max-w-[415px] text-body-md lg:text-body-lg mb-8"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {subtitle}
            </p>
            <button
              className="btn btn-sm lg:btn-lg btn-secondary"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              {textBtn}
            </button>
          </div>

          <div
            className="image bg-blue-300 w-full h-full bg-banner bg-cover bg-right absolute right-0 lg:relative lg:bg-center bg-no-repeat flex-1"
            data-aos="fade-down"
            data-aos-delay="900"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
