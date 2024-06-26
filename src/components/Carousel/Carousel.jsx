import React, { useState, useEffect } from 'react';
import './Carousel.css'; 
import CustomSlide from '../CustomSlide/CustomSlide';

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  //   }, 4000); 

  //   return () => clearInterval(interval); 
  // }, [slides.length]);

  return (
    <div className="carousel">
      <div className="slide-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
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
      <div className="dot-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === currentSlide ? 'dot current' : 'dot'}
            onClick={() => setCurrentSlide(index)}
          >
          </span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
