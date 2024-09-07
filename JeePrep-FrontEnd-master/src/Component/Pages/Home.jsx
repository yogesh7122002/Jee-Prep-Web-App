import React, { useEffect } from 'react'
import Hero from '../Hero/Hero'
import PhycheMath from '../Subjects/PhyCheMath'
import { useAuth } from '../Utility/AuthContexProvider'
const Home = () => {
  const{setIsLoggedIn}= useAuth();
  useEffect(()=>{
    const logininfo = JSON.parse(localStorage.getItem('userinfo'))
    if(logininfo){
      setIsLoggedIn(logininfo.isLoggedIn);
    }else{
      setIsLoggedIn(false);
    }
   
  },[])
  return (
    <div>
      <Hero/>
      <PhycheMath/>
    </div>
  )
}

export default Home
