import React from 'react';
import './index.css';

function Card({event}) {

  const changeDate = (date) => {
    const offset = new Date(date).getTimezoneOffset()
    const displayLocal = new Date( new Date(date).getTime() + offset *60*1000);
    return displayLocal.toISOString().split('T')[0]
  }
//   const offset = yourDate.getTimezoneOffset()
// yourDate = new Date(yourDate.getTime() - (offset*60*1000))
// return yourDate.toISOString().split('T')[0]

  return (
    <div className='card'>
      <h1>{event.name}</h1>
      <p>{changeDate(event.startDate)}</p>
      <p>{changeDate(event.endDate)}</p>
      <p>{event.description}</p>
    </div>
  )
}

export default Card;
