
import React, { useState } from 'react'
import './signup.css'
import { Link, Navigate, Route, Routes, json, useNavigate  } from 'react-router-dom'
import axios from 'axios';
export default function Signup() {
  const userdetail ={userName:"",emailAddress:"",password:"",role:""};
  let [userdata,setuserdata] = useState(userdetail);
  // handle use input
  const Navigate = useNavigate();

  const handleuserdata =(e)=>{
    if(e.target.name==="userName") {setuserdata({...userdata,[e.target.name]:e.target.value})}
    else if(e.target.name==="emailAddress"){setuserdata({...userdata,[e.target.name]:e.target.value})}
    else if(e.target.name==="password"){setuserdata({...userdata,[e.target.name]:e.target.value})}
    else if(e.target.name==="role"){setuserdata({...userdata,[e.target.name]:e.target.value})}
  }
  // hadnle submission

  const haddlesubmitdata =(e)=>{
    e.preventDefault();
    axios.post('https://localhost:7215/api/Auth/register',userdata).then((res)=>{
      if(res.data!==""){
        console.log(res.data);
        localStorage.setItem('userinfo',JSON.stringify({username:userdata.userName,useremail:userdata.emailAddress,usepassword:userdata.password,userrole:userdata.role }))
        window.location.href = '/';
        // Navigate('/')
            }
    })
  }
  // http://localhost:5000/signup
  return (
    <div className="login-sinup">
      <div className="loginsignup-container">
        <h1>Register Now  </h1>
        <div className="loginSignup-fields"> 
          <input type='text'  name='userName' value={userdata.userName} placeholder='Enter the Name' onChange={handleuserdata}></input>
          <input type='email' name='emailAddress' value={userdata.emailAddress} onChange={handleuserdata} placeholder='Enter the Email'></input>
          <input type='password' name='password' value={userdata.password} onChange={handleuserdata} placeholder='Enter the password'></input>
          <input type='text' name='role' value={userdata.role} onChange={handleuserdata} placeholder='Enter the role Student or Tecaher'></input>
        </div>
        <button onClick={haddlesubmitdata}>Continue</button>
        <p className='loginsignup-login'>Already have account ? <span>  <Link to='/login'>Login </Link> <Routes></Routes> </span></p>
        <div className="loginsignup-agree">
          <input type='checkbox' required={true}></input>
          <p>By contiguning,I agree to the term use and privacy policy </p>
        </div>
      </div>
    </div>
  )
}
