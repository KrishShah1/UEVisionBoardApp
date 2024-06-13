import React, { useState } from 'react';
import BoardChoice from './components/BoardChoice';
import './App.css';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
      <h1>Choose your Design</h1>
      <BoardChoice selectedImage={selectedImage} onImageSelect={setSelectedImage} />
      {selectedImage && (
        <div>
          <h2>Selected Board Style:</h2>
          <img src={selectedImage} alt="Selected" />
        </div>
      )}
    </div>
  );
}

export default App;
