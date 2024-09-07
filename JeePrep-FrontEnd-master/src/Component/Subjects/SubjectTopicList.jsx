import React, { useState } from 'react'
import topics from '../Assets/EleventhTopicList.js'
import { useQuestion } from '../Utility/QuestionContextProvider.jsx'
const SubjectTopicList = () => {
    const {subjectname,setsubjectname,classname,setclass,setselectedtopic,selectedtopic} = useQuestion();
    const[textcolor,settextcolor] = useState('blue-500')
    // console.log(topics)
    // console.log(topics.subjectname.chapters)
    function handletopiclist(name){
      setselectedtopic(name)
      // settextcolor('green-200')
      // console.log(selectedtopic)
    }
    
  return (
    <div className=' w-80 mt-2  z-10 mr-5 top-20 ml-6  bg-orange-100 rounded-md '>
      <ul className='mt-8 mx-auto max-w-xs text-left font-medium text-lg leading-none border-blue-200 divide-y divide-blue-200 cursor-pointer ' >
      {topics[subjectname].chapters.map((topicname,index)=>{
        return <li onClick={()=>handletopiclist(topicname.name)}  className={`py-3.5 w-full flex items-center text-${textcolor} hover:text-blue-700 hover:bg-blue-50  cursor-pointer `} ><span  className="ml-5 mr-2.5 w-1 h-7 bg-blue-500 rounded-r-md " ></span><span className='cursor-pointer'>{topicname.name}</span></li>
      })}
      </ul>
      
    </div>
  )
}

export default SubjectTopicList
