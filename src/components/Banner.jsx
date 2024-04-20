import React from "react";
import bannerHome from "../assets/Img/bannerHome.png";
import bannerHomeM from "../assets/Img/bannerHomeM.png";
import bannerhome2 from "../assets/Img/bannerHome2.png";
import { Link } from "@nextui-org/react";

const Banner = () => {
  return (
    <>
      <Link
        to="productos"
        className="ml-[5vw] w-[90vw] mt-14 sm:mb-20 cursor-pointer justify-between flex relative"
      >
        <img
          className="w-full h-full content-around object-cove hidden sm:flex"
          src={bannerHome}
        />

<img
          className="w-full h-full content-around object-cover flex sm:hidden"
          src={bannerHomeM}
        />
      </Link>
      <div className="banner2 container w-[90%] mx-auto relative hidden sm:flex">
        <img src={bannerhome2} alt="Banner home 2" />
        
      </div>
    </>
  );
};

export default Banner;
