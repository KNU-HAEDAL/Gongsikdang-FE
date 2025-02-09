import React from 'react';

const LeftTriangleIcon = ({ color = 'black' }) => (
  <svg
    width='5'
    height='7'
    viewBox='0 0 5 7'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M5 0L5 7L0.5 3.5L5 0Z' fill={color} />
  </svg>
);

export default LeftTriangleIcon;
