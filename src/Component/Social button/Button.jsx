import React from 'react';
import './Button.css';

export function Button () {
  return (
    <div className="social-buttons-container">
      <h1>Social Button</h1>
      <div className="button">
        <button className="button like">Like</button>
        <button className="button comment">Comment</button>
        <button className="button share">Share</button>
      </div>
    </div>
  );
};

