// eslint-disable-next-line no-unused-vars
import React from 'react'
import {NavLink} from 'react-router-dom';
import divLogo from "../../assets/Authentic/LOGOLOgin.png"
function Head() {
  return (
    <div className="headerForLogIn">
        <div className="imgBlock">
            <div className="imgLogo">
                <img src={divLogo} alt="" />
            </div>
        </div>
        <div className="linkBlock">
        {/* <div class="slideBtn">
            <button class="first">New Arrivals</button>
            <button class="second">Trending Now</button>
        </div> */}
            <div className="Links-SignPage-LoginPage">
                <NavLink to="/login" className={({isActive})=>`${isActive ? "pink" : ''} login-link head-link`}> Login</NavLink>
                <NavLink to="/signup" className={({isActive})=>`${isActive ? "pink": ''} signup-link head-link`}> Signup</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Head
