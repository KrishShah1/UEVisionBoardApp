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
          <h2>Chosen Board Style:</h2>
          <img src={selectedImage} alt="Selected" />

          <h1> ADD CODE AND TEXT </h1>
        </div>
      )}
    </div>
  );
}

export default App;
