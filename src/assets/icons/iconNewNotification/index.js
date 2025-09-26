import React from 'react';

const iconNewNotification = ({ color = '#FF2D55', size = 1 }) => {
  return (
    <svg
      width={(size * 6).toString()}
      height={(size * 6).toString()}
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="3" cy="3" r="3" fill={color} />
    </svg>
  );
};

export default iconNewNotification;
