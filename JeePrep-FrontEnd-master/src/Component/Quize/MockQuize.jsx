import React from "react";
import SubjectCard from "../Subjects/SubjectCard";
import quiz11 from '../Assets/chem11.png'
import { useNavigate } from "react-router-dom";

const MockQuize =() =>{
    const navigate = useNavigate()
    const handlebtn =()=>{
        navigate('/mock-quize-start')
    }
    return <div>
     <div className="sub-card">
      <img src={quiz11}></img>
      <h4>Mock-Quize</h4>
      <button onClick={handlebtn}>Solve Now</button>
    </div>
    </div>
}
export default MockQuize