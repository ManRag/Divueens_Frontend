import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaHeart, FaShoppingCart, FaUser, FaBars, FaRegHeart, FaRegUser } from 'react-icons/fa';
import { Cart, DivueensLogoImage, searchImage, ShoppingCart } from '../../../assets/assets';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1250);
  const [showMenu, setShowMenu] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const [isHeartHovered, setIsHeartHovered] = useState(false);
  const [isUserHovered, setIsUserHovered] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1250);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest('.navbar-icons flex items-center ')) {
      setShowPopover(false);
    }
  };


  useEffect(() => {
    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handlePopoverToggle = () => {
    setShowPopover(!showPopover);
  };

  const handleMouseEnter = () => {
    setShowPopover(true);
  };

  const handleMouseLeave = () => {
    setShowPopover(false);
  };

  return (
    <nav className="navbar bg-[#fff] p-2 sticky top-0 z-[1000]">
      {isMobile ? (
        <div
          className="container-fluid">
          <div
            className='logotoggler flex px-4 justify-between'>
            <img
              src={DivueensLogoImage}
              alt="Divueens"
              className="brand-icon h-[3em]" />
            <button
              className="navbar-toggler bg-none border-none"
              onClick={toggleMenu}>
              <FaBars
                className="navbar-icon hover:text-rose-700 flex cursor-pointer text-[1.2rem] ml-[1.5rem] p-[0.1rem]" />
            </button>
          </div>
          <div className={`offcanvas fixed top-0 right-0 h-full min-w-[20rem] w-[30%] bg-[#fff] shadow-[-2px_0_5px_rgba(173,65,65,0.5)] p-4 translate-x-full transition-[transform] duration-[0.5s] ease-in-out ${showMenu ? 'show' : ''}`}>
            <div className="offcanvas-header flex justify-between items-center">
              <button type="button" className="btn-close bg-none border-none py-0 px-[1.1rem] text-[#fff] rounded-[3rem] bg-rose-700 text-[2.5rem] cursor-pointer" onClick={toggleMenu}>&times;</button>


              <div className="navbar-icons flex items-center ">
                <span
                  className="navbar-icon hover:text-rose-700 flex cursor-pointer text-[1.2rem] ml-[1.5rem] p-[0.1rem]"
                  onMouseEnter={() => setIsHeartHovered(true)}
                  onMouseLeave={() => setIsHeartHovered(false)}
                >
                  {isHeartHovered ? <FaRegHeart /> : <FaRegHeart />}
                </span>

                <span
                  className="navbar-icon hover:text-rose-700 flex cursor-pointer text-[1.2rem] ml-[1.5rem] p-[0.1rem]"
                  onMouseEnter={() => setIsCartHovered(true)}
                  onMouseLeave={() => setIsCartHovered(false)}
                >
                  {isCartHovered ? <img src={Cart} alt="Cart" className="cart-icon w-[1.3rem] p-0 hover:text-rose-700" /> : <img src={ShoppingCart} alt="Cart" className="cart-icon w-[1.3rem] p-0 hover:text-rose-700" />}
                </span>



                {/* <FaShoppingCart className="navbar-icon hover:text-rose-700 flex cursor-pointer text-[1.2rem] ml-[1.5rem] p-[0.1rem]" /> */}
                <div className="navbar-icon-wrapper"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span
                    className="navbar-icon hover:text-rose-700 flex cursor-pointer text-[1.2rem] ml-[1.5rem] p-[0.1rem]"
                    onMouseEnter={() => setIsUserHovered(true)}
                    onMouseLeave={() => setIsUserHovered(false)}
                  >
                    {isUserHovered ? <FaRegUser /> : <FaRegUser />}
                  </span>
                  {showPopover && (
                    <div className="popover-content">
                      <h2 className='text-lg text-center drop-shadow-xl'>Login or SignUp</h2>
                      <div className='button-loginsignup'>
                        <button className='SignUp bg-rose-700 border-rose-700 border-[0.1rem] w-full my-[0.5rem] text-[#fff] py-[0.5rem] px-[1rem] cursor-pointer font-bold rounded-[0.5rem] hover:bg-[#fff] hover:text-rose-700 hover:border-rose-700 hover:border-[0.1rem]'> Sign Up </button>
                        <button className='Login bg-rose-700 border-rose-700 border-[0.1rem] w-full my-[0.5rem] text-[#fff] py-[0.5rem] px-[1rem] cursor-pointer font-bold rounded-[0.5rem] hover:bg-[#fff] hover:text-rose-700 hover:border-rose-700 hover:border-[0.1rem]'> Login </button>
                        <button className='ViaGoogle bg-rose-700 border-rose-700 border-[0.1rem] w-full my-[0.5rem] text-[#fff] py-[0.5rem] px-[1rem] cursor-pointer font-bold rounded-[0.5rem] hover:bg-[#fff] hover:text-rose-700 hover:border-rose-700 hover:border-[0.1rem]'> Login / Signup via Google </button>
                      </div>
                    </div>
                  )}
                </div>

              </div>


            </div>
            <form className="search-form flex items-center my-4 ">
              <input className='p-2 border-[0.1rem] border-rose-700 rounded-l-[0.5rem] placeholder:text-rose-700' type="search" placeholder="Search" aria-label="Search" />
              <button className='p-2 border-rose-700 border-[0.1rem] bg-rose-700 text-[#fff] rounded-r-[0.5rem]' type="submit">Search</button>
            </form>
            <div className="offcanvas-body">
              <ul className="navbar-nav">
                <li className="nav-item mb-[0.5rem]"><a className="nav-link no-underline text-[#000] hover:text-rose-700" href="#">Makeup</a></li>
                <li className="nav-item mb-[0.5rem]"><a className="nav-link no-underline text-[#000] hover:text-rose-700" href="#">Skin</a></li>
                <li className="nav-item mb-[0.5rem]"><a className="nav-link no-underline text-[#000] hover:text-rose-700" href="#">Hair Care</a></li>
                <li className="nav-item mb-[0.5rem]"><a className="nav-link no-underline text-[#000] hover:text-rose-700" href="#">Nail Care</a></li>
                <li className="nav-item mb-[0.5rem]"><a className="nav-link no-underline text-[#000] hover:text-rose-700" href="#">Body Care</a></li>
                <li className="nav-item mb-[0.5rem]"><a className="nav-link no-underline text-[#000] hover:text-rose-700" href="#">Tools and Accessories</a></li>
                <li className="nav-item mb-[0.5rem]"><a className="nav-link no-underline text-[#000] hover:text-rose-700" href="#">Neauty Advice</a></li>
                <li className="nav-item mb-[0.5rem]"><a className="nav-link no-underline text-[#000] hover:text-rose-700" href="#">Categories</a></li>
              </ul>

            </div>
          </div>
        </div>
      ) : (
        <div className="navbar-desktop flex items-center justify-between">
          <div className="navbar-brand">
            <img src={DivueensLogoImage} alt="Divueens" className="brand-icon h-[3em]" />
          </div>

          <div className="navbar-links flex justify-between w-[65%] ">
            <a className='text-[#333] p-2 rounded-[0.4rem] font-bold hover:text-rose-700' href="#">Makeup</a>
            <a className='text-[#333] p-2 rounded-[0.4rem] font-bold hover:text-rose-700' href="#">Skin</a>
            <a className='text-[#333] p-2 rounded-[0.4rem] font-bold hover:text-rose-700' href="#">Hair Care</a>
            <a className='text-[#333] p-2 rounded-[0.4rem] font-bold hover:text-rose-700' href="#">Nail Care</a>
            <a className='text-[#333] p-2 rounded-[0.4rem] font-bold hover:text-rose-700' href="#">Body Care</a>
            <a className='text-[#333] p-2 rounded-[0.4rem] font-bold hover:text-rose-700' href="#">Tools and Accessories</a>
            <a className='text-[#333] p-2 rounded-[0.4rem] font-bold hover:text-rose-700' href="#">Beauty Advice</a>
            <a className="nav-link text-[#333] p-2 rounded-[0.4rem] font-bold hover:text-rose-700" href="#">Categories</a>
          </div>
          {/* <div className="navbar-search">
            <input type="text" className="search-input" placeholder="Search" />
            <button className="search-button">Search</button>
          </div> */}
          {/* <div class="wrap-input-17"><div class="search-box">
  <button class="btn-search"><img src={searchImage} alt="Search" className="search-icon" /></button>
  <input type="text" class="input-search" placeholder="Type to Search..."/>
</div>
</div> */}

          <div className="navbar-icons flex items-center ">
            <div class="wrap-input-17 box-border relative">
              <div class="search-box relative">
                <button class="btn-search w-[3rem] h-[3rem] border-none text-[1.3rem] cursor-pointer absolute bg-[#fff0] ">
                  <img src={searchImage} alt="Search" className="search-icon w-[1.15rem]" />
                </button>
                <input type="text" className="input-search h-[3rem] w-[3rem] border-none text-[.9rem] outline-none transition-all duration-[0.5s] ease-in-out bg-[#fff0] placeholder:text-rose-200" placeholder="Search on Divueens" />
              </div>
            </div>

            <span
              className="navbar-icon hover:text-rose-700 flex cursor-pointer text-[1.2rem] ml-[1.5rem] p-[0.1rem]"
              onMouseEnter={() => setIsHeartHovered(true)}
              onMouseLeave={() => setIsHeartHovered(false)}
            >
              {isHeartHovered ? <FaRegHeart /> : <FaRegHeart />}
            </span>
            {/* <FaShoppingCart className="navbar-icon hover:text-rose-700 flex cursor-pointer text-[1.2rem] ml-[1.5rem] p-[0.1rem]" /> */}

            <span
              className="navbar-icon hover:text-rose-700 flex cursor-pointer text-[1.2rem] ml-[1.5rem] p-[0.1rem]"
              onMouseEnter={() => setIsCartHovered(true)}
              onMouseLeave={() => setIsCartHovered(false)}
            >
              {isCartHovered ? <img src={Cart} alt="Cart" className="cart-icon w-[1.3rem] hover:text-rose-700" /> : <img src={ShoppingCart} alt="Cart" className="cart-icon w-[1.3rem] hover:text-rose-700" />}
            </span>


            {/* <img src={ShoppingCart} alt="Cart" className="cart-icon w-[1.3rem] p-[0.5rem] hover:text-rose-700" /> */}
            <div className="navbar-icon-wrapper"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span
                className="navbar-icon hover:text-rose-700 flex cursor-pointer text-[1.2rem] ml-[1.5rem] p-[0.1rem]"
                onMouseEnter={() => setIsUserHovered(true)}
                onMouseLeave={() => setIsUserHovered(false)}
              >
                {isUserHovered ? <FaRegUser /> : <FaRegUser />}
              </span>
              {showPopover && (
                <div className="popover-content">
                  <h2 className='text-lg text-center drop-shadow-xl'>Login or SignUp</h2>
                  <div className='button-loginsignup'>
                    <button className='SignUp bg-rose-700 border-rose-700 border-[0.1rem] w-full my-[0.5rem] text-[#fff] py-[0.5rem] px-[1rem] cursor-pointer font-bold rounded-[0.5rem] hover:bg-[#fff] hover:text-rose-700 hover:border-rose-700 hover:border-[0.1rem]'> Sign Up </button>
                    <button className='Login bg-rose-700 border-rose-700 border-[0.1rem] w-full my-[0.5rem] text-[#fff] py-[0.5rem] px-[1rem] cursor-pointer font-bold rounded-[0.5rem] hover:bg-[#fff] hover:text-rose-700 hover:border-rose-700 hover:border-[0.1rem]'> Login </button>
                    <button className='ViaGoogle bg-rose-700 border-rose-700 border-[0.1rem] w-full my-[0.5rem] text-[#fff] py-[0.5rem] px-[1rem] cursor-pointer font-bold rounded-[0.5rem] hover:bg-[#fff] hover:text-rose-700 hover:border-rose-700 hover:border-[0.1rem]'> Login / Signup via Google </button>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
