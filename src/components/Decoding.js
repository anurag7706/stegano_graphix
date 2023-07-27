// components/Decoding.js

import React, { useState } from 'react';

const Decoding = ({ encodedImage }) => {
  const [decodedMessage, setDecodedMessage] = useState('');

  const decodeMessage = () => {
    const decodedMessage = decodeMessageFromImage(encodedImage);
    setDecodedMessage(decodedMessage);
  };

  const decodeMessageFromImage = (imageData) => {
    // Decode the hidden message from the encoded image.
    // Revert the steganography process to extract the message.

    // Convert the image data to an array of pixel values
    const imageDataArray = Uint8Array.from(atob(imageData.split(',')[1]), (c) =>
      c.charCodeAt(0)
    );

    // Extract the least significant bit from each pixel value to form the binary message
    let binaryMessage = '';
    for (let i = 0; i < imageDataArray.length; i++) {
      const bit = imageDataArray[i] & 1;
      binaryMessage += bit;
    }

    // Convert the binary message to characters
    let decodedMessage = '';
    for (let i = 0; i < binaryMessage.length; i += 8) {
      const charCode = parseInt(binaryMessage.substr(i, 8), 2);
      decodedMessage += String.fromCharCode(charCode);
    }

    return decodedMessage;
  };

  return (
    <div className="decoding">
      <h2>Decoding</h2>
      <button onClick={decodeMessage}>Decode Message</button>
      {decodedMessage && (
        <div className="decoded-message">
          <h3>Decoded Message:</h3>
          <p>{decodedMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Decoding;
