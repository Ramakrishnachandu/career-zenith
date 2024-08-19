import React from "react";

const SvgMenu = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0,0,256,256"
      width="36px"
      height="36px"
      cursor={'pointer'}
    >
      <g
        fill="#2563EB"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
      >
        <g transform="scale(4,4)">
          <path d="M7,29v5l50,1v-7zM7,11v6h50v-6zM7,46v7l50,-1v-5z" />
        </g>
      </g>
    </svg>
  );
};

export default SvgMenu;
