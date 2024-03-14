import { React, useState } from "react";
import { Link } from "react-scroll";
import keyframesCss from "../../src/keyframesCss.css";


const Nav = () => {


 

  return (
    <nav className="hidden lg:flex ">
      <ul className="flex ">
        <Link
          className="text-black mx-4 font-medium cursor-pointer line-effect relative hover:text-black"
          to="productos"
          smooth
          duration={500}
        >
          Productos
        </Link>
        <Link
          className="text-black mx-4 font-medium line-effect relative cursor-pointer hover:text-black"
          to="nosotros"
          smooth
          duration={500}
        >
          Nosotros
        </Link>
        <Link
          className="text-black mx-4 font-medium line-effect relative cursor-pointer hover:text-black"
          to="testimonios"
          smooth
          duration={500}
        >
          Testimonios
        </Link>
        <Link
          className="text-black mx-4 font-medium line-effect relative cursor-pointer hover:text-black"
          to="mapa"
          smooth
          duration={500}
        >
          Mapa
        </Link>
        <Link
          className="text-black mx-4 font-medium line-effect relative cursor-pointer hover:text-black"
          to="preguntas-frecuentes"
          smooth
          duration={500}
        >
          Preguntas frecuentes
        </Link>
      
      </ul>
    </nav>
  );
};

export default Nav;
