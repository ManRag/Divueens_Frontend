import React, { useState, useEffect } from 'react';
import './Navbar.css'; 
import { FaHeart, FaShoppingCart} from 'react-icons/fa'; // Import icons from react-icons/fa
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1250);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1250);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      {isMobile ? (
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Divueens</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Makeup</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Skin</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Hair Care</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Nail Care</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Body Care</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Tools and Accessories</a>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
              <div className="navbar-icons mt-3">
                <FaShoppingCart className="navbar-icon" />
                <FaHeart className="navbar-icon" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="navbar">
          <div className="navbar-brand">
            <img src="/path/to/your/logo.png" alt="Divueens" className="brand-icon" />
          </div>
          <div className="navbar-search">
            <input type="text" className="search-input" />
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
            <FaShoppingCart className="navbar-icon" />
            <FaHeart className="navbar-icon" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
