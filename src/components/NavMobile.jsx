import React from "react";
import { nav } from "../data";

const NavMobile = ({ navMobile, setSignUp, setLogin }) => {

  return (
    <nav
      className={`${
        navMobile ? "min-h-screen" : "min-h-0"
      } lg:hidden w-full bg-neutral-500 fixed top-0 left-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all h-0`}
    >
      <ul className="h-full w-full px-[30px} flex flex-col items-center pt-40">
        {nav.map((item, id) => {
          return (
            <li
              key={id}
              className="text-white font-medium text-3xl py-2 hover:text-primary-200"
            >
              <a href={item.href}> {item.name}</a>
            </li>
          );
        })}
      </ul>
      <div className="-mt-32 justify-center flex ">
        <button className="btn btn-lg text-white border mx-2" onClick={() => setLogin(true)}>Login</button>
        <button className="btn btn-lg text-white btn-primary mx-2" onClick={() => setSignUp(true)}>Sign up</button>
      </div>
    </nav>
  )
};

export default NavMobile;
