import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { pricing } from "../data";

const PlanList = ({ plans }) => {
  //index state
  const [index, setIndex] = useState(0);

  return (
    <div
      className="flex flex-col items-center lg:flex-row"
      data-aos="fade-up"
      data-aos-offset="200"
    >
      {plans.map((plan, currentIndex) => {
        //dest
        const { name, price, list, delay } = plan;

        return (
          <div
            onClick={() => setIndex(currentIndex)}
            key={currentIndex}
            className={`${
              currentIndex === index
                ? "bg-neutral-500 text-white scale-105"
                : "bg-neutral-400/10 text-neutral-500"
            } items-center py-10 space-between justify-center transition-all cursor-pointer flex flex-col mx-6 my-4 w-full md:flex-row md: justify-evenly lg:w-full min-h-[400px] rounded-md p-8`}
          >
            <div className="priceContainer">
              <div className={`${currentIndex === index ? 'bg-white text-black' : 'bg-black text-white'} text-center rounded py-1 px-4 text-md mb-6`}>{name}</div>
              <div className="text-center text-5xl font-semibold flex items-end md:justify-center" >
                {price} <span className="text-lg ">$</span>
              </div>
              <div className="font-light text-sm text-center">/month</div>
            </div>
            <div className="featuresAndButton flex flex-col items-center">
              <div className="features my-8 md:mt-0">
                {list.map((item, idx) => {
                  return (
                    <div key={idx} className="flex items-center my-2">
                      <BsCheckCircleFill className="mr-2" />
                      {item.name}
                    </div>
                  );
                })}
              </div>
              <button
                className={`${
                  currentIndex === index ? "btn-primary" : "btn-secondary"
                } btn btn-lg`}
              >
                JOIN NOW
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlanList;
