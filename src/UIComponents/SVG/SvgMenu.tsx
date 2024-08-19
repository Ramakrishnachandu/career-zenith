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
        fill-rule="nonzero"
        stroke="none"
        stroke-width="1"
        stroke-linecap="butt"
        stroke-linejoin="miter"
        stroke-miterlimit="10"
        stroke-dasharray=""
        stroke-dashoffset="0"
        font-family="none"
        font-weight="none"
        font-size="none"
        text-anchor="none"
      >
        <g transform="scale(4,4)">
          <path d="M7,29v5l50,1v-7zM7,11v6h50v-6zM7,46v7l50,-1v-5z" />
        </g>
      </g>
    </svg>
  );
};

export default SvgMenu;
