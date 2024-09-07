import React from 'react'
import SubjectCard from './SubjectCard'
import subinfo from '../Assets/Subject_card_info'
import './phychemath.css'
const PhycheMath = () => {
  return (
    <div className="subject-class">
      <div className="titl"><h4>Class-11th</h4></div>
      <div className="class-11">
      {subinfo.class11.map((item,i)=>{
        return  <SubjectCard image ={item.image} title ={item.title} classn={'11'} />
      })}
      </div>
      <div className="titl"><h4>Class-12th</h4></div>
      <div className="class-11">
      {subinfo.class12.map((item,i)=>{
        return  <SubjectCard image ={item.image} title ={item.title} class={'12'} />
      })}
      </div>
    </div>
  )
}

export default PhycheMath
