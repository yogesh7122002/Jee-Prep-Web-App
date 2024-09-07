import { useState,createContext,useContext, useEffect } from "react";
const QuestionContext = createContext(); // 

 export  function QuestionProvider  (props){
  const [questionSelectionOPtion,setquestionSelectedpotion] = useState({})
  const [issaveAndNext, setisSaveAndNext] = useState({});
  const [issaveAndMark, setisSaveAndMark] = useState({});
  const[subjectselected,setsubjectselected] = useState(false)
  const [ismarkReviewAndNext, setisMarkReviewAndNext] = useState(false);
  const [issubmit, setisSubmit] = useState(false);
  const[questionindex,setquestonindex] = useState(0)
  const[selectedtopic,setselectedtopic] = useState();
  const[classname,setclass] = useState();
  const[subjectname,setsubjectname] = useState('Physics');

  const value = {
    issaveAndNext,
    setisSaveAndNext,
    issaveAndMark,
    setisSaveAndMark,
    ismarkReviewAndNext,
    setisMarkReviewAndNext,
    issubmit,
    setisSubmit,
    questionSelectionOPtion,
    setquestionSelectedpotion,
    questionindex,
    setquestonindex,
    subjectselected,
    setsubjectselected,
    selectedtopic,setselectedtopic,
    subjectname,setsubjectname,
    classname,setclass
  };
  // useEffect(()=>{console.log(questionSelectionOPtion)},[questionSelectionOPtion])
  return <QuestionContext.Provider value={value}>{props.children}</QuestionContext.Provider>; // Corrected usage of QuestionContext
};

export function useQuestion() {
  return useContext(QuestionContext);
}
