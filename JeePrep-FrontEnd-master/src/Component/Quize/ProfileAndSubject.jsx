import React, { useState ,useEffect } from 'react'
import logo from '../Assets/logo2.png'
import profile from '../Assets/diversity.png'
import { useNavigate } from 'react-router-dom'
import { useQuestion } from '../Utility/QuestionContextProvider'
const ProfileAndSubject = () => {
  const [second,setsecond] = useState(200)
  const[minute,setminute] = useState(0);
  const navigate = useNavigate();
  const{subjectname,setsubjectname, setquestonindex} = useQuestion()
  
  
  useEffect(() => {
    const timer = setInterval(() => {
      if (second === 0) {
        if (minute === 0) {
          clearInterval(timer);
          navigate('/submit');
        } else {
          setminute(prevminute => prevminute - 1);
          setsecond(0);
        }
      } else {
        setsecond(prevsecond => prevsecond - 1);
      }
    }, 1000);

    // Clear interval when component unmounts
    return () => clearInterval(timer);
  }, [second, minute]);
  const student_name="Tushar"
  return (
    <div>
      {/* profile-section */}
      <div className="flex  flex-row relative bg-slate-200 ">
        <img src={logo}className='w-64 h-40'></img>  
        <div className="student-info  flex flex-row absolute top-10 right-16  ">
          <img src={profile} className='w-38 h-20 border border-black px-4 py-3 rounded '></img>
          <ul>
            <li>Candidate Name:{student_name}</li>
            <li>Subject Name:{student_name}</li>
            <li>Remaining Time : {minute<10?"0"+minute:minute} : {second<10?"0"+second:second}</li>
          </ul>
        </div>
      </div>
        {/* subject-choose */}
        <div className='subject-choose w-90 mx-4 my-3 bg-orange-300 flex flex-row text-white text-2xl rounded '>
          <p className=' abosulte left-4 px-3 py-2 my-2 mr-24 ml-8   '>JEE MAIN</p>
          <button className='bg-blue-500 px-3 py-2 my-2 mr-4 rounded ' onClick={()=>{
            setsubjectname('Physics')
            setquestonindex(1)
          }} >PHYSICS</button>
          <button className='bg-blue-500 px-3 py-2 my-2 mr-4 rounded ' onClick={()=>{setsubjectname('Mathematics');setquestonindex(45)}} >MATHEMATICS</button>
          <button className='bg-blue-500 px-3 py-2 my-2 mr-4 rounded ' onClick={()=>{
            setsubjectname('Chemistry');
            setquestonindex(55)
          }}>CHEMISTRY</button>
        </div>
    </div>
  )
}

export default ProfileAndSubject
