import React from 'react'
import topicinfo from '../Assets/physicstopicinfo.js'
import { useQuestion } from '../Utility/QuestionContextProvider'
const SubjectTopicWiseInfo = () => {
  const {selectedtopic} = useQuestion()
  const info = topicinfo.chapters.find(topic => topic.name === `${selectedtopic}`)
  return (
    
    <div className='topic-inf px-12 rounded-md shadow-md'>
      <div className="">
        <p className='text-3xl sm:text-4xl bg-white  font-bold text-indigo-500 pt-3 ' >Chapter Name:{info.name}</p>
        <p><span className='text-black'>Overview:</span>{info.overview}</p>
        <p>Imp points in topic:{info.important_topics}</p>
        <p>Imp formula:{info.important_formulas?info.important_formulas:'NA'}</p>
      </div>
    </div>
  )
}

export default SubjectTopicWiseInfo
