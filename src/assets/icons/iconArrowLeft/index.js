import React from 'react';

const iconArrowLeft = ({ color = '#394D94', size = 1 }) => {
  return (
    <svg
      width={(size * 6).toString()}
      height={(size * 12).toString()}
      viewBox="0 0 6 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.65426 6L5.72722 1.92704C5.97714 1.67712 5.97714 1.272 5.72722 1.02208C5.4773 0.772161 5.07218 0.772161 4.82226 1.02208L0.296815 5.54752C0.046895 5.79744 0.046895 6.20256 0.296815 6.45248L4.82226 10.9782C4.94738 11.1034 5.1109 11.1658 5.27474 11.1658C5.43858 11.1658 5.6021 11.1034 5.72722 10.9782C5.97714 10.7283 5.97714 10.3232 5.72722 10.0733L1.65426 6Z"
        fill={color}
      />
    </svg>
  );
};

export default iconArrowLeft;
