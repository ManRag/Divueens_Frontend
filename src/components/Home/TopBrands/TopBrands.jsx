import React from "react";
import styles from "./TopBrands.module.css";
import { brands } from "../../../assets/assets";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const TopBrands = () => {
  return (
    <>
      <div className={`${styles["brand-section"]} mt-8`}>
        <div className="heading">
          <hr className="hr-left" />
          <h2>Top Brands</h2>
          <hr className="hr-right" />
        </div>

<div className={`${styles["brand-background"]} flex mt-[4px] py-[20px] px-0`}>
{/* -------------- */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={`${styles["bar"]} mySwiper flex items-center gap-[30px] w-[100%] py-0 px-[40px] my-[25px] mx-auto relative overflow-hidden scroll-smooth snap-start pb-[10px]`}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

{/* -------------- */}
            {/* {brands.map((item, index) => (
              <div key={index} className={`${styles["card"]} min-w-[24%] h-full bg-[#fff] border-[2px] border-[#e9acb6] py-[5px] px-0 text-[#fff] flex items-center justify-center text-center snap-start`}>
                <img className="max-w-full max-h-[10vh] object-contain flex justify-center items-center w-auto h-auto p-0 box-border snap-start" src={item} alt="" />
              </div>
            ))} */}
          </div>

        <div className={`${styles["heading-2"]} mt-8 font-['Montserrat'] relative p-5 text-center`}>
          <div className={`${styles["spot"]} absolute w-[25px] h-[25px] bg-white rounded-[50%] blur-[10px] ${styles["spot1"]}`}></div>
          <div className={`${styles["spot"]} absolute w-[25px] h-[25px] bg-white rounded-[50%] blur-[10px] ${styles["spot2"]}`}></div>
          <div className={`${styles["spot"]} absolute w-[25px] h-[25px] bg-white rounded-[50%] blur-[10px] ${styles["spot3"]}`}></div>
          <h1 className="font-semibold text-[2rem]">Get Div coins on every order</h1>
        </div>
      </div>
    </>
  );
};

export default TopBrands;
