import React from 'react';

const iconTwitter = ({ color = '#FFFFFF', size = 1 }) => {
  return (
    <svg
      width={(size * 27).toString()}
      height={(size * 24).toString()}
      viewBox="0 0 27 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >

      <path 
        d="M21.2172 0H25.2705L16.4172 10.1867L26.8705 24H18.6572L12.2572 15.6267L4.89721 24H0.84388L10.3372 13.12L0.310547 0H8.73721L14.5505 7.68L21.2172 0ZM19.7772 21.5467H22.0172L7.51055 2.29333H5.05721L19.7772 21.5467Z" 
        fill={color}
      />

    </svg>
  );
};

export default iconTwitter;
