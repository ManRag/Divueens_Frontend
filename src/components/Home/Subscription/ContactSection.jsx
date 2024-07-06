import React from "react";

const ContactSection = () => {
  const subscribe = () => {
    const email = document.querySelector(".contact-section input").value;
    if (email) {
      alert(`Thank you for subscribing with ${email}`);
    } else {
      alert("Please enter a valid email address");
    }
  };

  return (
<<<<<<< HEAD
    <div className="contact-section bg-[#fff] py-[50px] px-0 text-center">
      <h2 className="try11 before:content-[''] before:w-[6px] after:content-[''] after:w-[60px] text-[24px] mb-[20px] text-[#333]" style={{ fontFamily: 'Montserrat' }}>
=======
    <div 
    className="contact-section bg-white py-[50px] px-0 text-center">
      <h2
        className="try11 before:content-[''] before:w-[6px] after:content-[''] after:w-[60px] text-[24px] mb-[20px] text-[#333]"
        style={{ fontFamily: "Montserrat" }}
      >
>>>>>>> e5409af4fcb7b445239deb6cd27c1c8e61126b58
        Stay in Touch
      </h2>
      <p
        className="text-[16px] mb-[30px] text-[#555]"
        style={{ paddingLeft: "30px", fontFamily: "Montserrat" }}
      >
        Get latest beauty products on Email.
      </p>
      <div className="contact-form flex items-center justify-center">
        <input
          type="email"
<<<<<<< HEAD
          className='p-[26px] border-[2px] border-darkestColor rounded-[5px] w-[300px]'
=======
          className="p-[26px] border-[1px] border-[#800000] rounded-[5px] w-[300px]"
>>>>>>> e5409af4fcb7b445239deb6cd27c1c8e61126b58
          placeholder="Your Email Address"
          style={{
          border: "solid 1px pink",
          marginRight: "5px",
          width: "400px",
          height: "30px",
          }}
        />
<<<<<<< HEAD
        <button className='bg-darkeborder-darkestColor text-[#fff] py-[10px] px-[20px] border-none rounded-[5px] cursor-pointer text-[16px] bg-darkestColor'
          onClick={subscribe}
          style={{
            paddingLeft: '25px',
            paddingRight: '25px',
            height: '53px',
=======
        <button
          className="bg-[#800000] text-white py-[10px] px-[20px] border-none rounded-[5px] cursor-pointer text-[16px]"
          onClick={subscribe}
          style={{
            backgroundColor: "pink",
            paddingLeft: "25px",
            paddingRight: "25px",
            height: "53px",
>>>>>>> e5409af4fcb7b445239deb6cd27c1c8e61126b58
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
