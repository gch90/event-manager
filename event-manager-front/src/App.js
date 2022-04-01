import './App.css';
import React, { useState, useEffect } from 'react';
import Card from './Components/Cards'
import {getAllEvents, createEvent } from './Actions/Event'
import Form from './Components/Form';

function App() {

  const [list, setList] = useState()
  const [res, setRes] = useState()

  const formSubmit = (name, description, endDate, startDate) => {
    async function generateEvent() {
      const event = await createEvent(name, description, endDate, startDate);
      // console.log(event);
      setRes(event)
    }
    generateEvent();
  }

  useEffect(() => {
    async function getEvents() {
      const list = await getAllEvents();
      setList(list)
    }
    getEvents();
  }, [res]);

  const displayList = () => {
    if (!list) {
      return <div>loading...</div>
    }
    return (
      <div className='grid'>
        {list.events.map( (event) => (
          <Card event={event} />
        ))}
      </div>
    )
  }

  return (
    <div>
      < Form formSubmit={formSubmit} />
      {displayList()}

    </div>
  );
}

export default App;
