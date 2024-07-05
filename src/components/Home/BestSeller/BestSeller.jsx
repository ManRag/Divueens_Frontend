import React, { useEffect, useState } from "react";
import styles from "./BestSeller.module.css";
import { background_prod, imageUrls } from "../../../assets/assets";
import { GrPrevious, GrNext } from "react-icons/gr";
import {
  FaAngleLeft,
  FaAngleRight,
  FaArrowsRotate,
  FaCartShopping,
  FaHeart,
  FaMagnifyingGlass,
  FaRegStar,
  FaRegStarHalfStroke,
  FaStar,
  FaStarHalf,
} from "react-icons/fa6";
// console.log(background_prod,'background')

const trending = [...imageUrls].slice(0, imageUrls.length / 2);
const newArrivals = [...imageUrls].slice(
  imageUrls.length / 2,
  imageUrls.length
);

const BestSeller = () => {
  const [selectedCategory, setSelectedCategory] = useState("trending");
  // slider
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [offset, setOffset] = useState(0);

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
      // console.log(screenWidth, 'screen width')
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  // const totalImages = imageUrls.length;
  const imagesToShow = Math.floor((screenWidth - 240) / 210); //extra(140,100,10) -100 for margin each image takes approximately 200px, extra 10px was added to ensure we get to hte end of the image other we'll get halfImage and a gap of 140px is reduced from the screen width

  // console.log(maxOffset, 'maxoffset', imagesToShow)
  // const maxOffset = 100 * (totalImages - imagesToShow);
  const totalImages = [trending.length, newArrivals.length];

  const nextSlide = () => {
    if (selectedCategory === "trending") {
      const maxOffset = 100 * (totalImages[0] - imagesToShow);

      setOffset((prevOffset) => {
        const newOffset = prevOffset + 100;
        return newOffset > maxOffset ? 0 : newOffset;
      });
      // console.log(maxOffset, imagesToShow, ' state;', offset)
    } else {
      const maxOffset = 100 * (totalImages[1] - imagesToShow);
      setOffset((prevOffset) => {
        const newOffset = prevOffset + 100;
        return newOffset > maxOffset ? 0 : newOffset;
      });
      // console.log(maxOffset, imagesToShow, ' state;', offset)
    }
  };

  const prevSlide = () => {
    if (selectedCategory === "trending") {
      const maxOffset = 100 * (totalImages[0] - imagesToShow);
      setOffset((prevOffset) => {
        const newOffset = prevOffset - 100;
        return newOffset < 0 ? 0 : newOffset;
      });
    } else {
      const maxOffset = 100 * (totalImages[1] - imagesToShow);
      setOffset((prevOffset) => {
        const newOffset = prevOffset - 100;
        return newOffset < 0 ? 0 : newOffset;
      });
    }
  };

  // slider end

  // top buttons
  const HandleBtnClicked = (cat) => {
    setSelectedCategory(cat);

    // console.log(e.target)
    setIsClicked2(false);
    setIsClicked(true);
  };
  const HandleBtnClicked2 = (cat) => {
    setSelectedCategory(cat);
    setIsClicked(false);
    // console.log(e.target)
    setIsClicked2(true);
  };
  // top buttons end

  // hover functionality
  const hoverStartHandler = (index) => {
    // console.log("hoverstart", index, styles.hover)
    setHoveredIndex(index);
  };
  const hoverEndHandler = () => {
    // console.log("hoverend")
    setHoveredIndex(null);
  };

  const scaleImagehandler = (index) => {
    setHoveredImageIndex(index);
  };
  const endScaleImagehandler = (index) => {
    setHoveredImageIndex(null);
  };

  // select category logic
  const renderProducts = () => {
    if (selectedCategory === "trending") {
      return trending.map((list, index) => {
        return (
          <>
            <div
              onMouseLeave={hoverEndHandler}
              onMouseEnter={() => {
                hoverStartHandler(index);
              }}
              key={index}
              style={{ transform: `translateX(-${offset}%)` }}
              className={`${styles["product-card"]} rounded-[10px] shadow-[0_4px_8px_#bbb] overflow-hidden my-[10px] mx-0 min-w-[300px] text-center transition-[0.3s_ease]   ${hoveredIndex === index ? styles.hover : ""
                }`}
            >
              <div className={styles["image-wrapper"]} style={{ overflow: "hidden" }}>
                <img className="w-full rounded-l-[10px]"
                  // onMouseLeave={hoverEndHandler} onMouseEnter={()=>{hoverStartHandler(index)}}
                  onMouseEnter={() => {
                    scaleImagehandler(index);
                  }}
                  onMouseLeave={endScaleImagehandler}
                  style={{
                    transform:
                      hoveredImageIndex === index ? "scale(1.2)" : "scale(1)",
                    transition: "transform 0.3s ease",
                  }}
                  src={list.Image}
                  alt={`product ${index + currentIndex}`}
                />
              </div>
              <div className={`${styles["cart-info"]} absolute left-[93%] top-1/2 -translate-x-[50%] -translate-y-[50%] flex flex-col justify-around w-[min-content] h-[40%] p-[10px] cursor-auto z-10 transition-[.3s]`}>
                <button title="Add to cart" className="border-none bg-none no-underline text-[#ddd] cursor-pointer translate-x-[100px] hover:text-[#FF5BB1]" style={{ transition: '.2s' }}>
                  <FaCartShopping />
                </button>
                <a title="Add to Wishlist" className="border-none bg-none no-underline text-[#ddd] cursor-pointer translate-x-[100px] hover:text-[#FF5BB1]" style={{ transition: '.3s' }}>
                  <FaHeart />
                </a>
                <a title="Quick View" className="border-none bg-none no-underline text-[#ddd] cursor-pointer translate-x-[100px] hover:text-[#FF5BB1]" style={{ transition: '.4s' }}>
                  <FaMagnifyingGlass />
                </a>
                <a title="Compare" className="border-none bg-none no-underline text-[#ddd] cursor-pointer translate-x-[100px] hover:text-[#FF5BB1]" style={{ transition: '.5s' }}>
                  <FaArrowsRotate />
                </a>
              </div>
              <div className={`${styles["product-info"]} flex justify-evenly items-center rounded-b-[10px] text-[13px] font-bold`}>
                <div className="flex flex-col my-[10px] mx-0 items-start">
                  <div className={`${styles["rating"]} flex items-center`}>
                    {[...Array(Math.floor(list.Rating))].map((_, i) => (
                      <FaStar />
                    ))}
                    {list.Rating % 1 !== 0 ? (
                      list.Rating % 1 <= 0.5 ? (
                        <FaRegStarHalfStroke />
                      ) : (
                        <FaRegStar />
                      )
                    ) : (
                      <></>
                    )}
                    {[...Array(5 - Math.ceil(list.Rating))].map((_, i) => (
                      <FaRegStar />
                    ))}
                  </div>
                  <h3 className="text-black my-[5px] mx-0 text-[18px] font-medium">{list.Name}</h3>
                  <h4 className="text-[16px] text-[#333] font-bold">
                    ₹{list.Price}/-
                    <del className="ml-[10px] text-[14px] text-[#aaa] font-normal">
                      <span className={styles["money"]}>
                        ₹{list.Original_Price}/-
                      </span>
                    </del>
                  </h4>
                </div>
                <div>
                  <button className={`${styles["buy-now"]} bg-[#ff5bb1] text-white border-[3px] border-[#ff5bb1] text-[15px] font-bold rounded-[8px] py-[5px] px-[10px] cursor-pointer shadow-[0px_1px_2px_#000] mb-[5px] hover:bg-white hover:text-[#ff5bb1]`}>Buy Now</button>
                </div>
              </div>
            </div>
          </>
        );
      });
    } else if (selectedCategory === "newArrivals") {
      return newArrivals.map((list, index) => {
        return (
          <>
            <div
              onMouseLeave={hoverEndHandler}
              onMouseEnter={() => {
                hoverStartHandler(index);
              }}
              key={index}
              style={{ transform: `translateX(-${offset}%)` }}
              className={`${styles["product-card"]} rounded-[10px] shadow-[0_4px_8px_#bbb] overflow-hidden my-[10px] mx-0 min-w-[300px] text-center transition-[0.3s_ease]   ${hoveredIndex === index ? styles.hover : ""
                }`}
            >
              <div className={styles["image-wrapper"]} style={{ overflow: "hidden" }}>
                <img className="w-full rounded-l-[10px]"
                  // onMouseLeave={hoverEndHandler} onMouseEnter={()=>{hoverStartHandler(index)}}
                  onMouseEnter={() => {
                    scaleImagehandler(index);
                  }}
                  onMouseLeave={endScaleImagehandler}
                  style={{
                    transform:
                      hoveredImageIndex === index ? "scale(1.2)" : "scale(1)",
                    transition: "transform 0.3s ease",
                  }}
                  src={list.Image}
                  alt={`product ${index + currentIndex}`}
                />
              </div>
              <div className={`${styles["cart-info"]} absolute left-[93%] top-1/2 -translate-x-[50%] -translate-y-[50%] flex flex-col justify-around w-[min-content] h-[40%] p-[10px] cursor-auto z-10 transition-[.3s]`}>
                <button title="Add to cart" className="border-none bg-none no-underline text-[#ddd] cursor-pointer translate-x-[100px] hover:text-[#FF5BB1]" style={{ transition: '.2s' }}>
                  <FaCartShopping />
                </button>
                <a title="Add to Wishlist" className="border-none bg-none no-underline text-[#ddd] cursor-pointer translate-x-[100px] hover:text-[#FF5BB1]" style={{ transition: '.3s' }}>
                  <FaHeart />
                </a>
                <a title="Quick View" className="border-none bg-none no-underline text-[#ddd] cursor-pointer translate-x-[100px] hover:text-[#FF5BB1]" style={{ transition: '.4s' }}>
                  <FaMagnifyingGlass />
                </a>
                <a title="Compare" className="border-none bg-none no-underline text-[#ddd] cursor-pointer translate-x-[100px] hover:text-[#FF5BB1]" style={{ transition: '.5s' }}>
                  <FaArrowsRotate />
                </a>
              </div>
              <div className={`${styles["product-info"]} flex justify-evenly items-center rounded-b-[10px] text-[13px] font-bold`}>
                <div className="flex flex-col">
                  <div className={`${styles["rating"]} flex items-center`}>
                    {[...Array(Math.floor(list.Rating))].map((_, i) => (
                      <FaStar />
                    ))}
                    {list.Rating % 1 !== 0 ? (
                      list.Rating % 1 <= 0.5 ? (
                        <FaRegStarHalfStroke />
                      ) : (
                        <FaRegStar />
                      )
                    ) : (
                      <></>
                    )}
                    {[...Array(5 - Math.ceil(list.Rating))].map((_, i) => (
                      <FaRegStar />
                    ))}
                  </div>
                  <h3 className="text-black my-[5px] mx-0 text-[18px] font-medium">{list.Name}</h3>
                  <h4 className="text-[16px] text-[#333] font-bold">
                    ₹{list.Price}/-
                    <del className="ml-[10px] text-[14px] text-[#aaa] font-normal">
                      <span className={styles["money"]}>
                        ₹{list.Original_Price}/-
                      </span>
                    </del>
                  </h4>
                </div>
                <div>
                  <button className={`${styles["buy-now"]}  bg-[#ff5bb1] text-white border-[3px] border-[#ff5bb1] text-[15px] font-bold rounded-[8px] py-[5px] px-[10px] cursor-pointer shadow-[0px_1px_2px_#000] mb-[5px] hover:bg-white hover:text-[#ff5bb1]`}>Buy Now</button>
                </div>
              </div>
            </div>
          </>
        );
      });
    }
  };

  return (
    <>
      <div className="heading flex justify-center items-center w-full h-[10vh]">
        <hr className="hr-left" />
        <h2>Best Seller</h2>
        <hr className="hr-right" />
      </div>
      <div className={`${styles["subheading"]} text-center text-[1.2rem] font-normal text-[#808080]`}>
        <p>Your Cosmetics and Skincare Products</p>
      </div>
      <div className={`${styles["slideBtn"]} my-[25px] mx-auto ${styles["bestseller_container"]} text-center`}>
        <button onClick={() => { HandleBtnClicked2("trending"); }}
          style={{ backgroundColor: isClicked ? "#ffff" : "#FF5BB1", color: isClicked ? "#FF5BB1" : "#fff", }}
          className={`${styles["first"]} rounded-l-[5px] bg-[#ff5bb1] py-[0.5rem] px-[0.2rem] w-[160px] h-[50px] border-[2px] border-[#ff5bb1] outline-none text-[16px] transition-[all_0.8s_ease] font-extrabold`}>Trending Now</button>
        <button onClick={() => { HandleBtnClicked("newArrivals"); }}
          style={{ backgroundColor: isClicked ? "#FF5BB1" : "#ffff", color: isClicked ? "#fff" : "#FF5BB1", }}
          className={`${styles["second"]} rounded-r-[5px] bg-white py-[0.5rem] px-[0.2rem] w-[160px] h-[50px] border-[2px] border-[#ff5bb1] outline-none text-[16px] transition-[all_0.8s_ease] font-extrabold`}>New Arrivals</button>
      </div>
      <div className={`${styles["products"]} py-[10px] px-0 bg-[#f3edef] relative`}>
        <div className={`${styles["product-container"]} relative flex justify-start items-center gap-[20px] my-[20px] mx-[10px] max-w-full overflow-hidden cursor-pointer`}>{renderProducts()}</div>
        <div className={`${styles["controllers"]}`}>
          <button className="absolute w-[50px] h-[50px] flex ml-[5px] mr-[5px] items-center justify-center rounded-[50%] bg-white text-[#888] border-none shadow-[2px_2px_10px_#888] left-[0%] top-1/2 -translate-y-[50%] " onClick={prevSlide}>
            <FaAngleLeft />
          </button>
          <button className="absolute w-[50px] h-[50px] flex ml-[5px] mr-[5px] items-center justify-center rounded-[50%] bg-white text-[#888] border-none shadow-[2px_2px_10px_#888] right-[0%] top-1/2 -translate-y-[50%] " onClick={nextSlide}>
            <FaAngleRight />
          </button>
        </div>
      </div>
      <div className={`${styles["see-all"]} my-[20px] mx-auto`}>
        <button className="text-[#ff5bb1] bg-white border-[2px] border-[#ff5bb1] rounded-[5px] py-[10px] px-[20px] cursor-pointer text-[18px] font-semibold block m-auto transition-[.2s] hover:text-[#fff] hover:bg-[#ff5bb1]">View More</button>
      </div>
    </>
  );
};

export default BestSeller;
