// eslint-disable-next-line no-unused-vars
import React from "react";
import InputBox from "./inputBox";
import Button from "./button";
import img1 from "../../assets/Authentic/LoginImagesBackground.jpg";
import googleImg from "../../assets/Authentic/google.svg";
import appleImg from "../../assets/Authentic/apple.svg";
import Head from "./Head";
import './Auth.css';
function LoginPage() {
  return (
    <div className="AllPage_ flex h-screen w-screen box-border text-[#01090f] font-['Comfortaa'] bg-[url('../../assets/Authentic/bgc.jpg')] overflow-hidden">
      {/*<div className="loginPageBox">*/}
      <div className="imgBox w-1/2 h-screen">
        <img className="w-full h-full object-cover" src={img1} alt="helo" />
      </div>
      <div className="entryFieldBox m-[40px] w-[40vw] bg-white p-[10px] pb-[30px] rounded-[10px]">
        <Head />
        <form className=" flex flex-col items-center justify-center -z-[1]" action="/loginPage" method="post">
          <InputBox title="Email" type="email" phText="Enter your email" />
          <InputBox title="Password" type="text" phText="Enter your password" />
          <Button text="Login" />
        </form>
        <div className="or font-semibold text-center text-[20px] my-[10px] mx-0 relative z-[1] py-0 px-[30px]">
          <span className="w-full font-semibold text-[20px] my-[10px] mx-0 bg-white py-0 px-[30px]">or</span>
        </div>

        <div className="bottom-Side-logo-login ml-[26%] transition-all duration-[0.2s]">
          <div className="p-[5px] w-[20vw] border-[2px] border-[#e75e56] rounded-[5px] mb-[10px] flex items-center justify-center transition-all duration-[0.2s] hover:scale-[1.04] hover:bg-[#e75e56] hover:text-white hover:transition-all hover:duration-[0.2s] ">
            <img className="w-[30px] h-[30px] border-[#c841f1] rounded-[50%] mr-[10px]" src={googleImg} alt="" />
            Login with Google
          </div>
          <div className="p-[5px] w-[20vw] border-[2px] border-[#e75e56] rounded-[5px] mb-[10px] flex items-center justify-center transition-all duration-[0.2s] hover:scale-[1.04] hover:bg-[#e75e56] hover:text-white hover:transition-all hover:duration-[0.2s] ">
            <img className="w-[30px] h-[30px] border-[#c841f1] rounded-[50%] mr-[10px]" src={appleImg} alt="" />
            Login with Apple
          </div>
        </div>
      </div>
      {/*</div>*/}
    </div>
  )
}

export default LoginPage;
