import React,{useContext} from 'react'
import{Link} from 'react-router-dom'
import { AppState } from '../App'


const Card = () => {
  
  const user = useContext(AppState)
  
  return (
    <div className='flex justify-around flex-wrap mt-2 m-10 '>
      {user.map((e)=>{
        
        
        return(
          <div className='card text-yellow-100 p-3 border-b-emerald-700 mt-3 cursor-pointer w-52  overflow-hidden h-80 m-4  ' key={e.id}>
            <img src={`https://picsum.photos/200?random=$%7Bpost.id%7D${e.id}`} alt="" />
            <p ><span className='text-gray-400 px-1 ' >user Id:</span>{e.id}</p>
            <p ><span className='text-gray-400 px-1 ' >Title:</span>{e.title.slice(0,15)}...</p>
            <p ><span  className='text-gray-400 px-1 '>body:</span>{e.body.slice(0,30)}</p>
            <Link to={`/detail/${e.id}`}>
            <span className='text-blue-500 underline'>Read more...</span>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Card