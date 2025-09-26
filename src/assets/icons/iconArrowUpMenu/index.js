import React from 'react';

const iconArrowUpMenu = ({ color = '#FFFFFF', size = 1 }) => {
  return (
    <svg
      width={(size * 14).toString()}
      height={(size * 6).toString()}
      viewBox="0 0 14 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 0L13.9282 6H0.0717969L7 0Z" fill={color} />
    </svg>
  );
};

export default iconArrowUpMenu;
