import React from "react";
import { FaRegUser } from "react-icons/fa";
import { LuWallet } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";

const TopNavBar: React.FC = () => {
  return (
    <>
      <div className="bg-white flex justify-between px-3 items-center p-3">
        <div className="flex items-center space-x-5">
          <RxHamburgerMenu />
          <p className=" font-sans text-2xl font-bold text-sky-500">FUN88</p>
        </div>
        <div className="flex items-center space-x-3">
          <LuWallet className="text-slate-500 text-xl" />
          <p className=" font-sans text-lg font-bold text-sky-500">$1990.6</p>
          <div className=" border-l border-sky-500 pl-3">
            <FaRegUser className=" text-sky-500 text-xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavBar;
