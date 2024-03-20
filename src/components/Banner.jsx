import React from "react";
import bannerHome from "../assets/Img/bannerHome.png";
import viewProducts from "../assets/Img/viewProductsButton.png";
import bannerhome2 from "../assets/Img/bannerHome2.png";

const Banner = () => {
  return (
    <>
      {" "}
      <section
        id="Home"
        className="ml-[5vw] w-[95vw] mt-14 mb-20  justify-between flex relative max-h-[500px]"
      >
        <div className="justify-center buttonContainer flex flex-col itema-start w-1/4 m">
          <p className="text-[35px] font-medium text-[#51534A]">
            {" "}
            Despertá a tu <br /> persona especial <br />
            con un detalle <br />
            original
          </p>
          <img
            className="cursor-pointer w-[250px] mt-10"
            src={viewProducts}
            alt="View products"
          />
        </div>
        <img className="w-2/4 content-around object-cover" src={bannerHome} />
      </section>

      <div className="banner2 container w-[90%] mx-auto relative">
        <img src={bannerhome2} alt="Banner home 2" />
      </div>
    </>
  );
};

export default Banner;
