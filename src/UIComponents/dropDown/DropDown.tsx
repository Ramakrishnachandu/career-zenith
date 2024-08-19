"use client";
import React, { useEffect, useRef, useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  options: Option[];
  value: Option; // This should reflect the selected option's value
  onChange: (value: Option) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (option: Option) => {
    onChange(option); // Call the onChange prop to update the selected value in the parent
    setIsOpen(false); // Close the dropdown after selection
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full  md:bg-slate-50 justify-between focus:outline-none text-slate-400 py-2 px-3 leading-tight flex items-center transition duration-150 ease-in-out"
      >
        <span>
          {value?.value === "Freshers"
            ? "Freshers"
            : value?.value
            ? value?.label
            : "Select experience"}
        </span>
        <svg
          className={`fill-current h-4 w-4 transform z-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute flex flex-col z-20 mt-1  bg-slate-50 border border-slate-300 rounded-lg shadow-lg max-h-60 overflow-y-auto transition-all duration-200 ease-in-out">
          {options?.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              className="cursor-pointer px-4 py-2 hover:bg-slate-300 hover:text-black transition duration-150 ease-in-out"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
