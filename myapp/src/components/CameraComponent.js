import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import '../styles/CameraComponent.css';

const CameraComponent = ({ onCapture }) => {

  const publicUrl = process.env.PUBLIC_URL;

  const [parentHeight, setParentHeight] = useState(0);
  useEffect(() => {
    const updateParentHeight = () => {
      const element = document.querySelector('.camera-container');
      const height = element.clientHeight;
      setParentHeight(height);
    };
    updateParentHeight();
  }, []);
  
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
      <div className='camera-container'>
        <Webcam
          className='webcam'
          audio={false} 
          mirrored={true}
          ref={webcamRef}
          // height={parentHeight}
          screenshotFormat="image/jpeg"
          videoConstraints={{
            height: parentHeight,
            // width: (parentHeight * 11) / 17
            aspectRatio: 11/17,
            facingMode: "user"
          }}
        />
        <img className='capture-button' src={`${publicUrl}/capture.png`} alt='Capture Button' onClick={capture}></img>
      </div>
    </div>
  );
};

export default CameraComponent;