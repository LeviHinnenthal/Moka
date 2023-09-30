import React, { useState, useEffect } from "react";

import { header } from "../data";
import Login from "./Login";
import Signup from "./Signup";

import Nav from "../components/Nav";
import NavMobile from "./NavMobile";

import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

const Header = () => {
  //state
  const [isActive, setIsActive] = useState(false);

  const [navMobile, setNavMobile] = useState(false);

  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);

  //scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  });

  //destructure
  const { logo, btnSignupText, btnLoginText } = header;
  return (
    <header
      className={`${
        isActive ? "bg-neutral-500 py-[16px]" : "bg-transparent py-[20px]"
      } fixed z-30 left-0 right-0 px-[20px] lg:px-[80px] transition-all duration-300`}
    >
      <div
        className={`loginContainer w-screen h-screen left-0 top-0 absolute bg-[#000000b8] ${
          login ? "flex items-center justify-center" : "hidden"
        }`}
      >
      
        <Login setLogin={setLogin} setSignUp={setSignUp} />
      </div>

      <div
        className={`singupContainer w-screen h-screen left-0 top-0 absolute bg-[#000000b8] ${
          signUp ? "flex items-center justify-center" : "hidden"
        }`}
      >
        

        <Signup setLogin={setLogin} setSignUp={setSignUp} />
      </div>

      <div className="container flex justify-between mx-auto items-center">
        <a href="">
          <img className="h-[30px]" src={logo} alt="" />
        </a>

        <Nav />

        <div className="hidden lg:flex space-x-4">
          <button
            onClick={() => setLogin(!login)}
            className="btn btn-md text-white border rounded-md px-6 "
          >
            {btnLoginText}
          </button>
          <button
            onClick={() => setSignUp(!signUp)}
            className=" btn btn-md btn-primary px-6 py-2"
          >
            {btnSignupText}
          </button>
        </div>

        <div
          onClick={() => setNavMobile(!navMobile)}
          className="lg:hidden absolute right-4"
        >
          {navMobile ? (
            <RiCloseFill className="text-primary-200 text-3xl cursor-pointer" />
          ) : (
            <RiMenu4Fill className="text-primary-200 text-3xl cursor-pointer" />
          )}
        </div>

        <NavMobile navMobile={navMobile} setLogin={setLogin} setSignUp={setSignUp} />
      </div>
    </header>
  );
};

export default Header;
