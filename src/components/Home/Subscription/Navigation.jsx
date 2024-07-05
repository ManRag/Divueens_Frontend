import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Navigation = ({ changeSlide }) => {
  return (
    <div className="navigation absolute w-full top-1/2 -translate-y-1/2 flex justify-between">
      <button className="nav p-[5px] flex items-center justify-center border-none rounded-[50%] bg-white prev ml-[5px] shadow-[1px_0px_3px_#444]" onClick={() => changeSlide(-1)}><FaAngleLeft /></button>
      <button className="nav p-[5px] flex items-center justify-center border-none rounded-[50%] bg-white next mr-[5px] shadow-[-1px_0px_3px_#444]" onClick={() => changeSlide(1)}><FaAngleRight /></button>
    </div>
  );
};

export default Navigation;
