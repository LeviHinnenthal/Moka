import React from "react";
import { pricing } from "../data";

import PlanList from "./PlanList";

const Pricing = () => {
  //destr
  const { title, icon, plans } = pricing;

  return (
    <div id="Pricing" className="w-full bg-white -mt-1 pb-8">
      <div className="container mx-auto px-6 md:px-14 ">
        <div className="section-title-group max-w-[540px] mx-auto px-4 lg:px0">
          <img src={icon} alt="workoutImg" />
          <h2 className="h2 section-title">
            {title} <span className="text-primary-200">.</span>
          </h2>
        </div>
        <PlanList plans={plans} className=""/>
      </div>
    </div>
  );
};

export default Pricing;
