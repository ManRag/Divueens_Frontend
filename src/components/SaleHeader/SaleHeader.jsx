import React from 'react';
import { MdStar } from 'react-icons/md'; 
import './SaleHeader.css';

const SaleHeader = () => {
  const saleText = "Sale Live ";
  let repeatCount = 20; 

  if (window.innerWidth <= 600) { 
    repeatCount = 15; 
  }

  const repeatedTextArray = new Array(repeatCount).fill(saleText);

  return (
    <header className="sale-header">
      <div className="sale-text">
        <div className="marquee">
          {repeatedTextArray.map((text, index) => (
            <span key={index} className="sale-item">
              <span className="sale-live-text">{text}</span> 
              <MdStar className="sale-icon" />
            </span>
          ))}
          {repeatedTextArray.map((text, index) => (
            <span key={index + repeatCount} className="sale-item">
              <span className="sale-live-text">{text}</span> 
              <MdStar className="sale-icon" />
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default SaleHeader;
