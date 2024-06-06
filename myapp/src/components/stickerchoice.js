/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';

const StickerChoice = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div>
            <h1>Sticker Choice</h1>
            <div>
                <img
                    src="/path/to/image1.jpg"
                    alt="Image 1"
                    onClick={() => handleImageClick("/path/to/image1.jpg")}
                />
                <img
                    src="/path/to/image2.jpg"
                    alt="Image 2"
                    onClick={() => handleImageClick("/path/to/image2.jpg")}
                />
                <img
                    src="/path/to/image3.jpg"
                    alt="Image 3"
                    onClick={() => handleImageClick("/path/to/image3.jpg")}
                />
                <img
                    src="/path/to/image4.jpg"
                    alt="Image 4"
                    onClick={() => handleImageClick("/path/to/image4.jpg")}
                />
            </div>
            {selectedImage && (
                <div>
                    <h2>Selected Image:</h2>
                    <img src={selectedImage} alt="Selected Image" />
                </div>
            )}
        </div>
    );
};

export default StickerChoice;