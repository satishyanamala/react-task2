import React from 'react';
import './Superover.css';

export function Superover (){
  return (
    <div className="super-over-league">
      <h1>Super Over League</h1>
      <div className="teams">
        <div className="team">
          <img
            src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
            alt="RCB"
          />
          <h2>RCB</h2>
        </div>
        <div className="team">
          <img
            src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
            alt="CSK"
          />
          <h2>CSK</h2>
        </div>
      </div>
    </div>
  );
};


