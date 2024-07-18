import React from 'react';
import './Card.css';

export function Card() {
  return (
    <div className="congrats-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-bg.png"
        alt="congrats background"
        className="background-img"
      />
      <div className="card-content">
        <h1>Congratulations</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          alt="profile"
          className="profile-img"
        />
        <h2>Kiran V</h2>
        <p>Vishnu Institute of Computer Education and Technology</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          alt="watch"
          className="watch-img"
        />
      </div>
    </div>
  );
};


