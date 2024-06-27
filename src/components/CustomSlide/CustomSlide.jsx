import React from 'react';
import './CustomSlide.css';
import logo from '../../assets/logo.svg'

const CustomSlide = ({ background, image, text, buttonText, buttonLink }) => {
  return (
    <div className="custom-slide" style={{ backgroundImage: `url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.in%2FAttraction_Review-g295424-d10687494-Reviews-IMG_Worlds_of_Adventure-Dubai_Emirate_of_Dubai.html&psig=AOvVaw0CB4OLLXCmwjXstOlcLqwu&ust=1719567718715000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjtmYy_-4YDFQAAAAAdAAAAABAE)` }}>
      <div className="slide-content">
        <div className="slide-text-content">
        <div className="logo-container">
            <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.in%2FAttraction_Review-g295424-d10687494-Reviews-IMG_Worlds_of_Adventure-Dubai_Emirate_of_Dubai.html&psig=AOvVaw0CB4OLLXCmwjXstOlcLqwu&ust=1719567718715000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjtmYy_-4YDFQAAAAAdAAAAABAE alt="logo" className="slide-logo" />
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
