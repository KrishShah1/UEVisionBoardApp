import React, { useState } from 'react';
import BoardChoice from './components/BoardChoice';
import CameraComponent from './components/CameraComponent';
import FinalBoard from './components/FinalBoard';
import LandingPage from './components/LandingPage';
// import './App.css';

function App() {
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedBackground, setSelectedBackground] = useState(null);
  const [step, setStep] = useState('start');

  const handleCreateBoard = () => {
    setStep('camera');
  };

  const handleImageCapture = (image) => {
    setSelectedImage(image);
    setStep('boardChoice');
  };

  const handleBackgroundSelect = (backgroundImage) => {
    setSelectedBackground(backgroundImage);
  };

  const handleToFinalBoard = () => {
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
        <LandingPage onCreate={handleCreateBoard} />
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
          onConfirm={handleToFinalBoard}
          onBack={handleBackToCamera}
        />
      )}

      {step === 'finalBoard' && (
        <FinalBoard 
          background={selectedBackground} 
          image={selectedImage} 
          onBack={handleBackToBoardChoice} 
        />
      )}

    </div>
  );
}

export default App;
