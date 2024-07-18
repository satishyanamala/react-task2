import React from 'react';
import './Notification.css';

export function Notification (){
  return (
    <div className="notifications-container">
      <div className="notification info">
        <span className="icon">ℹ️</span>
        Information Message
      </div>
      <div className="notification success">
        <span className="icon">✔️</span>
        Success Message
      </div>
      <div className="notification warning">
        <span className="icon">⚠️</span>
        Warning Message
      </div>
      <div className="notification error">
        <span className="icon">❌</span>
        Error Message
      </div>
    </div>
  );
};

