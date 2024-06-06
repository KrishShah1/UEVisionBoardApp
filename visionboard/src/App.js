import React from 'react';
import Draggable from 'react-draggable';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Draggable>
          <img src={logo} className="App-logo" alt="logo" />
        </Draggable>
      </header>
    </div>
  );
}

export default App;
