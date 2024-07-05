import React from 'react';
import './CustomSlide.css';


const CustomSlide = ({ background, image, text, buttonText, buttonLink }) => {
  return (
    <div className="custom-slide min-w-full" style={{ background }}>
      <div className="slide-content flex items-center justify-between m-auto w-[70%]">
        <div className="slide-text-content w-1/2 mt-[2vh] mb-[3vh]">
        <div className="slide-text text-[2.2vw] font-['Montserrat'] mb-[2vh]" dangerouslySetInnerHTML={{ __html: text }}></div>
          <a href={buttonLink} className="slide-button py-[0.5vw] px-[1vw] bg-black text-white no-underline rounded-[0.5vw]">{buttonText}</a>
        </div>
        <img src={image} alt="slide content" className="slide-image h-[40vh]" />
      </div>
    </div>
  );
};

export default CustomSlide;
