import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import bannerAbout from "../assets/Img/moka5.jpg";
import about1 from "../assets/Img/nuestraHistoria1.png";
import about2 from "../assets/Img/nuestraHistoria2.png";
import about3 from "../assets/Img/nuestraHistoria1.png";

const About = () => {
  return (
    <section id="nosotros" className="bg-white w-full py-10 sm:py-20">
      <h2 className="sm:text-[35px] w-fit text-[20px] font-medium text-[#51534A] mb-6 sm:mb-0 ml-6 sm:ml-[7vw]">
        Nuestra historia
      </h2>

      <div className="aboutContainer w-full items-center flex flex-wrap flex-col sm:flex-row">
        <img className="sm:w-[30%]" src={about3} alt="Image about" />
        <p className="w-[80%] sm:w-[50%] text-md sm:text-2xl font-light text-black mx-[10%] mb-10 sm:mb-20">
          Nuestra pasión por la por la comida combinada con el espíritu
          empresarial, el amor por los detalles y el deseo de hacer algo bueno
          en el mundo a dado como resultado esta brillante idea llamada Moka.
          Creando desayunos para regalar repartimos la mejor manera de comenzar
          el día. <br />
          <br />
          Desarrollamos un menú de desayunos variados que incluyen opciones para
          satisfacer todos los gustos y nos aseguramos que cada desayuno esté
          cuidadosamente empaquetado y presentado de manera hermosa, creando el
          regalo perfecto para cualquier ocasión.
        </p>
      </div>

      <div className="aboutContainer w-full items-center flex flex-wrap flex-col-reverse sm:flex-row">
        <p className="w-[80%] sm:w-[50%] text-md sm:text-2xl font-light text-black mx-[10%] sm:mb-20">
          Buscamos una forma única y deliciosa de sorprender. Desde parejas que
          celebran aniversarios hasta empresas que buscan reconocer a sus
          empleados y clientes, los desayunos de Moka son un regalo muy
          apreciado y sorprendente. <br />
          <br />
          Sabemos que estamos marcando la diferencia en la vida de las personas
          brindándoles momentos de alegría y conexión a través de la comida.
          Nuestra historia se convirtió en un ejemplo de cómo un sueño y una
          pasión pueden convertirse en una realidad exitosa.
        </p>
        <img className="sm:w-[30%]" src={about2} alt="Image about" />
      </div>
    </section>
  );
};

export default About;
