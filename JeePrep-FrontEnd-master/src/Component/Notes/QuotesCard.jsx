import React, { useEffect, useState } from 'react'
import axios from 'axios'
const QuotesCard = () => {
  const[quote,setquote] = useState()
  const[author,setauthor] = useState()
  useEffect(()=>{ const getquote = async ()=>{
    try {
      const response = await axios.get('https://api.api-ninjas.com/v1/quotes',{params:{category:'inspirational'},headers:{
        'x-Api-Key':'UYTbqBBmn1Ds7oj0utAuIg==bt0O0TYVkMohc94W'
      }});
      // console.log(response.data);
      setquote(response.data[0].quote)
      setauthor(response.data[0].author)
    } catch (error) {
      console.error("Error"+error)
    }
    
}

getquote()},[])
// console.log(quote+" "+author)
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg  ">
      <div className='p-6'>
      <p className="text-gray-700 leading-tight mb-4 text-center">
               {quote}
            </p>
            <p className='text-gray-800 font-semibold text-center '> said by :  {author} </p>
      </div>
    </div>
  )
}

export default QuotesCard
