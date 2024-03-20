import React from "react";
import Acordion from "./Acordion";

const Faq = () => {
  return (
    <div id="preguntas-frecuentes" className="bg-white w-[90%] mx-auto mb-20">
      <h2 className="text-[35px] font-medium mb-10 text-[#51534A]">
        Preguntas frecuentes
      </h2>

      <div>
        <Acordion />
      </div>
    </div>
  );
};

export default Faq;
