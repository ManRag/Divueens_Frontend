import React, { useState, useEffect } from 'react';
import './Carousel.css'; 
import CustomSlide from '../CustomSlide/CustomSlide';

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000); 

    return () => clearInterval(interval); 
  }, [slides.length]);

  return (
    <div className="carousel mb-[2%] relative overflow-x-hidden">
      <div className="slide-container flex transition-[transform_0.5s_ease-in-out]" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <CustomSlide
            key={index}
            background={slide.background}
            image={slide.image}
            text={slide.text}
            buttonText={slide.buttonText}
            buttonLink={slide.buttonLink}
          />
        ))}
      </div>
      {/* <div className="dot-container flex relative items-center justify-center b-[1rem] mb-8">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === currentSlide ? 'dot current bg-lighterColor rounded-2xl w-[2vw] h-[0.8vh]' : 'dot w-[1.4vw] h-[2.9vh] bg-darkestColor rounded-[50%] my-1 mx-[0.1vw] cursor-pointer transition-[background-color_0.3s_ease]'}
            onClick={() => setCurrentSlide(index)}
          >
          </span>
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
