// components/Encryption.js

import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

const Encryption = ({ encodedImage, setEncodedImage }) => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const encryptImage = () => {
    if (!password) {
      alert('Please enter a password for encryption.');
      return;
    }

    const encryptedImageData = encryptImageWithPassword(encodedImage, password);
    setEncodedImage(encryptedImageData);
  };

  const encryptImageWithPassword = (imageData, password) => {
    // Encrypt the image data using the provided password.
    // We'll use AES encryption from the crypto-js library.

    const encryptedData = CryptoJS.AES.encrypt(imageData, password).toString();
    return encryptedData;
  };

  return (
    <div className="encryption">
      <h2>Encryption</h2>
      <input
        type="password"
        placeholder="Enter password for encryption"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={encryptImage}>Encrypt Image</button>
    </div>
  );
};

export default Encryption;
