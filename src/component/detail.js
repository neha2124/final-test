import React, { useContext } from 'react'
import { AppState } from '../App'
import { useParams } from 'react-router-dom'


const Detail = () => {
  const data = useContext(AppState)
  const { id } = useParams()

  const val = data.filter((e) => {
    return e.id == id
  })

  return (
    <>
    {val.map((e)=>{
      return(
        <div className='card text-yellow-100 p-3  mt-3 m-4    ' key={e.id}>
            <img src={`https://picsum.photos/200?random=$%7Bpost.id%7D${e.id}`} alt="" />
            <p ><span className='text-gray-400 px-1 ' >user Id:</span>{e.id}</p>
            <p ><span className='text-gray-400 px-1 ' >Title:</span>{e.title}</p>
            <p ><span  className='text-gray-400 px-1 '>body:</span>{e.body}</p>
            </div>
      )
    })}
    </>

        )
      }

export default Detail