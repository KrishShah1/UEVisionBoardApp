import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import '../styles/CameraPage.css';

const CameraPage = ({ Confirm }) => {

  const [selectedTheme, setSelectedTheme] = useState('/images/themes/theme1.png');
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
    // setSelectedTheme('/images/theme3.png');
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

  const importImages = (r) => {
    return r.keys().map(r);
  };
  
  const themes = importImages(require.context('../../public/images/themes', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className='camera-page'>
      <div className='header'>
        <h1>Capture Your Vision!</h1>
      </div>
      <div className='body'>
        <div className='left-container'>
          <div className='theme-select'>   
            {themes.map((theme, index) => (
              <img key={index} src={theme} alt={`image-${index}`} onClick={updateTheme}/>
            ))}
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