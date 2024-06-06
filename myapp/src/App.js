import React from 'react';
import './App.css';
import StickerChoice from './components/stickerchoice'; // Import StickerChoice component

function App() {
  return (
    <div className="App">
      <div className="vision-board">
        <h1>My Vision Board</h1>
        <div className="vision-item">
          <img src="image1.jpg" alt="Vision 1" />
          <p>My first vision</p>
        </div>
        <div className="vision-item">
          <img src="image2.jpg" alt="Vision 2" />
          <p>My second vision</p>
        </div>
        <div className="vision-item">
          <img src="image3.jpg" alt="Vision 3" />
          <p>My third vision</p>
        </div>
      </div>
      <StickerChoice /> {/* Include StickerChoice component */}
    </div>
  );
}

export default App;