// eslint-disable-next-line no-unused-vars
import React from 'react'
import {NavLink} from 'react-router-dom';
function Navbar() {
  return (
    <div>
      
      <NavLink to="/login" className={(e) => {return e.isActive?"red":"black"}}> Login Page</NavLink>
      <NavLink to="/signup" className={(e) => {return e.isActive?"red":"black"}}> Signup Page</NavLink>
    </div>
  )
}

export default Navbar
