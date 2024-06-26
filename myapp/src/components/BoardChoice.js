import React from 'react';

const BoardChoice = ({ selectedImage, onBackgroundSelect, selectedBackground, onConfirm, onBack }) => {
  const handleBackgroundClick = (background) => {
    onBackgroundSelect(background);
  };

  const publicUrl = process.env.PUBLIC_URL;

  // Set default background to img1 if none is selected
  const backgroundToShow = selectedBackground || `${publicUrl}/img1.png`;

  return (
    <div>
      <h1>Choose Your Board Background</h1>
      <div className="board-choice-container">
        <img
          src={`${publicUrl}/img1.png`}
          alt="Board 1"
          onClick={() => handleBackgroundClick(`${publicUrl}/img1.png`)}
        />
        <img
          src={`${publicUrl}/img2.png`}
          alt="Board 2"
          onClick={() => handleBackgroundClick(`${publicUrl}/img2.png`)}
        />
        <img
          src={`${publicUrl}/img3.png`}
          alt="Board 3"
          onClick={() => handleBackgroundClick(`${publicUrl}/img3.png`)}
        />
      </div>
      <div className="final-board-preview">
        <h2>Your Vision Board Preview</h2>
        <div className="final-board-container">
          <img src={backgroundToShow} alt="Background" />
          <img src={selectedImage} alt="Captured" className="circular-image" />
        </div>
      </div>
      <button onClick={onConfirm}>Confirm</button>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default BoardChoice;
