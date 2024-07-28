import React, { useState } from 'react';
import BoardChoice from './components/BoardChoice';
import CameraComponent from './components/CameraComponent';
import FinalBoard from './components/FinalBoard';
import LandingPage from './components/LandingPage';
// import './App.css';

function App() {

  const [step, setStep] = useState('start');
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageCapture = (image) => {
    setSelectedImage(image);
    setStep('boardChoice');
  };

  const handleCreateBoard = () => {
    setStep('camera');
  };

  // const handleBackgroundSelect = (backgroundImage) => {
  //   setSelectedBackground(backgroundImage);
  // };

  // const handleToFinalBoard = () => {
  //   setStep('finalBoard');
  // };

  // const handleBackToBoardChoice = () => {
  //   setStep('boardChoice');
  // };

  // const handleBackToCamera = () => {
  //   setStep('camera');
  // };

  return (
    <div className="App">

      {step === 'start' && (
        <LandingPage onCreate={handleCreateBoard} />
      )}

      {step === 'camera' && (
          <CameraComponent onCapture={handleImageCapture} />
      )}

      {/* {step === 'boardChoice' && (
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
      )} */}

    </div>
  );
}

export default App;
