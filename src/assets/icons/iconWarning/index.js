import React from 'react';

const iconWarning = ({ color = '#FF2D55', size = 1 }) => {
  return (
    <svg
      width={(size * 28).toString()}
      height={(size * 28).toString()}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0013 0.666656C6.6413 0.666656 0.667969 6.63999 0.667969 14C0.667969 21.36 6.6413 27.3333 14.0013 27.3333C21.3613 27.3333 27.3346 21.36 27.3346 14C27.3346 6.63999 21.3613 0.666656 14.0013 0.666656ZM15.3346 20.6667H12.668V18H15.3346V20.6667ZM15.3346 15.3333H12.668V7.33332H15.3346V15.3333Z"
        fill={color}
      />
    </svg>
  );
};

export default iconWarning;
