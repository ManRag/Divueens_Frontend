import React, { useState } from "react";
// import Item from "./Item";
// import Slide from './Slide';
import Navigation from "./Navigation";
import Dots from "./Dots";
import { sub_1, sub_2, sub_3, sub_4 } from "../../../assets/assets";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
const slidesData = [
  [
    {
      img: sub_1,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 4.5,
    },
    {
      img: sub_2,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_3,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 2.6,
    },
    {
      img: sub_4,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 5,
    },
  ],
  [
    {
      img: sub_1,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_2,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_3,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_4,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
  ],
  [
    {
      img: sub_1,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_2,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_3,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_4,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
  ],
  [
    {
      img: sub_1,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_2,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_3,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_4,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
  ],
];

const Item = ({ list }) => {
  const buyNow = (productName, productPrice) => {
    alert(`You have selected ${productName} for Rs. ${productPrice}/-`);
  };

  return (
    <div className="item slide snap-center w-full p-6 duration-1000 ease-in-out">
      <img src={list.img} alt="Beauty Combo" />
      <div className="Addedpart">
        <div>
          <div className="star icon">
            {[...Array(Math.floor(list.rating))].map((_, i) => (
              <FaStar key={i} />
            ))}
            {list.rating % 1 !== 0 ? (
              list.rating % 1 <= 0.5 ? (
                <FaRegStarHalfStroke />
              ) : (
                <FaRegStar />
              )
            ) : (
              <></>
            )}
            {[...Array(5 - Math.ceil(list.rating))].map((_, i) => (
              <FaRegStar key={i} />
            ))}
          </div>
          <p style={{ fontFamily: "Montserrat" }}>
            {list.name}
            <br />
            <span style={{ fontWeight: 600, fontSize: 16 }}>
              Rs. {list.price}/- <br />
            </span>
            <span style={{ fontWeight: 300, fontSize: 12, color: "lightgrey" }}>
              <del>Rs. {list.original_price}/-</del>
            </span>
            <span style={{ fontWeight: 300, fontSize: 12, color: "green" }}>
              {(list.price/list.original_price)*100}%
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

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (direction) => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide + direction + slidesData.length) % slidesData.length
    );
  };

  return (
    <div className="slider relative" data-slide-motion="static">
      <div
        className="slidesslides-container grid grid-flow-col auto-cols-max gap-4 overflow-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth touch-manipulation" data-slide-container=""
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {slidesData.map((slide) => slide.map((data, index) => <Item key={index} list={data} />))}
        {/* // <div key={index} className="slide snap-center w-full p-6 duration-1000 ease-in-out">
        // </div> */}
      </div>
      <Navigation changeSlide={changeSlide} />
      <Dots
        slidesCount={slidesData.length}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </div>
  );
};

export default Slider;
