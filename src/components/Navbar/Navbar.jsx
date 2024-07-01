import React, { useState, useEffect } from 'react';
import './Navbar.css'; 
import { FaHeart, FaShoppingCart, FaUser, FaBars} from 'react-icons/fa';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1250);
  const [showMenu, setShowMenu] = useState(false);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1250);
  };
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      {isMobile ? (
        <div className="container-fluid">
          <div className='logotoggler'>
          <img src="/path/to/your/logo.png" alt="Divueens" className="brand-icon" />
          <button className="navbar-toggler" onClick={toggleMenu}>
            <FaBars className="navbar-icon" />
          </button>
          </div>
          <div className={`offcanvas ${showMenu ? 'show' : ''}`}>
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Divueens</h5>
              <button type="button" className="btn-close" onClick={toggleMenu}>&times;</button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link active" href="#">Makeup</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Skin</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Hair Care</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Nail Care</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Body Care</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Tools and Accessories</a></li>
              </ul>
              <form className="search-form">
                <input type="search" placeholder="Search" aria-label="Search" />
                <button type="submit">Search</button>
              </form>
              <div className="navbar-icons">
              {/* <button onClick={toggleCardVisibility} className="icon-button"> */}
              <button className="icon-button">
          <FaUser className="navbar-icon" />
        </button>
        {/* {isCardVisible && (
          <div className="card-container">
            <div className="card">
              <h2>Card Title</h2>
              <p>This is the content of the card.</p>
            </div>
          </div>
        )} */}
              <FaHeart className="navbar-icon" />
                <FaShoppingCart className="navbar-icon" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="navbar-desktop">
          <div className="navbar-brand">
            <img src="/path/to/your/logo.png" alt="Divueens" className="brand-icon" />
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
          
          <FaHeart className="navbar-icon" />
            <FaShoppingCart className="navbar-icon" />
            <FaUser className="navbar-icon" />
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
