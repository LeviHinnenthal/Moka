import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import cart from "../assets/Img/cart.png";
import cartM from "../assets/Img/cartM.png";
import Nav from "../components/Nav";
import NavMobile from "./NavMobile";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import logo from "../assets/Img/logo.svg";
import ig from "../assets/Img/ig.png";
const Header = () => {
  //state

  const [navMobile, setNavMobile] = useState(false);

  return (
    <>
      <div className="h-[90px] w-screen"></div>
      <header className="w-full fixed top-0 bg-[#FEECDD] z-10 h-[90px] flex">
        <div className="container w-[90%] flex justify-between mx-auto items-center">
          <div
            onClick={() => setNavMobile(!navMobile)}
            className="lg:hidden absolute left-4"
          >
            {navMobile ? (
              <RiCloseFill className="text-black text-3xl cursor-pointer" />
            ) : (
              <RiMenu4Fill className="text-black text-3xl cursor-pointer" />
            )}
          </div>
          <Link to="/" className=" overflow-hidden absolute left-2/4 -translate-x-2/4 sm:left-0 sm:-translate-x-0 sm:relative">
            <img className="h-16" src={logo} alt="Logo" />
          </Link>

          <Nav />

          <div className="iconsRight flex gap-2">
            <Link
              className="mr-10 md:mr-0 hidden sm:flex"
              to="https://www.instagram.com/desayunosmoka/?hl=es"
              target="blank"
            >
              <img className="h-[50px] mr-4" src={ig} alt="Icono carrito" />
            </Link>

            <Link className="sm:mr-10 md:mr-0 absolute sm:relative right-2 top-6 sm:top-0" to="/cart">
              <img className="h-[50px] hidden sm:flex" src={cart} alt="Icono carrito" />
              <img className="h-[40px] flex sm:hidden" src={cartM} alt="Icono carrito" />

            </Link>
          </div>

          <NavMobile navMobile={navMobile} setNavMobile={setNavMobile} />
        </div>
      </header>
    </>
  );
};

export default Header;
