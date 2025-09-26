import React from 'react';

const iconPlay = ({ color = '#FFFFFF', size = 1 }) => {
  return (
    <svg
      width={(size * 19).toString()}
      height={(size * 20).toString()}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.2111 9.10557C18.9482 9.4741 18.9482 10.5259 18.2111 10.8944L1.44721 19.2764C0.782313 19.6088 -1.19209e-06 19.1253 -1.19209e-06 18.382L-1.19209e-06 1.61803C-1.19209e-06 0.874653 0.782311 0.391156 1.44721 0.723607L18.2111 9.10557Z"
        fill={color}
      />
    </svg>
  );
};

export default iconPlay;
