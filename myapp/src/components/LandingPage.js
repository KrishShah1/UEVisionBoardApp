import React from 'react';
import '../styles/LandingPage.css';

const LandingPage = ({ Create }) => {

  return (
    <div className='landing-page'>
      <img className='background-image' src="images/background.png" alt='UCR Background'></img>
      <div className='text-card'>
        <h1>Welcome to the UCR Undergraduate Education Visioning Space</h1>
        {/* <div className='instructions'>
          <h2>Choose a Theme</h2>
          <h2>Take a Selfie</h2>
          <h2>Customize With Stickers</h2>
          <h2>Print Your Poster</h2>
        </div> */}
        <button onClick={Create}>Create Your Vision</button>
      </div>
    </div>
  );
}

export default LandingPage;
