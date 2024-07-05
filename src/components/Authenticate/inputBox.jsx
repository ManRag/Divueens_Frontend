// eslint-disable-next-line no-unused-vars
import React from 'react'

function inputBox(props) {
  return (
    <div>
      <label className='text-[18px] font-extrabold text-black' htmlFor={props.title}>{props.title}</label><br />
      <input type={props.type} name={props.title} id={props.title} className='inputBox w-[30vw] h-[3rem] text-[1rem] font-normal text-[#140114] p-[5px] pl-[10px] outline-0 border-[1px] border-[#474747] bg-white
      mr-[20px] rounded-[8px] mb-[15px] mx-0 transition-all duration-[0.4s] hover:scale-[1.02] hover:rounded-[5px]'  placeholder={props.phText}/>
    </div>
  )
}

export default inputBox
