import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import bannerAbout from "../assets/Img/moka5.jpg";
import about1 from "../assets/Img/nuestraHistoria1.png";
import about2 from "../assets/Img/nuestraHistoria2.png";
import about3 from "../assets/Img/nuestraHistoria1.png";

const About = () => {
  return (
    <section id="nosotros" className="bg-white w-full py-20">
      <h2 className="text-[35px] mb-20 w-[90%] mx-auto font-medium text-[#51534A]">
        Nuestra historia
      </h2>

      <div className="aboutContainer w-full items-center flex flex-wrap">
        <img className="w-[30%]" src={about3} alt="Image about" />
        <p className="w-[50%] text-2xl font-light text-black mx-[10%] mb-20">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo con Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
          quam nihil molestiae consequatu Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatu
        </p>
      </div>

      <div className="aboutContainer w-full items-center flex flex-wrap">
        <p className="w-[50%] text-2xl font-light text-black mx-[10%] mb-20">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo con Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
          quam nihil molestiae consequatu Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatu
        </p>
        <img className="w-[30%]" src={about2} alt="Image about" />
      </div>
    </section>
  );
};

export default About;
