// import React, { useEffect, useState } from "react";
// import { useQuestion } from "../Utility/QuestionContextProvider";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const QuestioOption = () => {
//   const [question, setQuestion] = useState([]);
//   const [selectedOptions, setSelectedOptions] = useState({});
//   const navigate = useNavigate();
//   const [totalquestn, setTotalQuestn] = useState([]);
//   const {
//     issaveAndNext,
//     setisSaveAndNext,
//     issaveAndMark,
//     setisSaveAndMark,
//     ismarkReviewAndNext,
//     setisMarkReviewAndNext,
//     issubmit,
//     setisSubmit,
//     questionSelectionOPtion,
//     setquestionSelectedpotion,
//     questionindex,
//     setquestonindex,
//     subjectname = 'Physics',
//     setsubjectname
//   } = useQuestion();

//   useEffect(() => {
//     axios.get('https://localhost:7215/api/Quiz/GetAllQuestion')
//       .then((response) => {
//         setQuestion(response.data);
//         setTotalQuestn([...response.data[0]?.questions, ...response.data[1]?.questions, ...response.data[2]?.questions]);

       
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   const subquestion = question.find(subject => subject.subject === subjectname);
//   console.log(totalquestn)
//   let currentQuestion = null;
//   if (subjectname === 'Physics') {
//     currentQuestion = question.length > 0 ? question[0]?.questions[questionindex] : null;
//   } else if (subjectname === 'Mathematics') {
//     currentQuestion = question.length > 1 ? question[1]?.questions[questionindex] : null;
//   } else {
//     currentQuestion = subquestion?.questions[questionindex] || null;
//   }

//   const handleOptionChange = (questionId, option) => {
//     setSelectedOptions((prevSelectedOptions) => ({
//       ...prevSelectedOptions,
//       [questionId]: option,
//     }));
//     setquestionSelectedpotion((prevoption) => ({ ...prevoption, [questionId]: option }));
//   };

//   function handlesaveandnext() {
//     setisSaveAndNext((prevsave) => ({
//       ...prevsave,
//       [questionindex]: true
//     }));
//     setquestonindex(questionindex + 1);
//   }

//   useEffect(() => {
//     Object.entries(questionSelectionOPtion).forEach(([questionId, selectedOption]) => {
//       // Log the selected options
//     });
//   }, [questionSelectionOPtion]);

//   if (!subquestion || !currentQuestion) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="">
//       <div className="question-withoption">
//         <p>{currentQuestion.question}</p>
//         <hr></hr>
//         {currentQuestion.options.map((option, optionIndex) => (
//           <div key={optionIndex} className="py-2">
//             <input
//               type="radio"
//               name={`question-${currentQuestion.question_id}`}
//               value={option}
//               id={`${option}-${currentQuestion.question_id}`}
//               checked={selectedOptions[currentQuestion.question_id] === option}
//               onChange={() => handleOptionChange(currentQuestion.question_id, option)}
//             />
//             <label
//               className='ml-4'
//               htmlFor={`${option}-${currentQuestion.question_id}`}
//             >
//               {option}
//             </label>
//           </div>
//         ))}
//       </div>

//       <div className="btn-section w-90">
//         <button
//           className="bg-green-300 rounded px-3 py-2 text-xl text-black font-sans font-serif my-2 mx-3 mr-3"
//           onClick={handlesaveandnext}
//         >
//           Save & Next
//         </button>
//         <button
//           className="bg-orange-300 rounded px-3 py-2 text-xl text-black font-sans font-serif my-2 mx-3 mr-3"
//           onClick={() => {
//             setisSaveAndMark((prevmark) => ({
//               ...prevmark,
//               [questionindex]: true
//             }));
//             setquestonindex(questionindex + 1);
//             console.log(selectedOptions);
//           }}
//         >
//           Save & Mark Review
//         </button>
//         <button
//           className="bg-red-300 rounded px-3 py-2 text-xl text-black font-sans font-serif my-2 mx-3 mr-3"
//           onClick={() => setSelectedOptions({})}
//         >
//           Clear Response
//         </button>
//         <button
//           className="bg-blue-300 rounded px-3 py-2 text-xl text-black font-sans font-serif my-2 mx-3 mr-3"
//           onClick={() => setisMarkReviewAndNext(true)}
//         >
//           Mark Review & Next
//         </button>
//         <hr />
//         <button
//           className="bg-red-600 rounded px-3 py-2 text-xl text-white font-sans font-serif my-2 mx-3 mr-3 absolute"
//           onClick={() => {
//             setisSubmit(true);
//             navigate('/submit');
//           }}
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default QuestioOption;

import React, { useEffect, useState } from "react";
import { useQuestion } from "../Utility/QuestionContextProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const QuestioOption = () => {
  const [question, setQuestion] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const navigate = useNavigate();
  const [totalquestn, setTotalQuestn] = useState([]);
  const {
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
    subjectname = 'Physics',
    setsubjectname
  } = useQuestion();

  useEffect(() => {
    axios.get('https://localhost:7215/api/Quiz/GetAllQuestion')
      .then((response) => {
        setQuestion(response.data);
        setTotalQuestn([...response.data[0]?.questions, ...response.data[1]?.questions, ...response.data[2]?.questions]);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  let currentQuestion = totalquestn[questionindex];

  const handleOptionChange = (questionId, option) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionId]: option,
    }));
    setquestionSelectedpotion((prevoption) => ({ ...prevoption, [questionId]: option }));
  };

  function handlesaveandnext() {
    setisSaveAndNext((prevsave) => ({
      ...prevsave,
      [questionindex]: true
    }));
    setquestonindex(questionindex + 1);
  }

  useEffect(() => {
    Object.entries(questionSelectionOPtion).forEach(([questionId, selectedOption]) => {
      // Log the selected options
    });
  }, [questionSelectionOPtion]);

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <div className="question-withoption">
        <p>{currentQuestion.question}</p>
        <hr></hr>
        {currentQuestion.options.map((option, optionIndex) => (
          <div key={optionIndex} className="py-2">
            <input
              type="radio"
              name={`question-${currentQuestion.question_id}`}
              value={option}
              id={`${option}-${currentQuestion.question_id}`}
              checked={selectedOptions[currentQuestion.question_id] === option}
              onChange={() => handleOptionChange(currentQuestion.question_id, option)}
            />
            <label
              className='ml-4'
              htmlFor={`${option}-${currentQuestion.question_id}`}
            >
              {option}
            </label>
          </div>
        ))}
      </div>

      <div className="btn-section w-90">
        <button
          className="bg-green-300 rounded px-3 py-2 text-xl text-black font-sans font-serif my-2 mx-3 mr-3"
          onClick={handlesaveandnext}
        >
          Save & Next
        </button>
        <button
          className="bg-orange-300 rounded px-3 py-2 text-xl text-black font-sans font-serif my-2 mx-3 mr-3"
          onClick={() => {
            setisSaveAndMark((prevmark) => ({
              ...prevmark,
              [questionindex]: true
            }));
            setquestonindex(questionindex + 1);
            console.log(selectedOptions);
          }}
        >
          Save & Mark Review
        </button>
        <button
          className="bg-red-300 rounded px-3 py-2 text-xl text-black font-sans font-serif my-2 mx-3 mr-3"
          onClick={() => setSelectedOptions({})}
        >
          Clear Response
        </button>
        <button
          className="bg-blue-300 rounded px-3 py-2 text-xl text-black font-sans font-serif my-2 mx-3 mr-3"
          onClick={() => setisMarkReviewAndNext(true)}
        >
          Mark Review & Next
        </button>
        <hr />
        <button
          className="bg-red-600 rounded px-3 py-2 text-xl text-white font-sans font-serif my-2 mx-3 mr-3 absolute"
          onClick={() => {
            setisSubmit(true);
            setquestonindex(0)
            console.log(questionSelectionOPtion)
            navigate('/submit');
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default QuestioOption;
