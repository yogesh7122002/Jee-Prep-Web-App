import React, { useEffect } from 'react';
import topic from '../Assets/EleventhTopicList.js';
import TopicCard from './TopicCard.jsx';
import image from '../Assets/phy11.png';
import './subjectwiseTopic.css'
import { useAuth } from '../Utility/AuthContexProvider.jsx';
const SubjectWiseTopic = (props) => {
  const { subject } = props;

  // Check if the subject is valid and the topic object contains the expected structure
  const{setIsLoggedIn}= useAuth();
  useEffect(()=>{
    const logininfo = JSON.parse(localStorage.getItem('userinfo'))
    if(logininfo){
      setIsLoggedIn(logininfo.isLoggedIn);
    }else{
      setIsLoggedIn(false);
    }
   
  },[])
  if (!subject || !topic[subject] || !topic[subject].chapters) {
    return <p>No chapters found for the selected subject</p>;
  }

  return (
    <div>

      <div className="subject-class ml-8">
        <div className="class-11 ml-36">
          <p className='w-100 mt-8 bg-purple-300 rounded py-2 text-black ml-4  pl-5 ' >Chapters Of :{subject}</p>
          {topic[subject].chapters.map((item, i) => (
        <TopicCard key={i} title={item.name} image={image} />
      ))}
        </div>
      </div>
    


      
    </div>
  );
};

export default SubjectWiseTopic;
