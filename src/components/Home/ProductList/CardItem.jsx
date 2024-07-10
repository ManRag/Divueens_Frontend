import React, { useState } from 'react'
// import { Lipstick } from '../../../assets/assets'
import productDetails from './ProductListItemData'
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


const CardItem = ({ item }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const lastPage = Math.ceil(item.length / 12)
    const [likedCards, setLikedCards] = useState({});

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleLike = (id) => {
        setLikedCards((prevLikedCards) => ({ ...prevLikedCards, [id]: !prevLikedCards[id] }));
    };

    const renderImages = () => {
        const startIndex = (currentPage - 1) * 12;
        const endIndex = startIndex + 12;
        const currentPageImages = item.slice(startIndex, endIndex);
        return (
            <div className='grid gap-x-4 gap-y-8 grid-cols-[repeat(2,_0.6fr)] md:gap-x-6 md:grid-cols-[repeat(3,_0.6fr)] xl:grid-cols-[repeat(4,_0.6fr)]'>
                {currentPageImages.map((p) => {
                    return <div key={p.id} className=''>
                        <Link to={'/products'} className="group relative mb-2 block md:h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                            <img src={p.image} alt='image' className="h-full w-full object-center transition duration-200 group-hover:scale-110" />

                            <div className="absolute left-0 top-0 right-0 px-3 py-1.5 flex items-center justify-between text-white">
                                <p className=" text-[0.5rem] text-rose-500 bg-white px-2 rounded-full lg:text-[1rem]" > {p.discount} </p>
                                <div className='text-[25px] text-rose-600 bg-white p-2 rounded-full' onClick={() => handleLike(p.id)}>
                                    {likedCards[p.id] ? <FaHeart /> : <FaRegHeart />}

                                </div>
                            </div>
                        </Link>

                        <div className='relative h-36 md:h-32'>
                            <a href="#" className="hover:text-gray-800 tracking-tighter mb-1 transition duration-100 font-semibold text-[0.8rem] lg:text-lg">{p.name} - {p.category} - {p.shade} - {p.material} - {p.brands}</a>
                            <div className='flex items-center'>
                                <div className="text-[#ffa200] flex items-center">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <p className='ml-5'>{p.rating} / <span className='text-[#00000077]'>5</span></p>
                            </div>
                            <div className="flex items-end justify-between gap-2 absolute bottom-0 lg:-bottom-2 left-0 right-0">
                                <span className="font-semibold text-[1rem] md:text-base lg:text-lg">₹ {p.price}</span>
                                <button className='bg-rose-600 text-white md:w-[120px] rounded-full text-[0.8rem] px-2 py-1 md:p-1 lg:text-base'>Add To Cart</button>
                            </div>
                        </div>

                    </div>
                })}
            </div>
        );
    };


    return (
        <div className='w-full m-4'>
            {renderImages()}
            <div className="flex my-10 items-center justify-around">

                <button className="border p-2 px-12 border-gray-400 rounded-xl flex max-sm:px-4" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    Previous
                </button>

                <p className=" text-[20px] mt-1">
                    {currentPage} of {lastPage}
                </p>

                <button className="border p-2 px-12 border-gray-400 rounded-xl max-sm:px-4 flex" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === lastPage}>
                    Next
                    <svg className="h-6 w-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>

            </div>
        </div>
    )
}

export default CardItem
