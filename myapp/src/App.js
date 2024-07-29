import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BoardChoice from './components/BoardChoice';
import CameraComponent from './components/CameraComponent';
// import FinalBoard from './components/FinalBoard';
import LandingPage from './components/LandingPage';
import DragAndDrop from './components/DragAndDrop';
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

  const handleBackToCamera = () => {
    setStep('camera');
  };

  // const handleToFinalBoard = () => {
  //   setStep('finalBoard');
  // };

  const handleBackToBoardChoice = () => {
    setStep('boardChoice');
  };

  const handleDragAndDrop = () => {
    setStep('DragAndDrop');
  };

  // const handleBackToFinalBoard = () => {
  //   setStep('finalBoard');
  // };

  const handleBackgroundSelect = (backgroundImage) => {
    setSelectedBackground(backgroundImage);
  };

  return (
    <DndProvider backend={HTML5Backend}>
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
            onConfirm={handleDragAndDrop}
            onBack={handleBackToCamera}
          />
        )}

        {/* {step === 'finalBoard' && (
          <FinalBoard 
            background={selectedBackground} 
            image={selectedImage} 
            onBack={handleBackToBoardChoice} 
            onConfirm={handleDragAndDrop}
          />
        )} */}

        {step === 'DragAndDrop' && (
          <DragAndDrop 
            onBack={handleBackToBoardChoice} 
            background={selectedBackground}
          />
        )}
      </div>
    </DndProvider>
  );
}

export default App;
