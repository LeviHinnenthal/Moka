import { React, useState } from "react";
import { nav } from "../data";
import Scroll from "react-scroll";
import { Link } from "react-scroll";
import Join from "./Join";

const Nav = () => {


 

  return (
    <nav className="hidden lg:flex ">
      <ul className="flex ">
        <Link
          className="text-white mx-4 font-medium cursor-pointer hover:text-primary-200"
          to="Home"
          smooth
          duration={500}
        >
          Home
        </Link>
        <Link
          className="text-white mx-4 font-medium cursor-pointer hover:text-primary-200"
          to="About"
          smooth
          duration={500}
        >
          About
        </Link>
        <Link
          className="text-white mx-4 font-medium cursor-pointer hover:text-primary-200"
          to="Workouts"
          smooth
          duration={500}
        >
          Workouts
        </Link>
        <Link
          className="text-white mx-4 font-medium cursor-pointer hover:text-primary-200"
          to="Pricing"
          smooth
          duration={500}
        >
          Pricing
        </Link>
        <Link
          className="text-white mx-4 font-medium cursor-pointer hover:text-primary-200"
          to="Community"
          smooth
          duration={500}
        >
          Community
        </Link>
        <Link
          className="text-white mx-4 font-medium cursor-pointer hover:text-primary-200"
          to="Faq"
          smooth
          duration={500}
        >
          FAQ
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
