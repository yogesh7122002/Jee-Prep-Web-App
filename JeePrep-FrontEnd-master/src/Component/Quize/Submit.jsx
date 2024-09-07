import React, { useState, useEffect } from 'react';
import { useQuestion } from '../Utility/QuestionContextProvider';
import axios from 'axios';
import ShowResult from './ShowResult';
import score from '../Assets/score.png';
import attempted from '../Assets/attempted.png';
import accurracy from '../Assets/accuracy.png';
import { Chart as Chartjs, LinearScale, BarElement, CategoryScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';

Chartjs.register(LinearScale, BarElement, CategoryScale);

const Submit = () => {
  const { questionSelectionOPtion } = useQuestion();
  const [questions, setQuestions] = useState([]);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [wrongAnswerCount, setWrongAnswerCount] = useState(0);

  useEffect(() => {
    axios.get('https://localhost:7215/api/Quiz/GetAllQuestion')
      .then((response) => {
        const fetchedQuestions = [
          ...response.data[0]?.questions || [],
          ...response.data[1]?.questions || [],
          ...response.data[2]?.questions || []
        ];
        setQuestions(fetchedQuestions);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      handleMarks();
    }
  }, [questions, questionSelectionOPtion]);

  const handleMarks = () => {
    let correct = 0;
    let wrong = 0;
    Object.entries(questionSelectionOPtion).forEach(([questionId, selectedOption]) => {
      const question = questions.find(q => q.question_id === parseInt(questionId));
      if (question?.correct_answer === selectedOption) {
        correct++;
      } else {
        wrong++;
      }
    });
    setCorrectAnswerCount(correct);
    setWrongAnswerCount(wrong);
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const totalQuestions = questions.length;
  const attemptedQuestions = correctAnswerCount + wrongAnswerCount;
  const accuracy = totalQuestions ? ((correctAnswerCount / totalQuestions) * 100).toFixed(2) : 0;

  const data = {
    labels: ["Correct", "Wrong", "Total"],
    datasets: [{
      label: "Score Card",
      data: [correctAnswerCount, wrongAnswerCount, totalQuestions],
      backgroundColor: ["#4caf50", "#f44336", "#2196f3"]
    }]
  };

  return (
    <div className='bg-white'>
     <div className="scoresection flex flex-row  mt-5 ml-32 bg-red-50 rounded-xl  w-auto py-2.5 mr-96 mb-2 ">
            
            <img className='w-12 rounded-md ml-36 mr-2 rounded-3xl bg-purple-500 p-2' src={score}  ></img> <span className='mr-28 '>{correctAnswerCount+` / `+totalQuestions} <br></br> score </span>
            <img className='w-12 rounded-md ml-36 mr-2 rounded-3xl bg-orange-500 p-2' src={attempted} ></img>
            <span className='mr-28 '>{attemptedQuestions}/{totalQuestions} <br></br> Attempted </span>
            <img className='w-12 rounded-md ml-36 mr-2 rounded-3xl bg-green-500 p-2' src={accurracy} ></img>
            <span className='mr-2 '>{accuracy} <br></br> score </span>
          </div>

      <hr />
      <div className="bar-chart w-96 align-middle ml-72 mb-20">
        <p>Performance:</p>
        <Bar data={data} />
      </div>
      <ShowResult />
    </div>
  );
};

export default Submit;
