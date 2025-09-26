import React from 'react';

const iconCircularRadio = ({ color = '#B6BBC1', size = 1 }) => {
  return (
    <svg
      width={(size * 24).toString()}
      height={(size * 24).toString()}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="11.5" fill="white" stroke={color} />
    </svg>
  );
};

export default iconCircularRadio;
