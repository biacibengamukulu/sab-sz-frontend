import React from 'react';

const iconArrowLearnMore = ({ color = '#5E5C5C', size = 1 }) => {
  return (
    <svg
      width={(size * 24).toString()}
      height={(size * 24).toString()}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
        fill={color}
      />
    </svg>
  );
};

export default iconArrowLearnMore;
