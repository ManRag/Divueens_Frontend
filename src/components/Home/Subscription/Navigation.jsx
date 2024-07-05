import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Navigation = ({ changeSlide }) => {
  return (
    <div className="navigation">
      <button className="nav prev group absolute -left-5 top-0 z-20 flex h-full cursor-pointer 
      items-center justify-center focus:outline-none" data-slide-previous="" onClick={() => changeSlide(-1)}>
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-black">
          <FaAngleLeft className="h-6 w-6 font-black text-white dark:text-gray-800" />
        </span>
      </button>
      <button className="nav next group absolute -left-5 top-0 z-20 flex h-full cursor-pointer 
      items-center justify-center focus:outline-none" data-slide-previous="" onClick={() => changeSlide(1)}>
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-black">
          <FaAngleRight className="h-6 w-6 font-black text-white dark:text-gray-800" />
        </span>
      </button>
    </div>
  );
};

export default Navigation;
