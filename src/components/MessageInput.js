// components/MessageInput.js

import React from 'react';

const MessageInput = ({ setSecretMessage }) => {
  const handleInputChange = (event) => {
    setSecretMessage(event.target.value);
  };

  return (
    <div className="message-input">
      <h2>Enter Secret Message:</h2>
      <textarea
        onChange={handleInputChange}
        placeholder="Type your secret message here..."
        rows="4"
      />
    </div>
  );
};

export default MessageInput;
