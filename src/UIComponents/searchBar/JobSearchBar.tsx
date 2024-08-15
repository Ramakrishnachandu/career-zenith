'use client'
import React from 'react';
import ExperienceDropdown from '../dropDown/DropDown';
import SvgSearch from '../SVG/SvgSearch';

interface Option {
    value: string;
    label: string;
}

interface SearchInputProps {
    skills: string;
    setSkills: (skills: string) => void;
    experience: Option;
    setExperience: (option: Option) => void;
    location: string;
    setLocation: (location: string) => void;
    options: Option[];
    onSearch: (query: { skills: string; experience: string; location: string }) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
    skills,
    setSkills,
    experience,
    setExperience,
    location,
    setLocation,
    options,
    onSearch,
}) => {
    const handleSearch = () => {
        onSearch({ skills: skills, experience: experience?.label, location: location });
    }
    return (
        <div className="flex h-12 w-full items-center shadow-slate-300 box-border shadow-md justify-center border px-4 py-8 border-gray-300 rounded-3xl">
            <div className='flex w-full justify-start'>
                <input
                    type="text"
                    placeholder="Enter Keywords / Designations / Companies"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    className="border-0 bg-slate-50 p-2 focus:outline-none"
                />
                <div className="border-l border-gray-300 h-8" />  {/* Vertical bar */}
                <div>
                    <ExperienceDropdown options={options} value={experience} onChange={setExperience} />
                </div>

                <div className="border-l border-gray-300 h-8" />  {/* Vertical bar */}
                <input
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="border-0 bg-slate-50 p-2 focus:outline-none"
                />
            </div>

            <div className='flex justify-end w-full'>
                <button
                    onClick={handleSearch}
                    className="bg-blue-600 flex items-center shadow-sm shadow-blue-300 gap-2 text-white font-semibold py-1 px-4 h-9 rounded-3xl transition-colors box-border box-content duration-200 hover:bg-blue-700"
                >
                    <SvgSearch />
                    <span className="flex-1 text-left whitespace-nowrap overflow-hidden text-lg font-semibold text-ellipsis">Search</span>
                </button>
            </div>
        </div>
    );
};

export default SearchInput;
