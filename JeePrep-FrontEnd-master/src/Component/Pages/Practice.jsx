import React, { useEffect } from 'react'
import Quize from '../Quize/Quize'
import {QuestionProvider, useQuestion} from '../Utility/QuestionContextProvider'
import SimpleQuestion from '../Quize/SimpleQuestion'
import { useLocation } from 'react-router-dom'
import SubjectWiseTopic from '../Quize/SubjectWiseTopic'
import { useAuth } from '../Utility/AuthContexProvider'
import MockQuize from '../Quize/MockQuize'
import AdminDashBoard from '../Admin/AdminDashBoard'

const Practice = () => {
  // const subject = sta  
  const {subjectselected,setsubjectselected,subjectname} = useQuestion()
  const{setIsLoggedIn}= useAuth();
  // useEffect(()=>{
  //   const logininfo = JSON.parse(localStorage.getItem('userinfo'))
  //   if(logininfo){
  //     setIsLoggedIn(logininfo.isLoggedIn);
  //   }else{
  //     setIsLoggedIn(false);
  //   }
   
  // },[])
  const logininfo = JSON.parse(localStorage.getItem('userinfo'))
  if(subjectselected){
    logininfo.subjectselected = subjectselected;
    logininfo.subjectname = subjectname
    localStorage.setItem('userinfo',JSON.stringify(logininfo));
   
  // const location = useLocation();
  }
  const updateedinfo = JSON.parse(localStorage.getItem('userinfo')) 
    // logininfo.subjectselected = subjectselected;
    // logininfo.subjectname = subjectname
    // localStorage.setItem('userinfo',JSON.stringify(logininfo));
    // const updateedinfo = JSON.parse(localStorage.getItem('userinfo'))
  // const location = useLocation();
  // const { state } = location;
  // const subject = state ? state.subject : null;
  console.log(updateedinfo.subjectname+" "+updateedinfo.subjectselected)
  return (
  
    <div>
    

   
    {updateedinfo.subjectselected? <SubjectWiseTopic subject={updateedinfo.subjectname} ></SubjectWiseTopic>:<MockQuize/> }
    
    {/* <AdminDashBoard/> */}
    {/* <SimpleQuestion/> */}
      
    </div>
  )
}

export default Practice
