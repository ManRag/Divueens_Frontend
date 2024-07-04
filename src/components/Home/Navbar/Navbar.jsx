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
    <nav className="navbar">
      {isMobile ? (
        <div className="container-fluid">
          <div className='logotoggler'>
          <img src={DivueensLogoImage} alt="Divueens" className="brand-icon" />
            <button className="navbar-toggler" onClick={toggleMenu}>
              <FaBars className="navbar-icon" />
            </button>
          </div>
          <div className={`offcanvas ${showMenu ? 'show' : ''}`}>
            <div className="offcanvas-header">
            <button type="button" className="btn-close" onClick={toggleMenu}>&times;</button>


              <div className="navbar-icons">
              <span
                  className="navbar-icon"
                  onMouseEnter={() => setIsHeartHovered(true)}
                  onMouseLeave={() => setIsHeartHovered(false)}
                >
                  {isHeartHovered ? <FaHeart /> : <FaRegHeart />}
                </span>
                <FaShoppingCart className="navbar-icon" />
                <div className="navbar-icon-wrapper"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span
                  className="navbar-icon"
                  onMouseEnter={() => setIsUserHovered(true)}
                  onMouseLeave={() => setIsUserHovered(false)}
                >
                  {isUserHovered ? <FaUser /> : <FaRegUser />}
                </span>
                  {showPopover && (
                    <div className="popover-content">
                      <h2>Login or SignUp</h2>
                      <div className='button-loginsignup'>
                        <Link to="/signup" className='ThisLinkStyle SignUp'> Sign Up </Link>
                        <Link to="/login" className='ThisLinkStyle  Login'> Login </Link>
                        <Link className='ThisLinkStyle  ViaGoogle'> Login/Signup via Google </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <form className="search-form">
                <input type="search" placeholder="Search" aria-label="Search" />
                <button type="submit">Search</button>
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
          <img src={DivueensLogoImage} alt="Divueens" className="brand-icon" />
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
          <div className="navbar-icons">
              <span
                  className="navbar-icon"
                  onMouseEnter={() => setIsHeartHovered(true)}
                  onMouseLeave={() => setIsHeartHovered(false)}
                >
                  {isHeartHovered ? <FaHeart /> : <FaRegHeart />}
                </span>
                <FaShoppingCart className="navbar-icon" />
                <div className="navbar-icon-wrapper"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span
                  className="navbar-icon"
                  onMouseEnter={() => setIsUserHovered(true)}
                  onMouseLeave={() => setIsUserHovered(false)}
                >
                  {isUserHovered ? <FaUser /> : <FaRegUser />}
                </span>
                  {showPopover && (
                    <div className="popover-content">
                      <h2>Login or SignUp</h2>
                      <div className='button-loginsignup'>
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
