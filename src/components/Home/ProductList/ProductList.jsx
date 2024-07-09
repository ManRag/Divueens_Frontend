import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom'
import Filter from './Filter'
import CardItem from './CardItem';
import DropDown from './DropDown';

const ProductList = () => {

    const [isCategory, setcategory] = useState(false);
    const [isPrice, setPrice] = useState(false);
    const [isReview, setReview] = useState(false);
    const [isColor, setColor] = useState(false);
    const [isMaterial, setMaterial] = useState(false);
    const [isOffer, setOffer] = useState(false);

    const [isPrices, setPrices] = useState(false);

    const handleCate = () => {
        setcategory(!isCategory)
    }
    const handlePrice = () => {
        setPrice(!isPrice)
    }
    const handleReview = () => {
        setReview(!isReview)
    }
    const handleColor = () => {
        setColor(!isColor)
    }
    const handleMaterial = () => {
        setMaterial(!isMaterial)
    }
    const handleOffer = () => {
        setOffer(!isOffer)
    }

    const handlePrices = () => {
        setPrices(!isPrices)
    }

    const dropdown = [
        {
            id: 1,
            name: 'Category',
            func: handleCate,
            isOpen: isCategory,
            options: ['option1', 'option2']
        },
        {
            id: 2,
            name: 'Price',
            func: handlePrice,
            isOpen: isPrice,
            options: ['option1', 'option2']
        },
        {
            id: 3,
            name: 'Review',
            func: handleReview,
            isOpen: isReview,
            options: ['option1', 'option2']
        },
        {
            id: 4,
            name: 'Color',
            func: handleColor,
            isOpen: isColor,
            options: ['option1', 'option2']
        },
        {
            id: 5,
            name: 'Material',
            func: handleMaterial,
            isOpen: isMaterial,
            options: ['option1', 'option2']
        },
        {
            id: 6,
            name: 'Offer',
            func: handleOffer,
            isOpen: isOffer,
            options: ['option1', 'option2']
        },

    ]

    return (
        <>
            <div className='flex flex-col items-center w-full h-full'>
                {/* Home > Skin */}
                <div className='flex flex-col gap-8 w-full px-[3rem] mb-4'>
                    <div className='flex items-center'>
                        <ol className="inline-flex items-center gap-3">
                            <li className='inline-flex items-center'>
                                <Link to={'/'} className='inline-flex items-center tracking-tighter text-lg font-medium'>
                                    Home
                                </Link>
                            </li>
                            <IoIosArrowForward size={22} />
                            <li className='inline-flex items-center'>
                                <Link to={'/products'} className='inline-flex items-center tracking-tighter text-lg font-medium'>
                                    Skin care
                                </Link>
                            </li>
                        </ol>
                    </div>

                    <DropDown />

                </div>

                {/* Filters and Cards */}
                <div className='flex mt-8'>
                    {/* Filters */}
                    {/* Commented out the filters because where to keep the filter in small screen */}
                    {/* <div className='w-[25%]'>
                        <Filter />
                    </div> */}

                    {/* Cards */}
                    <div className='flex flex-col items-center lg:w-[75%] lg:mr-10'>
                        <div className="makeup flex flex-col justify-between w-full pl-4 md:px-4 md:flex-row">
                            <div className='flex items-center gap-2'>
                                <span className="a font-semibold text-[1.3rem] text-gray-600">MakeUp</span>
                                <IoIosArrowForward size={22} />
                                <span className="aa font-semibold text-[1.3rem] text-black">Lipstick</span>
                            </div>
                            <div className="prodline flex items-center mt-4 gap-5 md:mt-0">
                                <div className="show text-sm md:text-[1.1rem] text-gray-600">Showing 1-10 of 100 Products</div>
                                <div className="sortby md:text-[18px]">
                                    <label for="sort" className='text-gray-600 text-sm'>Sort by: </label>
                                    <select className="select bg-transparent border-none text-sm md:text-[16px]" name="products" id="sort">
                                        <option value="a" selected>Most popular</option>
                                        <option value="b">b</option>
                                        <option value="c">c</option>
                                        <option value="d">d</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Cards*/}
                        <CardItem />

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList