import React from 'react';

const iconError = ({ color = '#FFFFFF', size = 1 }) => {
  return (
    <svg
      width={(size * 15).toString()}
      height={(size * 64).toString()}
      viewBox="0 0 15 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.3441 0C3.20721 0 -0.442975 2.19011 0.0437169 6.81369L3.69391 46.4791C3.93725 48.4259 5.64067 49.8859 7.3441 49.8859C9.29086 49.8859 10.9943 48.4259 11.2376 46.4791L14.8878 6.81369C15.3745 2.19011 11.7243 0 7.3441 0Z"
        fill={color}
      />
      <path
        d="M7.34428 54.5095C10.0211 54.5095 12.2112 56.6996 12.2112 59.3764C12.2112 61.8099 10.0211 64 7.34428 64C4.91082 64 2.7207 61.8099 2.7207 59.3764C2.7207 56.6996 4.91082 54.5095 7.34428 54.5095Z"
        fill={color}
      />
    </svg>
  );
};

export default iconError;
