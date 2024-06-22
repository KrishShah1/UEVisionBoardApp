import React from 'react';
import Webcam from 'react-webcam';

const CameraComponent = ({ onCapture }) => {
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc);
  }, [webcamRef, onCapture]);

  return (
    <div>
      <h1>Capture your Vision</h1>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={400}
        height={300}
      />
      <button onClick={capture}>Capture</button>
    </div>
  );
};

export default CameraComponent;
