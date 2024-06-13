import React from 'react';
import './App.css';
import img1 from './public/img1.png';
import img2 from './public/img2.png';
import img3 from './public/img3.png';

function App() {
  return (
    <div className="App">
      <div className="vision-board">
        <h1>My Vision Board</h1>
        <div className="vision-item">
          <img src={img1} alt="Vision 1" />
          <p>My first vision</p>
        </div>
        <div className="vision-item">
          <img src={img2} alt="Vision 2" />
          <p>My second vision</p>
        </div>
        <div className="vision-item">
          <img src={img3} alt="Vision 3" />
          <p>My third vision</p>
        </div>
      </div>
    </div>
  );
}

export default App;
