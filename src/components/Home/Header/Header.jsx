import React from 'react';
import './Header.css'; 
// import { Link } from 'react-router-dom';
import SaleHeader from '../SaleHeader/SaleHeader';
import NavBar from '../Navbar/Navbar';
import Carousel from '../Carousel/Carousel';

import logo from '../../../assets/CarouselImages/heart.png';
import Image1 from '../../../assets/CarouselImages/Image1.png';
import Image6 from '../../../assets/CarouselImages/Image6.png';
import Image3 from '../../../assets/CarouselImages/Image3.png';
import Image4 from '../../../assets/CarouselImages/Image4.png';
import Image5 from '../../../assets/CarouselImages/Image5.png';
function Header() {
  const slides = [
    // {
    //   background: 'linear-gradient(114deg, rgba(251,189,187,1) 0%, rgba(233,172,182,1) 12%, rgba(248,226,234,1) 100%)',
    //   image: Image1,
    //   text: `
    //   <span class="logoANDname">
    //   <img src=${logo} alt="Additional Content" class="additional-image w-[13%]" />
    //     <span class="bold-text1 font-bold font-['Montserrat'] text-[2.5vw]">ELITE<span class="italic-text">Pro</span></span>
    //     </span>
    //     <div class="new-line"><span class="bold-text2 font-bold font-['Montserrat'] text-[2vw]"> FULL ON BEAUTY, FULL ON SAVINGS!</div></span>
    //     Membership Cost Free Gift + Free Shipping & Much More!  
    //   `,
    //   buttonText: 'Join Now',
    //   buttonLink: '#slide1'
    // },
    {
      background: 'linear-gradient(158deg, rgba(251,189,187,1) 22%, rgba(248,226,234,1) 54%, rgba(255,91,177,1) 91%, rgba(253,181,213,1) 96%)',
      image: Image6,
      text:   `
      <span class="logoANDname flex items-center">
      <img src=${logo} alt="Additional Content" class="additional-image w-[13%]" />
        <span class="bold-text1 font-bold font-['Montserrat'] text-[2.5vw]">ELITE<span class="italic-text">Pro</span></span>
        </span>
        <div class="new-line"><span class="bold-text2 font-bold font-['Montserrat'] text-[2vw]"> FULL ON BEAUTY, FULL ON SAVINGS!</div></span>
        Membership Cost Free Gift + Free Shipping & Much More!  
      `,
      buttonText: 'Join Now',
      buttonLink: '#slide2'
    },
    {
      background: 'linear-gradient(21deg, rgba(219,206,234,1) 0%, rgba(212,226,252,1) 29%, rgba(192,176,239,1) 52%, rgba(235,175,237,1) 70%, rgba(252,200,236,1) 100%)',
      image: Image3,
      text:  `
      <span class="logoANDname flex items-center">
      <img src=${logo} alt="Additional Content" class="additional-image w-[13%]" />
        <span class="bold-text1 font-bold font-['Montserrat'] text-[2.5vw]">ELITE<span class="italic-text">Pro</span></span>
        </span>
        <div class="new-line"><span class="bold-text2 font-bold font-['Montserrat'] text-[2vw]"> FULL ON BEAUTY, FULL ON SAVINGS!</div></span>
        Membership Cost Free Gift + Free Shipping & Much More!  
      `,
      buttonText: 'Join Now',
      buttonLink: '#slide3'
    },
    {
      background: 'linear-gradient(204deg, rgba(251,189,187,1) 22%, rgba(248,226,234,1) 69%, rgba(254,174,210,0.9865196078431373) 76%, rgba(253,181,213,1) 96%)',
      image:Image4,
      text:   `
      <span class="logoANDname flex items-center">
      <img src=${logo} alt="Additional Content" class="additional-image w-[13%]" />
        <span class="bold-text1 font-bold font-['Montserrat'] text-[2.5vw]">ELITE<span class="italic-text">Pro</span></span>
        </span>
        <div class="new-line"><span class="bold-text2 font-bold font-['Montserrat'] text-[2vw]"> FULL ON BEAUTY, FULL ON SAVINGS!</div></span>
        Membership Cost Free Gift + Free Shipping & Much More!  
      `,
      buttonText: 'Join Now',
      buttonLink: '#slide3'
    },
    {
      background: 'linear-gradient(321deg, rgba(251,189,187,1) 22%, rgba(242,200,215,1) 49%, rgba(254,174,210,1) 76%)',
      image:Image5,
      text:  `
      <span class="logoANDname flex items-center">
      <img src=${logo} alt="Additional Content" class="additional-image w-[13%]" />
        <span class="bold-text1 font-bold font-['Montserrat'] text-[2.5vw]">ELITE<span class="italic-text">Pro</span></span>
        </span>
        <div class="new-line"><span class="bold-text2 font-bold font-['Montserrat'] text-[2vw]"> FULL ON BEAUTY, FULL ON SAVINGS!</div></span>
        Membership Cost Free Gift + Free Shipping & Much More!  
      `,
      buttonText: 'Join Now',
      buttonLink: '#slide3'
    }
  ];

  return (
    <div className="app-home">
      <header>
        <SaleHeader />
        <NavBar />
        <Carousel slides={slides} />
      </header>
      <main className='mainhome'>
        
      </main>
    </div>
  );
}

export default Header;
