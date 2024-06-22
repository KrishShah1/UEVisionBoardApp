import React, { useState } from 'react';
import BoardChoice from './components/BoardChoice';
import CameraComponent from './components/CameraComponent';
import './App.css';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [step, setStep] = useState('start');

  const handleImageCapture = (image) => {
    setSelectedImage(image);
    setStep('boardChoice');
  };

  return (
    <div className="App">
      {step === 'start' && (
        <div>
          <h1>Start Your Vision Board</h1>
          <button onClick={() => setStep('camera')}>Start</button>
        </div>
      )}
      {step === 'camera' && <CameraComponent onCapture={handleImageCapture} />}
      {step === 'boardChoice' && (
        <div>
          <h1>Choose your Design</h1>
          <BoardChoice selectedImage={selectedImage} onImageSelect={setSelectedImage} />
          {selectedImage && (
            <div>
              <h2>Chosen Board Style:</h2>
              <div className="overlay-container">
                <img className="background-image" src={process.env.PUBLIC_URL + '/boardBackground.png'} alt="Background" />
                <img className="circular-image" src={selectedImage} alt="Selected" />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
