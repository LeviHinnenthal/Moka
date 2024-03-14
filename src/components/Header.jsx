import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { header } from "../data";
import cart from "../assets/Img/cart.svg";
import Nav from "../components/Nav";
import NavMobile from "./NavMobile";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

const Header = () => {
  //state

  const [navMobile, setNavMobile] = useState(false);


  //destructure
  const { logo } = header;
  return (
    <>
      <div className="h-[80px] w-screen"></div>
      <header
        className={`bg-primary-200/20 backdrop-blur-[10px] py-[16px] w-[98%] rounded-xl fixed top-[1vw] z-30 left-[1vw] px-[20px] lg:px-[80px] transition-all duration-300`}
      >
        <div className="container flex justify-between mx-auto items-center">
          <Link to="/" className="rounded-2xl overflow-hidden">
            <img className="h-[30px]" src={logo} alt="" />
          </Link>

          <Nav />

          <Link className="mr-10 md:mr-0" to="/cart">
            <img src={cart} alt="Icono carrito" />
          </Link>

          <div
            onClick={() => setNavMobile(!navMobile)}
            className="lg:hidden absolute right-4"
          >
            {navMobile ? (
              <RiCloseFill className="text-black text-3xl cursor-pointer" />
            ) : (
              <RiMenu4Fill className="text-black text-3xl cursor-pointer" />
            )}
          </div>

          <NavMobile navMobile={navMobile} />
        </div>
      </header>
    </>
  );
};

export default Header;
