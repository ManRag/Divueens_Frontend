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
    <div className="AllPage_">
    {/*<div className="loginPageBox">*/}
      <div className="imgBox">
        <img src={img1} alt="helo" />
      </div>
      <div className="entryFieldBox">
        <Head/>
        <form action="/loginPage" method="post">
          <InputBox title="Email" type="email" phText="Enter your email"/>
          <InputBox title="Password" type="text" phText="Enter your password"/>
          <Button text="Login" />
        </form>
        <div className="or"><span>or</span></div>
        <div className="bottom-Side-logo-login">
          <div><img src={googleImg} alt="" />Login with Google</div>
          <div><img src={appleImg} alt="" />Login with Apple</div>
        </div>
      </div>
    {/*</div>*/}
    </div>
  )
}

export default LoginPage;
