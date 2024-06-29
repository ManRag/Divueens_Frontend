import React, { useEffect, useState } from 'react';
import styles from './BestSeller.module.css';
import background_prod, { imageUrls } from '../../assets/assets';
import { GrPrevious, GrNext } from 'react-icons/gr';
console.log(background_prod,'background')

const trending = [
    ...imageUrls
].slice(0,8)
const newArrivals = [
    ...imageUrls
].slice(8,16)

const BestSeller = () => {
    
    const [selectedCategory, setSelectedCategory] = useState('trending');
    // slider
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [offset, setOffset] = useState(0)

    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    // buttons
    const [isClicked, setIsClicked] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);

    // Hover effect
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hoveredImageIndex, setHoveredImageIndex] = useState(null);


    //    slider begin
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            console.log(screenWidth, 'screen width')
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [screenWidth]);

    
    // const totalImages = imageUrls.length;
    const imagesToShow = Math.floor((screenWidth - 240) / 210); //extra(140,100,10) -100 for margin each image takes approximately 200px, extra 10px was added to ensure we get to hte end of the image other we'll get halfImage and a gap of 140px is reduced from the screen width

    // console.log(maxOffset, 'maxoffset', imagesToShow)
    // const maxOffset = 100 * (totalImages - imagesToShow);
    const totalImages=[trending.length, newArrivals.length]


    const nextSlide = () => {
        if(selectedCategory==="trending"){
            const maxOffset = 100 * (totalImages[0] - imagesToShow);

            setOffset(prevOffset => {
                const newOffset = prevOffset + 100;
                return newOffset > maxOffset ? 0 : newOffset;
            });
            console.log(maxOffset, imagesToShow, ' state;', offset)

        }else{
            const maxOffset = 100 * (totalImages[1] - imagesToShow);
            setOffset(prevOffset => {
                const newOffset = prevOffset + 100;
                return newOffset > maxOffset ? 0 : newOffset;
            });
            console.log(maxOffset, imagesToShow, ' state;', offset)


        }
    };

    const prevSlide = () => {
        if(selectedCategory==="trending"){
            const maxOffset = 100 * (totalImages[0] - imagesToShow);
            setOffset(prevOffset => {
                const newOffset = prevOffset - 100;
                return newOffset < 0 ? 0 : newOffset;
            });
        }else{
            const maxOffset = 100 * (totalImages[1] - imagesToShow);
            setOffset(prevOffset => {
                const newOffset = prevOffset - 100;
                return newOffset < 0 ? 0 : newOffset;
            });
        };
    }

    // slider end

    // top buttons
    const HandleBtnClicked = (cat) => {
        setSelectedCategory(cat)

        // console.log(e.target)
        setIsClicked2(false)
        setIsClicked(true)
    }
    const HandleBtnClicked2 = (cat) => {
        setSelectedCategory(cat)
        setIsClicked(false)
        // console.log(e.target)
        setIsClicked2(true)
    }
    // top buttons end


    // hover functionality
    const hoverStartHandler = (index) => {
        console.log("hoverstart", index, styles.hover)
        setHoveredIndex(index)
    }
    const hoverEndHandler = () => {
        console.log("hoverend")
        setHoveredIndex(null)
    }

    const scaleImagehandler = (index) => {

        setHoveredImageIndex(index)

    }
    const endScaleImagehandler = (index) => {

        setHoveredImageIndex(null)



    }

    // select category logic
    const renderProducts = () => {
        if (selectedCategory === "trending") {

            return (trending.map((image, index) => (

                <div onMouseLeave={hoverEndHandler} onMouseEnter={() => { hoverStartHandler(index) }} key={index}
                    style={{
                        transform: `translateX(-${offset}%) `,
                    }}
                    className={`${styles["product-card"]}   ${hoveredIndex === index ? styles.hover : ''}`}>
                    <div className={styles["image-wrapper"]} style={{ overflow: "hidden" }}>
                        <img
                            // onMouseLeave={hoverEndHandler} onMouseEnter={()=>{hoverStartHandler(index)}}
                            onMouseEnter={() => { scaleImagehandler(index) }}
                            onMouseLeave={endScaleImagehandler}
                            style={{
                                transform: hoveredImageIndex === index ? "scale(1.2)" : "scale(1)",
                                transition: "transform 0.3s ease"
                            }} src={image} alt={`product ${index + currentIndex}`}
                        />
                    </div>
                    <div className={styles["product-info"]}>
                        <h3>MAC' Face Mask</h3>
                        <p>Rs. 5000/-</p>
                        <button className={styles["buy-now"]}>Buy Now</button>
                    </div>
                </div>
            )))

        }
        else if (selectedCategory === "newArrivals") {

            return (newArrivals.map((image, index) => (

                <div onMouseLeave={hoverEndHandler} onMouseEnter={() => { hoverStartHandler(index) }} key={index}
                    style={{
                        transform: `translateX(-${offset}%) `,
                    }}
                    className={`${styles["product-card"]}   ${hoveredIndex === index ? styles.hover : ''}`}>
                    <div className={styles["image-wrapper"]} style={{ overflow: "hidden" }}>
                        <img
                            // onMouseLeave={hoverEndHandler} onMouseEnter={()=>{hoverStartHandler(index)}}
                            onMouseEnter={() => { scaleImagehandler(index) }}
                            onMouseLeave={endScaleImagehandler}
                            style={{
                                transform: hoveredImageIndex === index ? "scale(1.2)" : "scale(1)",
                                transition: "transform 0.3s ease"
                            }} src={image} alt={`product ${index + currentIndex}`}
                        />
                    </div>
                    <div className={styles["product-info"]}>
                        <h3>MAC' Face Mask</h3>
                        <p>Rs. 5000/-</p>
                        <button className={styles["buy-now"]}>Buy Now</button>
                    </div>
                </div>
            )))

        }
    }

    return (
        <>

            <div className={styles["heading"]}>
                <hr className={styles["hr-left"]} />
                <h2>Best Seller</h2>
                <hr className={styles["hr-right"]} />
            </div>
            <div className={styles["subheading"]}>
                <p>Your Cosmetics and Skincare Products</p>
            </div>
            <div className={`${styles["slideBtn"]} ${styles["bestseller_container"]}`}>
                <button onClick={() => { HandleBtnClicked("newArrivals") }}
                    style={{
                        backgroundColor: isClicked ? '#FF5BB1' : '#ffff',
                        color: isClicked ? '#fff' : '#000',
                    }} className={styles["first"]}>New Arrivals</button>
                <button onClick={() => { HandleBtnClicked2("trending") }}
                    style={{
                        backgroundColor: isClicked ? '#ffff' : '#FF5BB1',
                        color: isClicked ? '#000' : '#fff',
                    }} className={styles["second"]}>Trending Now</button>
            </div>
            <div 
            className={styles['products']}>

                <div className={styles["product-container"]} >

                   {renderProducts()}

                </div>
                <div className={styles['controllers']}>
                    <button onClick={prevSlide}><GrPrevious /></button>
                    <button onClick={nextSlide}><GrNext /></button>

                </div>
            </div>
            {/* <div className={styles["see-all"]}>
                <button>See All</button>
            </div> */}

        </>


    );
};

export default BestSeller;
