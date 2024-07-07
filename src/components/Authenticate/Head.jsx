// eslint-disable-next-line no-unused-vars
import React from 'react'
import { NavLink } from 'react-router-dom';
import divLogo from "../../assets/Authentic/LOGOLOgin.png"
function Head() {
    return (
        <div className="headerForLogIn">
            <div className="imgBlock flex justify-center">
                <div className="imgLogo w-[200px] height-[14vh]">
                    <img className='h-full w-full' src={divLogo} alt="" />
                </div>
            </div>
            <div className="linkBlock">
                {/* <div class="slideBtn">
            <button class="first">New Arrivals</button>
            <button class="second">Trending Now</button>
        </div> */}
                <div className="Links-SignPage-LoginPage flex justify-center items-center my-[25px] ">
                    <NavLink to="/login" className={({ isActive }) => `${isActive ? "pink text-[#fff] bg-[#e75e56]" : ''} login-link px-[20px] rounded-l-[10px] rounded-r-[0px] transition-all duration-[0.2s] head-link text-center w-[100px] border-[2px] border-[#e75e56] no-underline text-[18px] font-semibold p-[5px] text-[#e75e56]`}> Login</NavLink>
                    <NavLink to="/signup" className={({ isActive }) => `${isActive ? "pink text-[#fff] bg-[#e75e56]" : ''} signup-link px-[20px] rounded-l-[0px] rounded-r-[10px] transition-all duration-[0.2s] head-link text-center w-[100px] border-[2px] border-[#e75e56] no-underline text-[18px] font-semibold p-[5px] delay-[0.2s] text-[#e75e56]`}> Signup</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Head
