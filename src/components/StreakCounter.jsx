import React from 'react';
import './StreakCounter.css';

const StreakCounter = ({ streak }) => {
  return (
    <div className="streak-counter">
      <h2>
        Streak
        <img
          src="/assets/streak1.png" // Replace with your streak image path
          alt="Streak Icon"
          className="streak-icon"
        />
        : {streak}
      </h2>
    </div>
  );
};

export default StreakCounter;
