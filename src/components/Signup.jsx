import { React, useState } from "react";

import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "../../src/nextUIComponents/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../src/nextUIComponents/EyeSlashFilledIcon";

const Signup = ({setLogin, setSignUp}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  // const [loginVisible, setLoginVisible] = useState(false);

  return (
    <>
      <div className="allContainer h-full w-5/6 md:w-full max-w-[400px] max-h-[400px] ">
      <span
          onClick={() =>  setSignUp(false)}
          className=" text-white cursor-pointer absolute ml-4 mt-4 "
        >
          X
        </span>
        <div className="loginContainer flex flex-col items-center mb-6 bg-neutral-500 w-full h-full p-6 rounded-lg justify-evenly">
          <h2 className="text-center textl-2xl text-white font-regular">
            Sign up
          </h2>
          <Input
            isClearable
            type="email"
            label="Email"
            variant="bordered"
            placeholder="Enter your email"
            defaultValue="junior@nextui.org"
            onClear={() => console.log("input cleared")}
            className="max-w-xs"
          />
          <Input
            label="Password"
            variant="bordered"
            placeholder="Enter your password"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className="max-w-xs"
          />
          <Input
            label="Password"
            variant="bordered"
            placeholder="Confirm password"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className="max-w-xs"
          />
          <button className="btn btn-primary h-10 w-full rounded-md max-w-xs">
            Register
          </button>
        </div>
        <button
          onClick={() => {
            setLogin(true);
            setSignUp(false);
          }}
          className="btn btn-secondary h-12 w-full rounded"
        >
          I already have an account
        </button>
      </div>
    </>
  );
};

export default Signup;
