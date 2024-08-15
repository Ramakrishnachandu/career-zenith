
import React from 'react';

interface ChipProps {
  text: string;
  icon: React.ReactNode; // Accepting a React node for the icon
  link: string;
}

const JobsCategoriesCard: React.FC<ChipProps> = ({ text, icon, link }) => {
  return (
    <a
      className="flex items-center gap-2 bg-white border border-slate-300 rounded-md px-2 py-4 hover:shadow-card hover:bg-slate-50 transition"
      href={link}
      title={text}
    >
      <span>
        {icon} {/* Render the passed React node */}
      </span>
      <span className="text-slate-700 font-semibold text-ellipsis leading-5 text-base" title={text}>
        {text}
      </span>
      <svg
        className="ntc__chip-arrow w-4 h-4 ml-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#64748b"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 4l8 8-8 8" />
      </svg>
    </a>
  );
};




export default JobsCategoriesCard
