import React, { useState } from 'react'
import './signup.css'
import { Link, Navigate, json, useNavigate } from 'react-router-dom'
import axios from 'axios';
import jwtdecode, { jwtDecode } from 'jwt-decode'
import { useAuth } from '../Utility/AuthContexProvider';

export default function Login() {

  let userLoginInfo = JSON.parse(localStorage.getItem("userinfo"));
  const logindetail = {UserName:"",Password:""};
  //const [loigndata,setlogindata] = useState(logindetail);
  const [loginData,setlogindata] = useState(logindetail);

  const navigate = useNavigate();
  const {  isLoggedIn, setIsLoggedIn, setrole} = useAuth();
  // const [token,settoken] = useState("");
  const handlelogin =(e)=>{
    setlogindata({...loginData,[e.target.name]:e.target.value})
  }
  const handlesubmit =(e)=>{
    e.preventDefault();
    axios.post("https://localhost:7215/api/Auth/login", loginData).then((res) => {
      const token = res.data;
      console.log(token)
      if (!token) {
        alert("Invalid UserName or Password");
      } else {
        const decodedToken = jwtDecode(token);
        console.log(decodedToken.Role)

           // Access the role from the decoded token
           const userRole = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']; // Access role claim
  
           // Check if userRole is defined
           console.log(userRole); // Check if userRole is defined
           console.log('User Role:', userRole); // Log userRole
           
           userLoginInfo.isLoggedIn = true;
           localStorage.setItem("userinfo",JSON.stringify(userLoginInfo));
           const updatedLoginInfo =JSON.parse(localStorage.getItem("userinfo"));
           setIsLoggedIn(updatedLoginInfo.isLoggedIn);

        if (userRole === "student" || userRole === "admin") {
          //localStorage.setItem('token1', token);
         // setIsLoggedIn(true);
          if (userRole === "student") {
            navigate("/");
          } else if (userRole === "admin") {
            setrole(userRole);
            navigate("/");
          }
        }
      }
    });

  }
  return (
    <div className="login-sinup">
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginSignup-fields"> 
          {/* <input type='text' placeholder='Enter the Name'></input> */}
          <input type='text' name='UserName' value={loginData.UserName} onChange={handlelogin} placeholder='Enter the Email'></input>
          <input type='password' name='Password' value={loginData.Password} onChange={handlelogin} placeholder='Enter the password'></input>
        </div>
        <button onClick={handlesubmit}>Continue</button>
        <p className='loginsignup-login'>Not Register Yet ? <span> <Link to='/signup'>Sign Up</Link> </span></p>
        <div className="loginsignup-agree">
          <input type='checkbox'></input>
          <p>By contiguning,I agree to the term use and privacy policy </p>
        </div>
      </div>
    </div>
  )
}
