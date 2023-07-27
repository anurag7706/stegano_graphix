// components/Steganography.js

import React, { useState } from 'react';

const MAX_IMAGE_SIZE = 5000000; // Maximum allowed image size in bytes (5 MB)
const MAX_MESSAGE_LENGTH = 1000; // Maximum allowed secret message length in characters

const Steganography = ({ imageFile, secretMessage, setEncodedImage }) => {
  const [loading, setLoading] = useState(false);

  const encodeMessage = async () => {
    setLoading(true);
    const imageData = await getImageData(imageFile);
    const encodedImage = encodeMessageInImage(imageData, secretMessage);
    setEncodedImage(encodedImage);
    setLoading(false);
  };

  const getImageData = (file) => {
    return new Promise((resolve, reject) => {
      if (file.size > MAX_IMAGE_SIZE) {
        alert('Image size exceeds the maximum allowed limit (5 MB).');
        reject('Image size exceeds limit');
      }

      const reader = new FileReader();
      reader.onload = () => {
        const imageData = reader.result;
        resolve(imageData);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const encodeMessageInImage = (imageData, message) => {
    // Limit the message length to avoid excessive data processing
    if (message.length > MAX_MESSAGE_LENGTH) {
      alert('Message length exceeds the maximum allowed limit (1000 characters).');
      return;
    }

    // Convert the message to binary format
    const binaryMessage = message
      .split('')
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, '0'))
      .join('');

    // Convert the image data to an array of pixel values
    const imageDataArray = Uint8Array.from(atob(imageData.split(',')[1]), (c) =>
      c.charCodeAt(0)
    );

    // Check if the message can fit into the image
    if (binaryMessage.length * 3 > imageDataArray.length) {
      alert('Message is too large to fit in the image.');
      return;
    }

    // Hide the message in the least significant bits of the pixel values
    for (let i = 0; i < binaryMessage.length; i++) {
      const bit = binaryMessage.charAt(i);
      imageDataArray[i] = (imageDataArray[i] & 0xfe) | Number(bit);
    }

    // Convert the modified pixel values back to base64 image data
    const modifiedImageData = btoa(
      String.fromCharCode.apply(null, imageDataArray)
    );

    return `data:image/jpeg;base64,${modifiedImageData}`;
  };

  return (
    <div className="steganography">
      <h2>Steganography</h2>
      <button onClick={encodeMessage} disabled={loading}>
        {loading ? 'Encoding...' : 'Encode Message'}
      </button>
    </div>
  );
};

export default Steganography;
