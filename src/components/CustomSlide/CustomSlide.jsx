import React from 'react';
import './CustomSlide.css';
import logo from '../../assets/logo.svg'

const CustomSlide = ({ background, image, text, buttonText, buttonLink }) => {
  return (
    <div className="custom-slide" style={{ backgroundImage: `url(${background})` }}>
      <div className="slide-content">
        <div className="slide-text-content">
        <div className="logo-container">
            <img src={logo} alt="logo" className="slide-logo" />
          </div>
        <div className="slide-text" dangerouslySetInnerHTML={{ __html: text }}></div>
          <a href={buttonLink} className="slide-button">{buttonText}</a>
        </div>
        <img src={image} alt="slide content" className="slide-image" />
      </div>
    </div>
  );
};

export default CustomSlide;
