import React from "react";
import EnviosMap from "../assets/Img/mapEnvios.png";
const Envios = () => {
  return (
    <div id="mapa" className="flex my-40 items-start w-[90%] flex-col mx-auto justify-center">
      <h2 className="text-[35px] font-medium text-[#51534A] mb-20">
        Zonas de envío
      </h2>
      <img className="ml-[20%] w-[80%]" src={EnviosMap} alt="Envios Map Image" />
    </div>
  );
};

export default Envios;
