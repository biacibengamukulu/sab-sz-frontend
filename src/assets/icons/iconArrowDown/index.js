import React from 'react';

const iconArrowDown = ({ color = '#2C2D2E', size = 1 }) => {
  return (
    <svg
      width={(size * 8).toString()}
      height={(size * 3).toString()}
      viewBox="0 0 8 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 3L7.4641 0H0.535898L4 3Z" fill={color} />
    </svg>
  );
};

export default iconArrowDown;
