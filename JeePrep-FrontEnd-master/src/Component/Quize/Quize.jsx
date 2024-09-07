import React, { useState } from 'react'
import './quize.css'
import QuestioOption from './QuestioOption'
import QuestionProgessBar from './QuestionProgessBar'
import ProfileAndSubject from './ProfileAndSubject'
import SimpleQuestion from './SimpleQuestion'
const Quize = () => {
  return (
   <>
   <div className='quize-sec'>
    <div className="upper-header ">
      <ProfileAndSubject/>
    </div>
    <div className="lower-section">
      <div className="question-section">
          <QuestioOption/>
          {/* <SimpleQuestion/> */}
      </div>

      <div className="question-bord">
        <QuestionProgessBar/>
      </div>
    </div>
   </div>
   </>
  )
}

export default Quize
