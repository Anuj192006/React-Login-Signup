import React, { useState } from 'react'
import "./inputfield.css"

function Clear(){
    document.getElementById("email").value=""
    document.getElementById("password").value=""
    document.getElementById("username").value=""
}
const Signup = () => {
  return (
    
    <div className='inputclass'>
      <input id='email' type='email' placeholder='Enter Your Email'></input>
      <input id='password' type='password' placeholder='Enter Your Password'></input>
      <input id="username" type='text' placeholder='Enter Your Username'></input>
      <button type="Submit" className='su' onClick={Clear}>Sign Up</button>
    </div>
  )
}

export default Signup
