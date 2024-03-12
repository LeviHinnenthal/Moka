import React from "react";
import Logo from "../assets/Img/logo.png";
import { Link } from "react-router-dom";
import Home from "../pages/home";
const Footer = () => {
  return (
    <a href="/home" className="flex justify-between items-center w-full pt-14 md:pt-3 py-3 px-4 md:py-6 md:px-10 items-cente">
      <img src={Logo} alt="" />
      <div className="text-white text-xs md:text-lg">
        All rights reserved. Gymme 2021.
      </div>
    </a>
  );
};

export default Footer;
