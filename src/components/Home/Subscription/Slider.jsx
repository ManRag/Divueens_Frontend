import React, { useState } from 'react';
import Slide from './Slide';
import Navigation from './Navigation';
import Dots from './Dots';
import {
  sub_1,
  sub_2,
  sub_3,
  sub_4,
} from '../../../assets/assets'
const slidesData = [
  [sub_1, sub_2, sub_3, sub_4],
  [sub_1, sub_2, sub_3, sub_4],
  [sub_1, sub_2, sub_3, sub_4],
  [sub_1, sub_2, sub_3, sub_4],
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (direction) => {
    setCurrentSlide(
      (prevSlide) => (prevSlide + direction + slidesData.length) % slidesData.length
    );
  };

  return (
    <div className="slider relative w-full max-w-[1200px] m-auto overflow-hidden py-[20px] px-0">
      <div
        className="slides flex transition-[0.2s] hover:cursor-pointer"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {slidesData.map((slide, index) => (
          <Slide key={index} images={slide} />
        ))}
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
