import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Navigation = ({ changeSlide }) => {
  return (
    <div className="navigation">
      <button className="nav prev" onClick={() => changeSlide(-1)}><FaAngleLeft /></button>
      <button className="nav next" onClick={() => changeSlide(1)}><FaAngleRight /></button>
    </div>
  );
};

export default Navigation;
