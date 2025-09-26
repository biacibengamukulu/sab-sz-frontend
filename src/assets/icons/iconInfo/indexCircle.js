import React from 'react';

const iconInfoCircle = ({ color = '#E46C02', color2= '#F5D2D0', size = 1 }) => {
  return (
    <svg
      width={(size * 30).toString()}
      height={(size * 30).toString()}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
    
      <path fillRule="evenodd" clipRule="evenodd" d="M60.3441 28C56.2072 28 52.557 30.1901 53.0437 34.8137L56.6939 74.4791C56.9373 76.4259 58.6407 77.8859 60.3441 77.8859C62.2909 77.8859 63.9943 76.4259 64.2376 74.4791L67.8878 34.8137C68.3745 30.1901 64.7243 28 60.3441 28Z" fill={color} />
      <path fillRule="evenodd" clipRule="evenodd" d="M60.3443 82.5095C63.0211 82.5095 65.2112 84.6996 65.2112 87.3764C65.2112 89.8099 63.0211 92 60.3443 92C57.9108 92 55.7207 89.8099 55.7207 87.3764C55.7207 84.6996 57.9108 82.5095 60.3443 82.5095Z" fill={color} />
      <circle cx="60" cy="60" r="59" stroke={color2}  strokeWidth="2"/>

    </svg>
  );
};

export default iconInfoCircle;
