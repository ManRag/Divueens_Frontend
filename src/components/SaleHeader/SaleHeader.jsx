import React from 'react';
import { MdStar } from 'react-icons/md'; 
import './SaleHeader.css';

const SaleHeader = () => {
  const saleText = "Sale Live ";
  let repeatCount = 20; 
  // if (window.innerWidth <= 600) { 
  //   repeatCount = 15; 
  // }

  const repeatedTextArray = new Array(repeatCount).fill(saleText);

  return (
    <header className="sale-header">
      <h1 className="sale-text">
        {repeatedTextArray.map((text, index) => (
          <span key={index} className="sale-item">
            
            <span className="sale-live-text">{text}</span> 
            {/* &nbsp; */}
            <MdStar className="sale-icon" />
            {/* &nbsp; */}
          </span>
        ))}
      </h1>
    </header>
  );
};
export default SaleHeader;
