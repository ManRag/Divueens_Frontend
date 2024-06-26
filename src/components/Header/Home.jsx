import React from 'react';
import './Home.css'; 
// import { Link } from 'react-router-dom';
import SaleHeader from '../SaleHeader/SaleHeader';
import NavBar from '../Navbar/Navbar';
import Carousel from '../Carousel/Carousel'


function Home() {
  const slides = [
    {
      // background: '/Images/Background1.jpg',
      image: '../../assets/Images/Image1.png',
      text: `
        <span class="bold-text">ELITE<span class="italic-text">Pro</span>
        <div class="new-line"> FULL ON BEAUTY, FULL ON SAVINGS!</div></span>
        Membership Cost Free Gift + Free Shipping & Much More!  
      `,
      buttonText: 'Join Now',
      buttonLink: '#slide1'
    },
    {
      // background: '/Images/Background1.jpg',
      image: '../../assets/Images/Image2.jpg',
      text:  `
      <span class="bold-text">ELITE<span class="italic-text">Pro</span>
      <div class="new-line"> FULL ON BEAUTY, FULL ON SAVINGS!</div></span>
      Membership Cost Free Gift + Free Shipping & Much More!  
    `,
      buttonText: 'Join Now',
      buttonLink: '#slide2'
    },
    {
      // background: '/Images/Background1.jpg',
      image: '../../assets/Images/Image3.jpg',
      text:   `
      <span class="bold-text">ELITE<span class="italic-text">Pro</span>
      <div class="new-line"> FULL ON BEAUTY, FULL ON SAVINGS!</div></span>
      Membership Cost Free Gift + Free Shipping & Much More!  
    `,
      buttonText: 'Join Now',
      buttonLink: '#slide3'
    },
    {
      // background: '/Images/Background1.jpg',
      image: '../../assets/Images/Image4.jpg',
      text:   `
      <span class="bold-text">ELITE<span class="italic-text">Pro</span>
      <div class="new-line"> FULL ON BEAUTY, FULL ON SAVINGS!</div></span>
      Membership Cost Free Gift + Free Shipping & Much More!  
    `,
      buttonText: 'Join Now',
      buttonLink: '#slide3'
    },
    {
      // background: '/Images/Background1.jpg',
      image: '../../assets/Images/Image5.jpg',
      text:  `
      <span class="bold-text">ELITE<span class="italic-text">Pro</span>
      <div class="new-line"> FULL ON BEAUTY, FULL ON SAVINGS!</div></span>
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

export default Home;
