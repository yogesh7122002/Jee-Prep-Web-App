    // import React from "react";
    // import { useNavigate } from "react-router-dom";
    // const MockQuizeStart = ()=>{
    //     const navigate = useNavigate()
    //     function handlebtn(){
    //         navigate('/quize-now')
    //     }
    // return <div>
        
    //     <div className="subject-card bg-green-400 w-11 ">
    //     <button onClick={handlebtn}>Solve Now</button>
    //     </div>
    // </div>
    // }
    // export default MockQuizeStart



  import React from 'react';
import logo from '../Assets/logo2.png'
import rule from '../Assets/quizedemo.png';
import { useNavigate } from 'react-router-dom';

const MockQuizeStart = () => {
  const navigate = useNavigate();
     function handlebtn(){
        navigate('/quize-now')
     }   
  return (
    <div className='flex h-screen'>
      <div className="left-section w-1/2 shadow-lg h-full fixed overflow-x-hidden bg-white">
        <img src={logo} className='w-60 mx-10 mt-10' alt="Logo" />
        <p className='ml-10 mt-10'>Hey, Tushar</p>
        <p className='ml-10 mt-6 font-serif font-bold text-3xl leading-relaxed'>
          Welcome to <br /> JeePrep MockTest<br />(Physics, Chemistry, Mathematics)
        </p>
        <div className='flex ml-10 mt-20'>
          <div className='mr-10'>
            <p className='text-gray-400'>Test Duration</p>
            <p className='text-gray-600'>90 mins</p>
          </div>
          <div>
            <p className='text-gray-400'>No. of questions</p>
            <p className='text-gray-600'>60 questions</p>
          </div>
        </div>
      </div>
      <div className="right-section bg-zinc-50 shadow-sm w-1/2 ml-auto">
        <div className="instruction-list mt-40">
          <p className='font-sans text-3xl ml-12 text-stone-600'>Instructions</p>
          <ul className='list-decimal ml-16 mt-4 space-y-2'>
            <li>This is a timed test. Please make sure you are not interrupted during the test, as the timer cannot be paused once started.</li>
            <li>Please ensure you have a stable internet connection.</li>
          </ul>
          <div className="rule-view">
            <img src={rule} className='px-10 my-8' alt="Rules" />
            <p className='bg-green-300 w-32  px-2 py-1 ml-12  inline-flex rounded-md '>Save And Next</p><span className='ml-1 text-sm'>This button will save your option make question Number green</span><br></br>
     <p className='bg-orange-300 w-44  px-1 py-1 ml-12  inline-flex rounded-md '>Save And Mark review</p><span className='ml-1 text-sm'>This button will save your option make question Number Purple</span>
          </div>
        </div>

        <div className="subject-section mt-8">
          <p className='font-sans text-3xl ml-12 text-stone-600 mt-20'>Sections</p>
          <p className='ml-12'>There are 3 sections that are part of this test.</p>
          <div className="subject-table shadow-lg ml-12 w-4/6 mt-4">
            <p className='h-12 pt-3 text-slate-400'><span className='pl-8 pr-12'>Number</span> <span className='pl-8 pr-14'>Section</span> <span className='pl-8'>Questions</span> </p>
            <div className="bg-zinc-100">
              <hr className='px-20' />
              <div className='h-12 flex items-center'>
                <span className='pl-10 pr-12'>1</span> <span className='pl-20 pr-14'>Physics</span> <span className='pl-16'>20</span>
              </div>
              <hr />
              <div className='h-12 flex items-center'>
                <span className='pl-10 pr-12'>2</span> <span className='pl-20 pr-14'>Chemistry</span> <span className='pl-12'>20</span>
              </div>
              <hr />
              <div className='h-12 flex items-center'>
                <span className='pl-10 pr-12'>3</span> <span className='pl-20 pr-14'>Mathematics</span> <span className='pl-8'>20</span>
              </div>
            </div>
          </div>
        </div>
        <button className='bg-green-600 px-3 py-2 rounded-sm text-white font-bold font-sans ml-12 my-14' onClick={handlebtn} >Start Now</button>
      </div>
      
    </div>
  );
}

export default MockQuizeStart;
