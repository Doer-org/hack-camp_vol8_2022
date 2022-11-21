import React from 'react';

export const PeaceIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-peace"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <g className="stroke-purple-500">
        <circle cx="12" cy="12" r="9"></circle>
        <line x1="12" y1="3" x2="12" y2="21"></line>
        <line x1="12" y1="12" x2="18.3" y2="18.3"></line>
        <line x1="12" y1="12" x2="5.7" y2="18.3"></line>
      </g>
    </svg>
  );
};
