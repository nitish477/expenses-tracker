import React from 'react'
import './Card.css'

function Card({amount,category,type,decsription,date,time,remove,_id,edit}) {
  return (
    <div className='transaction-card'>
        <h2 className={`${type==='debit'? 'red':'green'} amount`}>{amount}</h2>
        <p className='category'>{category}</p>
        <hr/>
        <p className='note'>{decsription} </p>
         <span className='date'>{date}</span>
         <span className='time'>{time}</span>
         <span className={`${type==='debit'?'red':'green'} type`}>{type}</span>

         <span className='remove'  onClick={()=>{remove(_id)}}>❌</span>
         <span className='edit'  onClick={()=>{edit(_id)}}>📝</span>
         
    </div>
  )
}

export default Card
