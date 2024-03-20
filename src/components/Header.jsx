import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import cart from "../assets/Img/cart.png";
import Nav from "../components/Nav";
import NavMobile from "./NavMobile";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import logo from "../assets/Img/logo.png";
import ig from "../assets/Img/ig.png";
const Header = () => {
  //state

  const [navMobile, setNavMobile] = useState(false);

  return (
    <>
      <div className="h-[90px] w-screen"></div>
      <header className="w-full fixed top-0 bg-[#F5DDC3] z-10 h-[90px] flex">
        <div className="container w-[90%] flex justify-between mx-auto items-center">
          <Link to="/" className="rounded-[100%] overflow-hidden">
            <img className="h-[55px]" src={logo} alt="Logo" />
          </Link>

          <Nav />

          <div className="iconsRight flex gap-2">
            <Link className="mr-10 md:mr-0" to="/cart">
              <img className="h-[55px] " src={ig} alt="Icono carrito" />
            </Link>

            <Link className="mr-10 md:mr-0" to="/cart">
              <img className="h-[55px] " src={cart} alt="Icono carrito" />
            </Link>
          </div>

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
