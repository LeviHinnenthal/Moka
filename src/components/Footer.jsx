import React from "react";
import Logo from "../assets/Img/logo.png";
import { Link } from "react-router-dom";
import Home from "../pages/home";
const Footer = () => {
  return (
    <a href="/" className="flex justify-between border-t-1 items-center w-full  md:py- 6-3 px-4 md:py-6 md:px-10 items-cente">
      <img src={Logo} alt="Logo footer" className="rounded-[100%] w-20"/>
      <div className="text-black text-xs md:text-lg">
        All rights reserved. Gymme 2021.
      </div>
    </a>
  );
};

export default Footer;
