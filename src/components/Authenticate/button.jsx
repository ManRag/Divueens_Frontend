// eslint-disable-next-line no-unused-vars
import React from 'react'

function button(props) {
  return (
    <input type='submit' className='btn text-[#fff] w-[10vw] bg-[#e75e56] p-[8px] text-[17px] rounded-[5px] border-[2px] border-[#e75e56] transition-all duration-[0.3s] mt-[10px] hover:scale-[1.04]' value={props.text}/>
  )
}

export default button

