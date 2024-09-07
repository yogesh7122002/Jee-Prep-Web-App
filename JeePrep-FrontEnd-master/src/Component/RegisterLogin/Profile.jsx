import React from 'react'
import profile from '../Assets/chatbot.png'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Utility/AuthContexProvider';
const Profile = () => {
  const userinfo = JSON.parse(localStorage.getItem('userinfo'));
  // console.log(userinfo.username)
  const navigate = useNavigate();
  const {setIsLoggedIn} = useAuth()
  function handlelogout(){
    localStorage.clear();
    setIsLoggedIn(false)
    navigate('/')
  }
  return (
    <div className='max-w-md mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg mt-10 ' >
      <div className='text-center my-4'>
        <img className='h-28 w-28 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4' src={profile}></img>
       <p className='font-sans text-x text-gray-600 ' ><span className='text-black'>Username:</span>{userinfo?userinfo.username:''}</p>
       <p className='font-sans text-x text-gray-600' ><span className='text-black'>Email : </span>{userinfo?userinfo.useremail:''}</p>
       <p className='font-sans text-x text-gray-600' ><span className='text-black'>Role : </span>{userinfo?userinfo.userrole:''}</p>
      </div>


      <div className="flex gap-2 px-2 mb-14">
                    <button
                        className="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
                        Edit
                    </button>
                    <button
                        className="flex-1 rounded-full border-2 border-gray-400 dark:border-gray-700 font-semibold text-black dark:text-white px-4 py-2" onClick={handlelogout} >
                        Logout
                    </button>
                </div>

    </div>
  )
}

export default Profile
