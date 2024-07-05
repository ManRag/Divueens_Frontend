// eslint-disable-next-line no-unused-vars
import React from "react";
import InputBox from "./inputBox";
import Button from "./button";
import img1 from "../../assets/Authentic/LoginImagesBackground.jpg";
import googleImg from "../../assets/Authentic/google.svg";
import appleImg from "../../assets/Authentic/apple.svg";
import Head from "./Head";
import './Auth.css';
function SignUpPage() {
  return (
    <div className="AllPage_ flex h-screen w-screen box-border text-[#01090f] font-['Comfortaa'] bg-[url('../../assets/Authentic/bgc.jpg')] overflow-hidden">
      <div className="imgBox w-1/2 h-screen">
        <img className="w-full h-full object-cover" src={img1} alt="helo" />
      </div>
      <div className="entryFieldBox m-[40px] w-[40vw] bg-white p-[10px] pb-[30px] rounded-[10px]">
        <Head />
        <form className="z-[1] flex flex-col items-center justify-center" action="/registrationPage" method="post">
          <InputBox title="Name" type="text" phText="Enter your name" />
          <InputBox title="Email" type="email" phText="Enter your email" />
          <InputBox title="Password" type="text" phText="Enter your password" />
          <InputBox title="Confirm Password" type="text" phText="Confirm your password" />
          <Button text="Signup" />
        </form>

        <div className="or font-semibold text-center text-[20px] my-[10px] mx-0 relative z-[1] py-0 px-[30px]">
          <span className="w-full font-semibold text-[20px] my-[10px] mx-0 bg-white py-0 px-[30px]">or</span>
        </div>

        <div className="bottom-Side-logo-signup flex items-center gap-10 justify-center">
          <img className="w-[40px] h-[40px] border-[#c841f1] rounded-[50%]" src={googleImg} alt="" />
          <img className="w-[40px] h-[40px] border-[#c841f1] rounded-[50%]" src={appleImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
