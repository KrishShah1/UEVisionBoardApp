import React from 'react';
import '../styles/LandingPage.css';

const LandingPage = ({onCreate}) => {

  const publicUrl = process.env.PUBLIC_URL;

  return (
    <div className='landing-page'>
      <img className='background-image' src={`${publicUrl}/background.png`} alt='UCR Background'></img>
      <div className='text-card'>
        <h1>Welcome to the UCR Undergraduate Education Visioning Space</h1>
        <button onClick={onCreate}>Create Your Vision</button>
      </div>
    </div>
  );
}

export default LandingPage;
