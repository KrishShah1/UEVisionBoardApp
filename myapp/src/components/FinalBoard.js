import React from 'react';
import '../styles/FinalBoard.css';

const FinalBoard = ({ background, image, onBack, onConfirm }) => {
  return (
    <div className="final-board">

      <div className="final-board-container">
        <img src={background} alt="Background" />
        <img src={image} alt="Captured" className="circular-image" />
      </div>
      
      <button onClick={onBack}>Back</button>
      <button onClick={onConfirm}>Confirm</button>

    </div>
  );
};

export default FinalBoard;
