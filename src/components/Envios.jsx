import React from "react";
import EnviosMap from "../assets/Img/mapEnvios.png";
const Envios = () => {
  return (
    <div id="mapa" className="flex mt-6 sm:my-40 items-start w-[90%] flex-col mx-auto justify-center">
      <h2 className="sm:text-[35px] text-[20px] font-medium text-[#51534A] mt-10 sm:mt-0 mb-4 sm:mb-10">
        Zonas de envío
      </h2>
      <img className="mx-auto w-[100%]" src={EnviosMap} alt="Envios Map Image" />
    </div>
  );
};

export default Envios;
