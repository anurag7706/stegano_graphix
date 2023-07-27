// components/ImagePreview.js

import React from 'react';

const ImagePreview = ({ imageFile }) => {
  const imageUrl = URL.createObjectURL(imageFile);

  return (
    <div className="image-preview">
      <h2>Image Preview</h2>
      <img src={imageUrl} alt="Preview" />
    </div>
  );
};

export default ImagePreview;
