import React from 'react';

const iconPause = ({ color = '#FFFFFF', size = 1 }) => {
  return (
    <svg
      width={(size * 20).toString()}
      height={(size * 20).toString()}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="5" height="20" rx="1" fill={color} />
      <rect x="15" width="5" height="20" rx="1" fill={color} />
    </svg>
  );
};

export default iconPause;
