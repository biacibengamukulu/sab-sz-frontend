import React from 'react';

const iconArrowSelect = ({ color = '#394D94', size = 1 }) => {
  return (
    <svg
      width={(size * 16).toString()}
      height={(size * 16).toString()}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.64645 5.64645C2.84171 5.45118 3.15829 5.45118 3.35355 5.64645L8 10.2929L12.6465 5.64645C12.8417 5.45118 13.1583 5.45118 13.3535 5.64645C13.5488 5.84171 13.5488 6.15829 13.3535 6.35355L8.35353 11.3535C8.15827 11.5488 7.84173 11.5488 7.64647 11.3535L2.64645 6.35355C2.45118 6.15829 2.45118 5.84171 2.64645 5.64645Z"
        fill={color}
      />
    </svg>
  );
};

export default iconArrowSelect;
