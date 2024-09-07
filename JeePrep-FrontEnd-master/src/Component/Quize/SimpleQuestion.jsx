import React, { useEffect } from 'react';
// import questions from '../Assets/Quesstion.js';
import { useState } from 'react';
import axios from 'axios';
import { useQuestion } from '../Utility/QuestionContextProvider';
import QuotesCard from '../Notes/QuotesCard';
import SubjectTopicList from '../Subjects/SubjectTopicList';
import SubjectTopicWiseInfo from '../Subjects/SubjectTopicWiseInfo'

const SimpleQuestion = () => {
  // console.log("commed here")
  const [question,setquestion] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [viewsolution,setviewsolution] = useState({});
  const {selectedtopic,setselectedtopic, subjectname,classname} = useQuestion()

  useEffect(()=>{
    // const chapter= response.data.find(name=>name.name === "Sets");
    try {
      axios.get(`https://localhost:7215/api/Quiz/GetQuestion?subject=${subjectname}&std=1`).then((response)=>{setquestion(response.data)
      console.log(response.data)
    }).catch((e)=>{
        // alert('somenthing wenet wrong')
        console.log(e)
      })
      
    } catch (error) {
      console.log("Data not recieved"+error);
    }

   
  },[])
 console.log(selectedtopic);
  const chapter = question.find(chapter => chapter.name=== `${selectedtopic}`)
     console.log(chapter)
    // console.log(typeof(chapter))
  const handleOptionChange = (questionId, option, answer) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionId]: option,
    }));
  };
  
  const handlesolution =(questionId,ans)=>{
    setviewsolution((prevsolution)=>({...prevsolution,[questionId]:ans}))
  }

  return (
    <div className=' w-auto mt-7 mr-32 flex flex-row'>
      <div className="topic-list mr-4 h-screen">
      <QuotesCard/>
      <SubjectTopicList></SubjectTopicList>
      </div>
      <div className="quote-question-section ">
       <div className="quote-topic-info flex flex-row ">
       
        {/* <SubjectTopicWiseInfo></SubjectTopicWiseInfo> */}
        
       </div>
       
      {chapter && chapter.questions.map((question, index) => (
        <div key={index} className="question-option pl-20 pt-4">
          <div className='question  '>
            <p className=' mr-2'>Question {index + 1}</p>
          
            <p>{question.question}</p>
          </div>
          <div className="options">
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className={`option-${optionIndex + 1}`}>
                <input
                  type="radio"
                  name={`question-${question.question_id}`} 
                  value={option}
                  id={`${option}-${question.question_id}`}
                  checked={selectedOptions[question.question_id]===option}
                  onChange={() => handleOptionChange(question.question_id, option, question.correct_answer)}
                />
                <label
                  className={` ml-4 my-1 px-4 py-2 w-auto pl-4 bg-${selectedOptions[question.question_id] === option ? (option === question.correct_answer ? 'green-300' : 'red-300') : ''} `}
                  htmlFor={`${option}-${question.question_id}`}
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
          <p className='my-2 bg-yellow-100 w-32 px-1.8 py-3 pl-2.5 cursor-pointer rounded-md ' onClick={()=>{handlesolution(question.question_id,!viewsolution[question.question_id])}}  >View Solution</p>
           {!viewsolution[question.question_id]?'':`${question.explanation}`}    
          <hr></hr>
        </div>
        
      ))}
      </div>
    
    {/* {console.log(selectedOptions)}   */}
   
    </div>
  );
};

export default SimpleQuestion;
