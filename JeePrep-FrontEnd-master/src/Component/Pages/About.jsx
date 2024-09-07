import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Utility/AuthContexProvider';

const AboutUs = () => {
const navigate = useNavigate();
 const handleabout = (e)=>{
  e.preventDefault();
    navigate('/');
  }

  const{setIsLoggedIn}= useAuth();
  useEffect(()=>{
    const logininfo = JSON.parse(localStorage.getItem('userinfo'))
    if(logininfo){
      setIsLoggedIn(logininfo.isLoggedIn);
    }else{
      setIsLoggedIn(false);
    }
   
  },[])


  return (
   <div className="about-us">

   
    <div className="sm:flex items-center max-w-screen-xl">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img src="https://i.imgur.com/WbQnbas.png" alt="About Us" />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
          <h2 className="my-4 font-bold text-3xl sm:text-4xl">
            About <span className="text-indigo-600">Our Company</span>
          </h2>
          <p className="text-gray-700">
           
Discover a transformative learning experience tailored for JEE aspirants at our platform. With meticulously curated chapter-wise question banks, comprehensive study materials, interactive learning tools, realistic practice tests, and expert guidance, we provide the essential resources and support needed to excel in the JEE exam. Join our vibrant community and embark on a journey towards academic excellence and success in the world of engineering.
          </p>
        </div>
      </div>
    </div>
    <div className="max-w-xl mx-auto mb-10 flex w-full flex-col border rounded-lg bg-white p-8">
      <h2 className="title-font mb-1 text-lg font-medium text-gray-900">Feedback</h2>
      <p className="mb-5 leading-relaxed text-gray-600">If you had any issues or you liked our product, please share with us!</p>
      <div className="mb-4">
        <label htmlFor="email" className="text-sm leading-7 text-gray-600">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="text-sm leading-7 text-gray-600">Message</label>
        <textarea
          id="message"
          name="message"
          className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        ></textarea>
      </div>
      <button className="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none" onClick={handleabout}>Send</button>
      <p className="mt-3 text-xs text-gray-500">Feel free to connect with us on social media platforms.</p>
    </div>
    </div>
  );
};

export default AboutUs;
