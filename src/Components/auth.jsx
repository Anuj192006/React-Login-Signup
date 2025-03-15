import React, { useState } from 'react'
import './auth.css'
import Signup from './signup.jsx'
import Login from './login.jsx'

const Auth = () => {
    const [islogin, setislogin]= useState(false)
  return (
    <>
    <div className='auth'>
      <button id="signup" onClick={()=>{
        setislogin(false)
      }}>Sign Up</button>
      <button id="login" onClick={()=>{
        setislogin(true)
        }}>Login</button>
    </div>
    {islogin? <Login/>:<Signup/>}
    </>
  )
}
export default Auth
