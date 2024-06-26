import React, { useState } from 'react';
import BoardChoice from './components/BoardChoice';
import CameraComponent from './components/CameraComponent';
import FinalBoard from './components/FinalBoard';
import './App.css';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedBackground, setSelectedBackground] = useState(null);
  const [step, setStep] = useState('start');

  const handleImageCapture = (image) => {
    setSelectedImage(image);
    setStep('boardChoice');
  };

  const handleBackgroundSelect = (backgroundImage) => {
    setSelectedBackground(backgroundImage);
  };

  const handleConfirm = () => {
    setStep('finalBoard');
  };

  const handleBackToBoardChoice = () => {
    setStep('boardChoice');
  };

  const handleBackToCamera = () => {
    setStep('camera');
  };

  return (
    <div className="App">
      {step === 'start' && (
        <div>
          <h1>Start Your Vision Board</h1>
          <button onClick={() => setStep('camera')}>Start</button>
        </div>
      )}
      {step === 'camera' && (
        <div className="webcam-container">
          <CameraComponent onCapture={handleImageCapture} />
        </div>
      )}
      {step === 'boardChoice' && (
        <BoardChoice
          selectedImage={selectedImage}
          onBackgroundSelect={handleBackgroundSelect}
          selectedBackground={selectedBackground}
          onConfirm={handleConfirm}
          onBack={handleBackToCamera}
        />
      )}
      {step === 'finalBoard' && (
        <FinalBoard background={selectedBackground} image={selectedImage} onBack={handleBackToBoardChoice} />
      )}
    </div>
  );
}

export default App;
