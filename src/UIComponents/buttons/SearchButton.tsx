// components/SearchButton.tsx
"use client";
import React from "react";
import SvgSearch from "../SVG/SvgSearch";

interface SearchButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  children: React.ReactNode;
}

const SearchButton: React.FC<SearchButtonProps> = ({
  onClick,
  children,
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-between bg-white text-slate-500 border text-sm border-blue-200 hover:bg-slate-100 h-10 user-select-none font-semibold py-1 pl-4 pr-2 rounded-3xl transition duration-200 overflow-hidden ${className}`}
      style={{ maxWidth: "14.25rem", minWidth: "12.5rem" }}
      {...props}
    >
      <span className="flex-1 text-left whitespace-nowrap overflow-hidden text-ellipsis">
        {children}
      </span>
      <div className="flex items-center justify-center bg-blue-600 w-8 h-8 rounded-full ml-2">
        <SvgSearch />
      </div>
    </button>
  );
};

export default SearchButton;
