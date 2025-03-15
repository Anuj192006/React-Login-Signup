import React, { useState } from 'react'
import "./inputfield.css"

function Clear(){
    document.getElementById("email").value=""
    document.getElementById("password").value=""
}
const Login = () => {
  return (
    <>
    <div className='inputclass'>
    <input id='email' type='email' placeholder='Enter Your Email'></input>
    <input id='password' type='password' placeholder='Enter Your Password'></input>
    <button type="Submit" className='ln' onClick={Clear}>Login</button>
    </div>
    </>
  )
}

export default Login
