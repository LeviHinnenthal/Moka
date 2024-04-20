import React from "react";
import { Link } from "react-scroll";
const NavMobile = ({ navMobile, setNavMobile }) => {
  return (
    <nav
      className={`${
        navMobile ? "min-h-[60vh]" : "min-h-0"
      } lg:hidden w-full bg-[#FEECDD] fixed rounded-b-[20px] top-0 left-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all h-0`}
    >
      <ul className="h-full w-full px-[30px} flex flex-col items-center pt-32">
        <Link onClick={() => setNavMobile(false)} to="productos"
          className="text-black font-medium text-xl py-2 hover:text-gray"
        >
          <a href="item"> Productos</a>
        </Link>

        <Link onClick={() => setNavMobile(false)} to="nosotros"
          className="text-black font-medium text-xl py-4 hover:text-gray"
        >
          <a href="item"> Nosotros</a>
        </Link>

        <Link onClick={() => setNavMobile(false)} to="opiniones"
          className="text-black font-medium text-xl py-4 hover:text-gray"
        >
          <a href="item"> Opiniones</a>
        </Link>

        <Link onClick={() => setNavMobile(false)} to="mapa"
          className="text-black font-medium text-xl py-4 hover:text-gray"
        >
          <a href="item"> Mapa</a>
        </Link>

        <Link onClick={() => setNavMobile(false)} to="preguntas-frecuentes"
          className="text-black font-medium text-xl py-4 hover:text-gray"
        >
          <a href="item"> Preguntas frecuentes</a>
        </Link>
      </ul>
    </nav>
  );
};

export default NavMobile;
