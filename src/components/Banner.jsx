import React from "react";
import bannerHome from "../assets/Img/moka2.jpg";

const Banner = () => {
  return (
    <section
      id="Home"
      className="mx-auto bg-neutral-500 relative -mt-[80px] h-[80vh] overflow-hidden"
    >
      <div className="mx-auto h-full">
        <div className="buttonContainer absolute bottom-10 flex justify-center w-full">
          <button
            className="btn btn-sm lg:btn-lg bg-white text-black"
            data-aos="fade-down"
            data-aos-delay="700"
          >
            Ver productos
          </button>
        </div>
        <img className="w-full h-[80vh] object-cover top-0 " src={bannerHome} />
      </div>
    </section>
  );
};

export default Banner;
