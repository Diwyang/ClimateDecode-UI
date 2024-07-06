import React from 'react';
import './style.scss';

const Progress: React.FC<{
  value: number;
  text: any;
}> = ({ value, text }) => {
  return (
    <div className="progress-bar-wrapper">
      <div className="progress-bar" style={{ width: `${value}%` }}>
        <span className="left-text">{text}</span>
        <span className="right-text">{value}%</span>
      </div>
    </div>
  );
};

export default Progress;
