import React, { useEffect, useState } from 'react';
import { useQuestion } from '../Utility/QuestionContextProvider';
import QuestionProgessBar from './QuestionProgessBar';
import axios from 'axios';

const ShowResult = () => {
  const {
    questionindex,
    setquestonindex,
    setisSubmit,
    questionSelectionOPtion,
  } = useQuestion();
  const [optioncolor, setoptioncolor] = useState({});
  const [checkquestion, setcheckquestion] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setquestonindex(0);
  }, [setisSubmit, setquestonindex]);

  useEffect(() => {
    axios.get('https://localhost:7215/api/Quiz/GetAllQuestion')
      .then((response) => {
        const fetchedQuestions = [
          ...response.data[0]?.questions || [],
          ...response.data[1]?.questions || [],
          ...response.data[2]?.questions || []
        ];
        setcheckquestion(fetchedQuestions);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!checkquestion.length) return;

    const currentquestion = checkquestion[questionindex];
    if (!currentquestion) return;

    const newOptionColor = {};
    currentquestion.options.forEach((option) => {
      const selectedOption = questionSelectionOPtion[currentquestion.question_id];
      const answer = currentquestion.correct_answer;
      if (option === answer) {
        newOptionColor[option] = 'green-300';
      } else if (selectedOption === option) {
        newOptionColor[option] = 'red-300';
      } else {
        newOptionColor[option] = 'white';
      }
    });
    setoptioncolor(newOptionColor);
  }, [questionindex, checkquestion, questionSelectionOPtion]);

  const handleNext = () => {
    if (questionindex < checkquestion.length - 1) setquestonindex(questionindex + 1);
  };

  const handlePrevoius = () => {
    if (questionindex > 0) setquestonindex(questionindex - 1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!checkquestion.length) {
    return <div>No questions available.</div>;
  }

  const currentquestion = checkquestion[questionindex];

  return (
    <div className='flex flex-row mb-20'>
      <div className='question-section mt-28 '>
        <p className='text-3xl font-sans'>
          <span className='mr-3'>{questionindex + 1})</span> {currentquestion.question}
        </p>
        <hr className='h-0 bg-black'></hr>
        <div className='questions-option ml-6'>
          {currentquestion.options.map((Option, optindex) => {
            const colorClass = optioncolor[Option];
            return (
              <React.Fragment key={optindex}>
                <label className={`bg-${colorClass} mb-3 w-100 p-2 text-2xl text-black rounded-md`}>
                  {Option}
                </label>
                <br></br>
              </React.Fragment>
            );
          })}
        </div>
        <hr></hr>
        <div className="btn-section flex flex-row justify-between px-3 mt-5">
          <button className='bg-orange-300 px-4 py-2 rounded-md font-sans text-2xl' onClick={handlePrevoius}>Previous</button>
          <button className='bg-purple-300 px-4 py-2 rounded-md font-sans text-2xl' onClick={handleNext}>Next</button>
        </div>
      </div>
      <hr></hr>
      <div className='progress-bar-section w-3/6 mr-5 '>
        <QuestionProgessBar />
      </div>
    </div>
  );
}

export default ShowResult;
