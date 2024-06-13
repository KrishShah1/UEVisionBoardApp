import React from 'react';

const BoardChoice = ({ selectedImage, onImageSelect }) => {
  const handleImageClick = (image) => {
    onImageSelect(image);
  };

  const publicUrl = process.env.PUBLIC_URL;

  // Inline style for images
  const imageStyle = { width: '300px', height: '300px' };

  return (
    <div>
      <h1>Board Choice</h1>
      <div>
        <img
          style={imageStyle}
          src={`${publicUrl}/img1.png`}
          alt="Board 1"
          onClick={() => handleImageClick(`${publicUrl}/img1.png`)}
        />
        <img
          style={imageStyle}
          src={`${publicUrl}/img2.png`}
          alt="Board 2"
          onClick={() => handleImageClick(`${publicUrl}/img2.png`)}
        />
        <img
          style={imageStyle}
          src={`${publicUrl}/img3.png`}
          alt="Board 3"
          onClick={() => handleImageClick(`${publicUrl}/img3.png`)}
        />
      </div>
    </div>
  );
};

export default BoardChoice;