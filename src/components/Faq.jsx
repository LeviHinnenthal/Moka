import React from "react";
import Acordion from "./Acordion";
import { faq } from "../data";

const Faq = () => {
  const { icon, title, accordions } = faq;
  return (
    <div id="Faq" className="bg-white -mt-1 pb-32">
      <div className="max-w-[1000px] mx-auto min-h-[600px] bg-faq bg-no-repeat bg-center bg-contain">
        <div
          className="section-title-group max-w-[540px] py-[30px] mb-0 mx-auto px-4 lg:px0"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="h2 section-title">
            {title} <span className="text-primary-200">.</span>
          </h2>
        </div>
        <div>
          <Acordion accordions={accordions} />
        </div>
      </div>
    </div>
  );
};

export default Faq;
