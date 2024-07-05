import React from "react";
import { FaRegStar, FaStar, FaStarHalfStroke } from "react-icons/fa6";

const Item = ({ image }) => {
  const buyNow = (productName, productPrice) => {
    alert(`You have selected ${productName} for Rs. ${productPrice}/-`);
  };

  return (
    <div className="item">
      <img src={image} alt="Beauty Combo" />
      <div className="Addedpart">
        <div>
          <div className="star icon">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfStroke className="star" />
            <FaRegStar className="star" />
          </div>
          <p style={{ fontFamily: "Montserrat" }}>
            Beauty Combo
            <br />
            <span style={{ fontWeight: 600, fontSize: 16 }}>
              Rs. 8400/- <br />
            </span>
            <span style={{ fontWeight: 300, fontSize: 12, color: "lightgrey" }}>
              <del>Rs. 12000/-</del>
            </span>
            <span style={{ fontWeight: 300, fontSize: 12, color: "green" }}>
              30%{" "}
            </span>
          </p>
        </div>
        <button
          onClick={() => buyNow("Beauty Combos", 6000)}
          style={{ fontFamily: "Montserrat" }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Item;
