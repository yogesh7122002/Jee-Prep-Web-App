import React, { useState } from 'react';
import './topicCard.css';
import { useAuth } from '../Utility/AuthContexProvider';
import SimpleQuestion from './SimpleQuestion'; // Import the SimpleQuestion component
import { useNavigate } from 'react-router-dom';
import { useQuestion } from '../Utility/QuestionContextProvider';

const TopicCard = (props) => {
  const { isLoggedIn } = useAuth();
    const[look,setlook] = useState();
    const {setselectedtopic}= useQuestion()
    const navigate = useNavigate();
  const handlebt = (e) => {
    e.preventDefault();
    // console.log("clicked")
    navigate('/chapterwise-question')
    setlook(true)
    setselectedtopic(props.title);
  };

  return (
    <div className="sub-card">
      <img src={props.image} alt="topic" />
      <h4 id="top">{props.title}</h4>
      <button onClick={handlebt}>Solve Now</button>
    </div>
  );
};

export default TopicCard;
