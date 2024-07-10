import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import { Lipstick } from '../../../assets/assets';

const CardItem = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [liked, setLiked] = useState(false);

    const [images, setImages] = useState([
        {
            src: Lipstick,
            alt: 'image',
            text: 'Moisture Matte Long Stay Lipstick - 2g | Pink Lemonade',
            rating: 4,
            price: 500,
            discount: 30,
            //   hearted: true,
            stars: [true, true, true, true, false],
        },
        {
            src: Lipstick,
            alt: 'image',
            text: 'Moisture Matte Long Stay Lipstick - 2g | Pink Lemonade',
            rating: 5,
            price: 400,
            discount: 20,
            //   hearted: false,
            stars: [true, true, true, true, true],
        },
        {
            src: Lipstick,
            alt: 'image',
            text: 'Moisture Matte Long Stay Lipstick - 2g | Pink Lemonade',
            rating: 4,
            price: 500,
            discount: 30,
            stars: [true, true, true, true, false],
        },
        {
            src: Lipstick,
            alt: 'image',
            text: 'Moisture Matte Long Stay Lipstick - 2g | Pink Lemonade',
            rating: 5,
            price: 400,
            discount: 20,
            stars: [true, true, true, true, true],
        },
        {
            src: Lipstick,
            alt: 'image',
            text: 'Moisture Matte Long Stay Lipstick - 2g | Pink Lemonade',
            rating: 4,
            price: 500,
            discount: 30,
            stars: [true, true, true, true, false],
        },
        {
            src: Lipstick,
            alt: 'image',
            text: 'Moisture Matte Long Stay Lipstick - 2g | Pink Lemonade',
            rating: 5,
            price: 400,
            discount: 20,
            stars: [true, true, true, true, true],
        },
        {
            src: Lipstick,
            alt: 'image',
            text: 'Moisture Matte Long Stay Lipstick - 2g | Pink Lemonade',
            rating: 4,
            price: 500,
            discount: 30,
            stars: [true, true, true, true, false],
        },
        {
            src: Lipstick,
            alt: 'image',
            text: 'Moisture Matte Long Stay Lipstick - 2g | Pink Lemonade',
            rating: 3,
            price: 400,
            discount: 20,
            stars: [true, true, true, false, false],
        },
        {
            src: Lipstick,
            alt: 'image',
            text: 'Moisture Matte Long Stay Lipstick - 2g | Pink Lemonade',
            rating: 4,
            price: 500,
            discount: 30,
            stars: [true, true, true, true, false],
        },
        {
            src: Lipstick,
            alt: 'image',
            text: 'Moisture Matte Long Stay Lipstick - 2g | Pink Lemonade',
            rating: 5,
            price: 400,
            discount: 20,
            stars: [true, true, true, true, true],
        },
        {
            src: Lipstick,
            alt: 'image',
            text: 'Moisture Matte Long Stay Lipstick - 2g | Pink Lemonade',
            rating: 4,
            price: 500,
            discount: 30,
            stars: [true, true, true, true, false],
        },
        {
            src: Lipstick,
            alt: 'image',
            text: 'Moisture Matte Long Stay Lipstick - 2g | Pink Lemonade',
            rating: 1,
            price: 400,
            discount: 20,
            stars: [true, false, false, false],
        },
        {
            src: Lipstick,
            alt: 'image',
            text: 'Moisture Matte Long Stay Lipstick - 2g | Pink Lemonade',
            rating: 1,
            price: 400,
            discount: 20,
            stars: [true, false, false, false],
        },
        {
            src: Lipstick,
            alt: 'image',
            text: 'Moisture Matte Long Stay Lipstick - 2g | Pink Lemonade',
            rating: 1,
            price: 400,
            discount: 20,
            stars: [true, false, false, false],
        },
        {
            src: Lipstick,
            alt: 'image',
            text: 'Moisture Matte Long Stay Lipstick - 2g | Pink Lemonade',
            rating: 1,
            price: 400,
            discount: 20,
            stars: [true, false, false, false],
        },
        {
            src: Lipstick,
            alt: 'image',
            text: 'Moisture Matte Long Stay Lipstick - 2g | Pink Lemonade',
            rating: 1,
            price: 400,
            discount: 20,
            stars: [true, false, false, false],
        },
        {
            src: Lipstick,
            alt: 'image',
            text: 'Moisture Matte Long Stay Lipstick - 2g | Pink Lemonade',
            rating: 1,
            price: 400,
            discount: 20,
            stars: [true, false, false, false],
        },
        {
            src: Lipstick,
            alt: 'image',
            text: 'Moisture Matte Long Stay Lipstick - 2g | Pink Lemonade',
            rating: 1,
            price: 400,
            discount: 20,
            stars: [true, false, false, false],
        },
        // add more blocks here to increase no. of elements in the page
    ]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleLike = (index) => {
        const newImages = [...images];
        newImages[index].liked = !newImages[index].liked;
        setImages(newImages);
    };

    const renderImages = () => {
        const startIndex = (currentPage - 1) * 9;
        const endIndex = startIndex + 9;
        const currentPageImages = images.slice(startIndex, endIndex);
        return (
            <div className="grid grid-cols-2 gap-4 px-4 lg:grid-cols-3">
                {currentPageImages.map((image, index) => (
                    <div key={index} className="">
                        <div className="m-auto mt-4 rounded-2xl h-60 md:h-fit">
                            <img src={image.src} alt={image.alt} className="m-auto w-full h-full md:h-[30rem] object-cover" />
                        </div>
                        <p className="text-left text-[0.8rem] font-semibold my-2 mx-0 md:m-4 md:text-[20px]">{image.text}</p>
                        <div className="flex md:mb-4 md:ml-4">
                            <div className="star icon text-white">
                                {[...Array(5)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={`fa fa-star${image.stars[i] ? ' checked text-[#ffa200] ' : '-o text-white'} w-4 h-4 `}
                                    />
                                ))}
                            </div>
                            <div>
                                <p className="ml-4 text-sm md:text-base">{image.rating}/<span className="text-[#00000077] text-sm md:text-base">5</span></p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-2 md:ml-4">
                            <p className="text-[1rem] mt-[6px] font-medium md:text-[20px]">Rs {image.price}</p>
                            <button className="bg-rose-200 text-black font-semibold text-[0.7rem] w-[100px] p-2 rounded-full md:w-[140px] md:text-[1rem]">
                                Add To Cart
                            </button>
                        </div>
                        {image.discount > 0 && (
                            <div>
                                <p className="text-[15px] text-rose-500 absolute top-12 left-6 bg-white p-1 px-4 rounded-full max-md:text-[8px] max-md:top-[72px] max-md:left-5 max-md:px-3">
                                    {image.discount}% off
                                </p>
                            </div>
                        )}
                        <div>
                            <span
                                className={`text-[25px] max-md:text-[10px] max-md:top-[72px] max-md:right-5 text-rose-600 absolute top-12 right-6 bg-white p-2 rounded-full`}
                                onClick={() => handleLike(index)}
                            >
                                {image.liked ? (<FaHeart />) : (<FaRegHeart />)}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div>
            {renderImages()}
            <div className="flex my-10 items-center justify-around">

                <button className="border p-2 px-12 border-gray-400 rounded-xl flex max-sm:px-4" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    Previous
                </button>

                <p className=" text-[20px] mt-1">
                    {currentPage} of 3
                </p>

                <button className="border p-2 px-12 border-gray-400 rounded-xl max-sm:px-4 flex" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === 3}>
                    Next
                    <svg className="h-6 w-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>

            </div>

        </div>
    );
}

export default CardItem;