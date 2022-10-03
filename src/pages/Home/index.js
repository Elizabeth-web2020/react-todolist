import React, { useState } from 'react';

import './style.css';

function Home({ userName, setUserName }) {
  const [submitedForm, setSubmitedForm] = useState(false);
  
  return (
    <>
      { submitedForm && userName
      ? <h3 className='home-name'>Your Name: {userName}</h3> 
      : <div className='home-form'>
          <label>Enter Your Name:</label>
          <input type='text' name='userName' placeholder='Enter the name...' onChange={(e) => setUserName(e.target.value)} />
          <button className='btn-submit' type='submit' onClick={() => setSubmitedForm(true)}>Submit</button>
        </div> }
    </>
  )
}

export default Home;
