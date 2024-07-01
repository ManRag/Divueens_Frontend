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
    <section className="Exclusive_Discount">
      <div className="heading">
        <hr className="hr-left" />
        <h2>Exclusive Discounts</h2>
        <hr className="hr-right" />
      </div>

      <div className="container">
        <div className="card">
          <a href="/">
            <button>
              <img src={suntan} alt="" />
            </button>
          </a>
        </div>
        <div className="card">
          <a href="/">
            <button>
              <img src={loreal} alt="" />
            </button>
          </a>
        </div>
        <div className="card">
          <a href="/">
            <button>
              <img src={mamaearth} alt="" />
            </button>
          </a>
        </div>
        <div className="card">
          <a href="/">
            <button>
              <img src={bestsellers_1} alt="" />
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
        <img src={freebies} alt="" />
      </div>
    </section>
  );
};

export default ExclusiveDiscount;
