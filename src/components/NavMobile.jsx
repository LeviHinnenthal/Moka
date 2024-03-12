import React from "react";
import { nav } from "../data";

const NavMobile = ({ navMobile }) => {
  return (
    <nav
      className={`${
        navMobile ? "min-h-[90vh]" : "min-h-0"
      } lg:hidden w-full bg-primary-200 fixed rounded-b-[20px] top-0 left-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all h-0`}
    >
      <ul className="h-full w-full px-[30px} flex flex-col items-center pt-36">
        {nav.map((item, id) => {
          return (
            <li
              key={id}
              className="text-black font-medium text-3xl py-2 hover:text-gray"
            >
              <a href={item.href}> {item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
