// src/App.js

import React, { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import MessageInput from './components/MessageInput';
import Steganography from './components/Steganography';
import ImagePreview from './components/ImagePreview';
import Encryption from './components/Encryption';
import Decoding from './components/Decoding';
import './App.css';

function App() {
  const [imageFile, setImageFile] = useState(null);
  const [secretMessage, setSecretMessage] = useState('');
  const [encodedImage, setEncodedImage] = useState(null);

  return (
    <div className="app">
      <h1>Image Steganography App</h1>
      <ImageUploader setImageFile={setImageFile} />
      {imageFile && <ImagePreview imageFile={imageFile} />}
      <MessageInput setSecretMessage={setSecretMessage} />
      <Steganography
        imageFile={imageFile}
        secretMessage={secretMessage}
        setEncodedImage={setEncodedImage}
      />
      {encodedImage && <ImagePreview imageFile={encodedImage} />}
      <Encryption encodedImage={encodedImage} setEncodedImage={setEncodedImage} />
      <Decoding encodedImage={encodedImage} />
    </div>
  );
}

export default App;
