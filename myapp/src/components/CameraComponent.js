import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import '../styles/CameraComponent.css';

const CameraComponent = ({ onCapture }) => {

  // const [parentHeight, setParentHeight] = useState(0);
  // useEffect(() => {
  //   const updateParentHeight = () => {
  //     const element = document.querySelector('.camera-container');
  //     const height = element.clientHeight;
  //     setParentHeight(height);
  //   };
  //   updateParentHeight();
  // }, []);
  
  const webcamRef = useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc);
  }, [webcamRef, onCapture]);

  return (
    <div className='camera-page'>
      <div className='header'>
        <h1>Capture Your Vision!</h1>
      </div>
      <div className='body'>
        <div className='left-container'>
          <div className='theme-select'>
              <img className='theme1' src='/images/theme1.png' alt='theme1'></img>
              <img className='theme2' src='/images/theme2.png' alt='theme2'></img>
              <img className='theme3' src='/images/theme3.png' alt='theme3'></img>
              <img className='theme4' src='/images/theme1.png' alt='theme4'></img>
              <img className='theme5' src='/images/theme2.png' alt='theme5'></img>
              <img className='theme6' src='/images/theme3.png' alt='theme6'></img>
              <img className='theme7' src='/images/theme1.png' alt='theme7'></img>
              <img className='theme8' src='/images/theme2.png' alt='theme8'></img>
              <img className='theme9' src='/images/theme3.png' alt='theme9'></img>
              <img className='theme10' src='/images/theme1.png' alt='theme10'></img>
              <img className='them11' src='/images/theme2.png' alt='theme11'></img>
              <img className='theme12' src='/images/theme3.png' alt='theme12'></img>
              <img className='theme13' src='/images/theme1.png' alt='theme13'></img>
              <img className='theme14' src='/images/theme2.png' alt='theme14'></img>
              <img className='theme15' src='/images/theme3.png' alt='theme15'></img>
          </div>
        </div>
        <div className='right-container'>
          <div className='overlay'>
            <Webcam
              className='webcam'
              audio={false} 
              mirrored={true}
              ref={webcamRef}
              // height={parentHeight}
              screenshotFormat="image/jpeg"
              videoConstraints={{
                // height: parentHeight,
                // width: (parentHeight * 11) / 17
                // aspectRatio: 11/17,
                facingMode: "user"
              }}
            />
          </div>
          <svg className='capture-button' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path></svg>        </div>
      </div>
    </div>
  );
};

export default CameraComponent;