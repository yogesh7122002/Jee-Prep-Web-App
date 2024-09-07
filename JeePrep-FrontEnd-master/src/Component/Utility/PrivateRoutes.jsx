import React, { useEffect } from 'react'
import { Navigate, Outlet} from 'react-router-dom'
import { useAuth } from './AuthContexProvider'
function PrivateRoutes() {
  const { isLoggedIn, setIsLoggedIn} = useAuth()
  // return <Outlet/>
  useEffect(()=>{
    const logininfo = JSON.parse(localStorage.getItem('userinfo'))
    if(logininfo){
      setIsLoggedIn(logininfo.isLoggedIn);
    }else{
      setIsLoggedIn(false);
    }
   
  },[])
  console.log(isLoggedIn)
 if(isLoggedIn) return isLoggedIn ? <Outlet/> : <Navigate to ="/login"/>
 else{
 return  <Navigate to='/login'/>
 }
}

export default PrivateRoutes
