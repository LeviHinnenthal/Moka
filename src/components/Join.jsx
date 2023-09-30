import React from "react";
import { join } from "../data";

const Join = () => {
  //dest
  const { title, subtitle, image, btnText } = join;
  return (
    
    <div id="Join" className="container ml-0 md:mx-auto md:section-title-group">
      <div className="left -mt-20 w-4/5 md:w-auto">
        <img src={image} alt="" />
      </div>
      <div className="right -mt-20 ml-6 md:ml-0 w-4/5 md:max-w-[350px] md:w-auto">
        <p className="text-5xl font-bold text-white">
          Wanna join <span className="text-primary-200 ">&</span>
          <br />
          have fun?
        </p>
        <p className="text-white mt-2">{subtitle}</p>
        <button className="btn btn-lg btn-primary mt-6">{btnText}</button>
      </div>
    </div>
  );
};

export default Join;
