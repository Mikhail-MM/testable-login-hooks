import React, { useState, useEffect } from 'react';

import 'normalize.css'
import './App.css';

const initialState = {
  firstName: "First Name",
  lastName: "Last Name"
}

const Form = () => {
  const [inputState, setInputState] = useState(initialState);
  const [windowWidth, setWidth] = useState(window.innerWidth);

  const handleChange = (event)  => {
    // LOL
    const { 
      target: { 
        value,
        dataset: { name } 
      }
    } = event;
    const newState = Object.assign(
      {},
      {...inputState},
      {[name]: value}
    )
    setInputState(newState)
  }

  const handleResize = () => setWidth(window.innerWidth)

  useEffect(() => {
    console.log(inputState)
  })

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    // If an effect returns a function, react will call it on UnMount, 
    // This is appropriate for ending subscriptions
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })


  return (
    <div className="App">
      <form className="testable-form">
        <input type="text" data-name="firstName"
          value={inputState.firstName}
          onChange={handleChange}
        />
        <input type="text" data-name="lastName"
          value={inputState.lastName}
          onChange={handleChange}
        />
      </form>
      <div>
        {`Width: ${windowWidth}`}
      </div>
    </div>
  );
}

export default Form;
