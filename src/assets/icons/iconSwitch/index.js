import React from 'react';

const iconSwitch = ({ color = '#FFFFFF', size = 1 }) => {
  return (
    <svg
      width={(size * 38).toString()}
      height={(size * 38).toString()}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="18" r="18" fill={color} />
    </svg>
  );
};

export default iconSwitch;
