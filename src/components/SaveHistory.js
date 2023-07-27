// components/SaveHistory.js

import React, { useState } from 'react';

const SaveHistory = ({ history }) => {
  const [savedHistory, setSavedHistory] = useState([]);

  const saveToHistory = () => {
    if (history) {
      setSavedHistory([...savedHistory, history]);
    }
  };

  return (
    <div className="save-history">
      <h2>Save History</h2>
      <button onClick={saveToHistory}>Save History</button>
      {savedHistory.length > 0 && (
        <div className="history-list">
          <h3>Saved History:</h3>
          {savedHistory.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SaveHistory;
