// components/ImageUploader.js

import React from 'react';
import Dropzone from 'react-dropzone';

const ImageUploader = ({ setImageFile }) => {
  const handleDrop = (acceptedFiles) => {
    setImageFile(acceptedFiles[0]);
  };

  return (
    <Dropzone onDrop={handleDrop} accept="image/*">
      {({ getRootProps, getInputProps }) => (
        <div className="image-uploader" {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag & drop an image here, or click to select one.</p>
        </div>
      )}
    </Dropzone>
  );
};

export default ImageUploader;
