import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaHeart, FaShoppingCart, FaUser, FaBars, FaRegHeart, FaRegUser} from 'react-icons/fa';
import DivueensLogoImage from "../../../assets/CarouselImages/DivueensLogoImage.png";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1250);
  const [showMenu, setShowMenu] = useState(false);
  const [showPopover, setShowPopover] = useState(false); 
  const [isHeartHovered, setIsHeartHovered] = useState(false);
  const [isUserHovered, setIsUserHovered] = useState(false);
  

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1250);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest('.navbar-icons')) {
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
    <nav className="navbar bg-[#f8f9fa] p-2 sticky top-0 z-[1000]">
      {isMobile ? (
        <div className="container-fluid">
          <div className='logotoggler flex py-0 px-4 justify-between'>
          <img src={DivueensLogoImage} alt="Divueens" className="brand-icon h-[3em]" />
            <button className="navbar-toggler bg-none border-none" onClick={toggleMenu}>
              <FaBars className="navbar-icon flex cursor-pointer text-[1.2rem] ml-4 hover:text-[#ff5bb1] " />
            </button>
          </div>
          <div className={`offcanvas  fixed top-0 right-0 h-full min-w-60 w-[30%] bg-white shadow-[-2px_0_5px_rgba(173, 65, 65, 0.5)] p-4 translate-x-full transition-[transform_0.5s_ease-in-out] ${showMenu ? 'show' : ''}`}>
            <div className="offcanvas-header flex justify-between items-center">
            <button type="button" className="btn-close  bg-none border-none py-0 px-[0.8rem] rounded-[3rem] bg-[#fdaad5] text-[2.5rem] cursor-pointer" onClick={toggleMenu}>&times;</button>

              <div className="navbar-icons flex items-center">
              <span
                  className="navbar-icon flex cursor-pointer text-[1.2rem] ml-4 hover:text-[#ff5bb1]"
                  onMouseEnter={() => setIsHeartHovered(true)}
                  onMouseLeave={() => setIsHeartHovered(false)}
                >
                  {isHeartHovered ? <FaHeart /> : <FaRegHeart />}
                </span>
                <FaShoppingCart className="navbar-icon flex cursor-pointer text-[1.2rem] ml-4 hover:text-[#ff5bb1]" />
                <div className="navbar-icon-wrapper"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span
                  className="navbar-icon flex cursor-pointer text-[1.2rem] ml-4 hover:text-[#ff5bb1]"
                  onMouseEnter={() => setIsUserHovered(true)}
                  onMouseLeave={() => setIsUserHovered(false)}
                >
                  {isUserHovered ? <FaUser /> : <FaRegUser />}
                </span>
                  {showPopover && (
                    <div className="popover-content">
                      <h2>Login or SignUp</h2>
                      <div className='button-loginsignup '>
                        <Link to="/signup" className='ThisLinkStyle SignUp'> Sign Up </Link>
                        <Link to="/login" className='ThisLinkStyle  Login'> Login </Link>
                        <Link className='ThisLinkStyle  ViaGoogle'> Login/Signup via Google </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <form className="search-form flex items-center my-[1rem]">
                <input className='p-[0.5rem] border-[0.1rem] border-black rounded-l-[0.5rem] rounded-r-[0rem]' type="search" placeholder="Search" aria-label="Search" />
                <button className='py-[0.5rem] px-[1rem] border-[0.1rem] border-black rounded-r-[0.5rem] rounded-l-[0rem] hover:bg-black hover:text-white' type="submit">Search</button>
              </form>
            <div className="offcanvas-body">
              <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link" href="#">Makeup</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Skin</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Hair Care</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Nail Care</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Body Care</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Tools and Accessories</a></li>
              </ul>
              
              
            </div>
          </div>
        </div>
      ) : (
        <div className="navbar-desktop">
          <div className="navbar-brand">
          <img src={DivueensLogoImage} alt="Divueens" className="brand-icon h-[3em]" />
          </div>
          <div className="navbar-search">
            <input type="text" className="search-input" placeholder="Search" />
            <button className="search-button">Search</button>
          </div>
          <div className="navbar-links">
            <a href="#">Makeup</a>
            <a href="#">Skin</a>
            <a href="#">Hair Care</a>
            <a href="#">Nail Care</a>
            <a href="#">Body Care</a>
            <a href="#">Tools and Accessories</a>
          </div>
          <div className="navbar-icons flex items-center">
              <span
                  className="navbar-icon flex cursor-pointer text-[1.2rem] ml-4 hover:text-[#ff5bb1]"
                  onMouseEnter={() => setIsHeartHovered(true)}
                  onMouseLeave={() => setIsHeartHovered(false)}
                >
                  {isHeartHovered ? <FaHeart /> : <FaRegHeart />}
                </span>
                <FaShoppingCart className="navbar-icon flex cursor-pointer text-[1.2rem] ml-4 hover:text-[#ff5bb1]" />
                <div className="navbar-icon-wrapper"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span
                  className="navbar-icon flex cursor-pointer text-[1.2rem] ml-4 hover:text-[#ff5bb1]"
                  onMouseEnter={() => setIsUserHovered(true)}
                  onMouseLeave={() => setIsUserHovered(false)}
                >
                  {isUserHovered ? <FaUser /> : <FaRegUser />}
                </span>
                  {showPopover && (
                    <div className="popover-content">
                      <h2>Login or SignUp</h2>
                      <div className='button-loginsignup '>
                        <Link to="/signup" className='ThisLinkStyle SignUp'> Sign Up </Link>
                        <Link to="/login" className='ThisLinkStyle Login'> Login </Link>
                        <Link className='ThisLinkStyle ViaGoogle'> Login/Signup via Google </Link>
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
