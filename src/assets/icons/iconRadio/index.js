import React from 'react';

const iconRadio = ({ color = '#B6BBC1', size = 1 }) => {
  return (
    <svg
      width={(size * 24).toString()}
      height={(size * 24).toString()}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="23"
        height="23"
        rx="3.5"
        fill="white"
        stroke={color}
      />
    </svg>
  );
};

export default iconRadio;
