import React from 'react';

const FinalBoard = ({ background, image, onBack }) => {
  return (
    <div className="final-board">
      <div className="final-board-container">
        <img src={background} alt="Background" />
        <img src={image} alt="Captured" className="circular-image" />
      </div>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default FinalBoard;
