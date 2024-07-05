import React from "react";
import { FaRegStar, FaStar, FaStarHalfStroke } from "react-icons/fa6";

const Item = ({ image }) => {
  const buyNow = (productName, productPrice) => {
    alert(`You have selected ${productName} for Rs. ${productPrice}/-`);
  };

  return (
    <div className="item text-center flex flex-col items-center justify-center m-[20px] box-border rounded-[5px] py-[5px] bg-white transition duration-[0.3s] ease-in-out mx-[20px] shadow-[0px_1px_2px_#444] hover:scale-[1.05] hover:z-[2]">
      <img className="w-[90%] h-auto rounded-[5px] mx-[2px] mt-[5px] duration-[1s] ease-in-out" src={image} alt="Beauty Combo" />
      <div className="Addedpart">
        <div className="flex flex-col items-center justify-center">
          <div className="star text-[18px] text-[#ffa200] icon flex items-center mt-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfStroke className="star text-[18px] text-[#ffa200]" />
            <FaRegStar className="star text-[18px] text-[#ffa200]" />
          </div>
          <p className="my-[10px] mx-0 text-[18px]" style={{ fontFamily: "Montserrat" }}>
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
        <button className="bg-[#ff5bb1] text-[#fff] border-none py-[10px] px-[20px] cursor-pointer rounded-[5px] hover:bg-[#feaed2]"
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
