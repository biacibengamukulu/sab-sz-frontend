import React from 'react';

const iconTooltip = ({ color = '#394D94', size = 1, ref }) => {
  return (
    <svg
      ref={ref}
      width={(size * 16).toString()}
      height={(size * 16).toString()}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 11.875C8.34518 11.875 8.625 11.5952 8.625 11.25C8.625 10.9048 8.34518 10.625 8 10.625C7.65482 10.625 7.375 10.9048 7.375 11.25C7.375 11.5952 7.65482 11.875 8 11.875Z"
        fill={color}
      />
      <path
        d="M8 9.00031V8.50031C8.34612 8.50031 8.68446 8.39767 8.97225 8.20538C9.26003 8.01309 9.48434 7.73977 9.61679 7.42C9.74924 7.10023 9.7839 6.74836 9.71637 6.4089C9.64885 6.06943 9.48218 5.75761 9.23744 5.51287C8.9927 5.26813 8.68088 5.10146 8.34141 5.03393C8.00194 4.96641 7.65008 5.00106 7.3303 5.13352C7.01053 5.26597 6.73722 5.49027 6.54493 5.77806C6.35264 6.06584 6.25 6.40419 6.25 6.75031"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default iconTooltip;
