// eslint-disable-next-line no-unused-vars
import React from 'react'

function inputBox(props) {
  return (
    <div>
      <label htmlFor={props.title}>{props.title}</label><br />
      <input type={props.type} name={props.title} id={props.title} className='inputBox'  placeholder={props.phText}/>
    </div>
  )
}

export default inputBox
