import React, { useEffect } from 'react'
import './subjectcard.css'
import { useAuth } from '../Utility/AuthContexProvider'
import {  useNavigate } from 'react-router-dom'
import SimpleQuestion from '../Quize/SimpleQuestion'
import { useQuestion } from '../Utility/QuestionContextProvider'
import axios from 'axios'
const SubjectCard = (props) => {
 const{isLoggedIn }= useAuth()
 const{setsubjectselected} = useQuestion();
 const navigate = useNavigate();
 const{setclass,setsubjectname} = useQuestion();

// useEffect(() => {
    
//     
// },[setclass])

 const handlebtn =(e)=>{
  e.preventDefault()

  try {
    axios.get(`https://localhost:7215/api/Quiz/GetQuestion?subject=Physics&std=11`).then((response) => {
      console.log(response.data);
      const chapter= response.data.find(name=>name.name === "Physical World");
      console.log(chapter.questions[0]);

    });
     
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  console.log(isLoggedIn)
    //  isLoggedIn ? <SimpleQuestion/> : navigate('/login')
    if (isLoggedIn) {
      navigate('/practice',{state : {subject : props.title}})
      setsubjectselected(true);
      setclass(props.classn);
      setsubjectname(props.title);
      
    } else {
      navigate('/login');
    }
    // navigate('/practice',{state : {subject : props.title}})
    //   setsubjectselected(true);
    //   setclass(props.classn);
    //   setsubjectname(props.title);
 }
  return (
    <div className="sub-card">
      <img src={props.image}></img>
      <h4>{props.title}</h4>
      <button onClick={handlebtn}>Solve Now</button>
    </div>
  )
}

export default SubjectCard
