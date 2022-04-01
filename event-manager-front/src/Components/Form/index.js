import React from 'react';
import './index.css';

function Form({formSubmit}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    let name = event.target.name.value
    let description = event.target.description.value
    let startDate = event.target.startDate.value
    let endDate = event.target.endDate.value
    formSubmit(name, description, endDate, startDate)
  }

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input name="name" type="text"/>
        </label>
        <label>
          Start Date:
          <input name="startDate" type="date"/>
        </label>
        <label>
          End Date:
          <input name="endDate" type="date"/>
        </label>
        <label>
          Description:
          <input name="description" type="text"/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Form;
