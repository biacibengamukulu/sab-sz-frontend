import React from 'react';

const iconCheckedCheckBox = ({
  outlineColor = '#B6BBC1',
  innerColor = '#394D94',
  size = 1,
}) => {
  return (
    <svg
      width={(size * 24).toString()}
      height={(size * 24).toString()}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width={(size * 23).toString()}
        height={(size * 23).toString()}
        rx="3.5"
        fill="white"
        stroke={outlineColor}
      />
      <rect
        x="6"
        y="6"
        width={(size * 12).toString()}
        height={(size * 12).toString()}
        fill={innerColor}
      />
    </svg>
  );
};

export default iconCheckedCheckBox;
