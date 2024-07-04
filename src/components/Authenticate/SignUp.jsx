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
    <div className="AllPage_">
      <div className="imgBox">
        <img src={img1} alt="helo" />
      </div>
      <div className="entryFieldBox">
        <Head/>
        <form action="/registrationPage" method="post">
          <InputBox title="Name" type="text" phText="Enter your name"/>
          <InputBox title="Email" type="email" phText="Enter your email"/>
          <InputBox title="Password" type="text" phText="Enter your password"/>
          <InputBox title="Confirm Password" type="text" phText="Confirm your password" />
          <Button text="Signup" />
        </form>
        <div className="or">or</div>
        <div className="bottom-Side-logo-signup">
          <img src={googleImg} alt="" />
          <img src={appleImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
