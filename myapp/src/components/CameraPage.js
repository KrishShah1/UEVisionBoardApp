import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import '../styles/CameraPage.css';

const CameraPage = ({ Confirm }) => {

  const [selectedTheme, setSelectedTheme] = useState('/images/theme3.png');
  const [selectedSelfie, setSelectedSelfie] = useState(null);
  const [countdown, setCountdown] = useState(0);
  const webcamRef = useRef(null);

  const updateTheme = (event) => {
    let imgSrc = event.target.src;
    setSelectedTheme(imgSrc);
  }

  const reset = () => {
    let retakeButton = document.querySelector(".retake");
    let confirmButton = document.querySelector(".confirm"); 
    let captureButton = document.querySelector(".capture-button"); 
    retakeButton.classList.add('hidden');
    confirmButton.classList.add('hidden');
    captureButton.classList.remove('hidden');
    setSelectedTheme('/images/theme3.png');
    setSelectedSelfie('');
  }

  const startCountdown = () => {
    setCountdown(3); // Start countdown from 3 seconds

    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          clearInterval(countdownInterval);
          capture(); // Capture the image when the countdown reaches 0
          return null; // Reset countdown
        }
        return prevCountdown - 1;
      });
    }, 1000); // Decrease countdown every second
  };

  const capture = () => {
    let retakeButton = document.querySelector(".retake");
    let confirmButton = document.querySelector(".confirm"); 
    let captureButton = document.querySelector(".capture-button"); 
    retakeButton.classList.remove('hidden');
    confirmButton.classList.remove('hidden');
    captureButton.classList.add('hidden');
    const webcamSrc = webcamRef.current.getScreenshot();
    setSelectedSelfie(webcamSrc);
    // do smth with Image
    // show confirm button
  }

  const handleConfirm = () => {
    Confirm(selectedSelfie, selectedTheme);
  }

  return (
    <div className='camera-page'>
      <div className='header'>
        <h1>Capture Your Vision!</h1>
      </div>
      <div className='body'>
        <div className='left-container'>
          <div className='theme-select'>              
              <img className='theme1' src='/images/theme1.png' alt='theme1' onClick={updateTheme}></img>
              <img className='theme2' src='/images/theme2.png' alt='theme2' onClick={updateTheme}></img>
              <img className='theme3' src='/images/theme3.png' alt='theme3' onClick={updateTheme}></img>
              <img className='theme4' src='/images/theme1.png' alt='theme4' onClick={updateTheme}></img>
              <img className='theme5' src='/images/theme2.png' alt='theme5' onClick={updateTheme}></img>
              <img className='theme6' src='/images/theme3.png' alt='theme6' onClick={updateTheme}></img>
              <img className='theme7' src='/images/theme1.png' alt='theme7' onClick={updateTheme}></img>
              <img className='theme8' src='/images/theme2.png' alt='theme8' onClick={updateTheme}></img>
              <img className='theme9' src='/images/theme3.png' alt='theme9' onClick={updateTheme}></img>
              <img className='theme10' src='/images/theme1.png' alt='theme10' onClick={updateTheme}></img>
              <img className='theme11' src='/images/theme2.png' alt='theme11' onClick={updateTheme}></img>
              <img className='theme12' src='/images/theme3.png' alt='theme12' onClick={updateTheme}></img>
              <img className='theme13' src='/images/theme1.png' alt='theme13' onClick={updateTheme}></img>
              <img className='theme14' src='/images/theme2.png' alt='theme14' onClick={updateTheme}></img>
              <img className='theme15' src='/images/theme3.png' alt='theme15' onClick={updateTheme}></img>
          </div>
        </div>
        <div className='right-container'>
          <div className='overlay-container'>
            {selectedSelfie ? (
              <img className='selfie' src={selectedSelfie} key={selectedSelfie}></img>
            ) : (
              <Webcam
                className='webcam'
                audio={false} 
                mirrored={true}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={{
                  // height: parentHeight,
                  // width: (parentHeight * 11) / 17
                  // aspectRatio: 11/17,
                  facingMode: "user"
                }}
              />
            )}
            <img className='overlay-theme' src={selectedTheme} key={selectedTheme}></img>
            <svg className='capture-button' onClick={startCountdown} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path></svg>
            {countdown !== null && countdown > 0 && (<div className="countdown-animation">{countdown}</div>)}
          </div>
          <button className='hidden side retake' onClick={reset}>Retake</button>
          <button className='hidden side confirm' onClick={handleConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );

};

export default CameraPage;