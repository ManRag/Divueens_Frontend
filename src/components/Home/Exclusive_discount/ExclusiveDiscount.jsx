import React from "react";
import {
  bestsellers_1,
  example,
  freebies,
  loreal,
  mamaearth,
  output,
  prototype,
  suntan,
} from "../../../assets/assets";
import "./ExclusiveDiscount.css";

const ExclusiveDiscount = () => {
  return (
    <section className="Exclusive_Discount overflow-hidden font-semibold bg-[#edede9] flex justify-center items-center flex-wrap mt-[30px] ">
      <div className="heading">
        <hr className="hr-left" />
        <h2>Exclusive Discounts</h2>
        <hr className="hr-right" />
      </div>

      <div className="container flex justify-center items-center flex-wrap mt-[30px]">
        <div className="card w-[600px] m-[10px] mx-[60px] ">
          <a href="/">
            <button className="border-none outline-none p-0 bg-transparent cursor-pointer">
              <img className="w-full h-auto block rounded-[20px] shadow-[2px_2px_3px_#808080]" src={suntan} alt="" />
            </button>
          </a>
        </div>
        <div className="card w-[600px] m-[10px] mx-[60px]">
          <a href="/">
            <button className="border-none outline-none p-0 bg-transparent cursor-pointer">
              <img className="w-full h-auto block rounded-[20px] shadow-[2px_2px_3px_#808080]" src={loreal} alt="" />
            </button>
          </a>
        </div>
        <div className="card w-[600px] m-[10px] mx-[60px]">
          <a href="/">
            <button className="border-none outline-none p-0 bg-transparent cursor-pointer">
              <img className="w-full h-auto block rounded-[20px] shadow-[2px_2px_3px_#808080]" src={mamaearth} alt="" />
            </button>
          </a>
        </div>
        <div className="card w-[600px] m-[10px] mx-[60px]">
          <a href="/">
            <button className="border-none outline-none p-0 bg-transparent cursor-pointer">
              <img className="w-full h-auto block rounded-[20px] shadow-[2px_2px_3px_#808080]" src={bestsellers_1} alt="" />
            </button>
          </a>
        </div>
      </div>
      <br />
      <div className="heading">
        <hr className="hr-left" />
        <h2>Freebies of the Month</h2>
        <hr className="hr-right" />
      </div>
      <br />
      <div className="banner-image">
        <img className="w-full h-auto rounded-[.6rem]" src={freebies} alt="" />
      </div>
    </section>
  );
};

export default ExclusiveDiscount;
