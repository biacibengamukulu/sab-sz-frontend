import React from 'react';

const iconMarker = ({ color = '#FFFFFF', size = 1 }) => {
  return (
    <svg
      width={(size * 16).toString()}
      height={(size * 22).toString()}
      viewBox="0 0 16 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0.5C3.8585 0.5 0.5 3.8585 0.5 8C0.5 14 8 21.5 8 21.5C8 21.5 15.5 14 15.5 8C15.5 3.8585 12.1415 0.5 8 0.5ZM8 11C6.3425 11 5 9.6575 5 8C5 6.3425 6.3425 5 8 5C9.6575 5 11 6.3425 11 8C11 9.6575 9.6575 11 8 11Z"
        fill={color}
      />
    </svg>
  );
};

export default iconMarker;
