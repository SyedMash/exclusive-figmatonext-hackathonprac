import React from "react";
import { BiDownArrowAlt } from "react-icons/bi";

const Heading = () => {
  return (
    <div className="w-dvw h-[48px] bg-black text-white flex items-center justify-center relative">
      <h1 className="text-xs font-bold md:text-xl">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      </h1>
      <div className="hidden xl:flex items-center gap-1 absolute right-48 cursor-pointer">
        <h1>English</h1>
        <BiDownArrowAlt />
      </div>
    </div>
  );
};

export default Heading;
