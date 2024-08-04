'use client'
import React, { useState, useRef, useEffect } from 'react';
import SearchButton from '../buttons/SearchButton';
import ExperienceDropdown from '../dropDown/DropDown';
import SvgSearch from '../SVG/SvgSearch';
import Logo from '../logo/Logo';

interface Option {
    value: string;
    label: string;
}

interface JobSearchModalProps {
    onSearch: (query: { skills: string; experience: string; location: string }) => void;
}

const JobSearchModal: React.FC<JobSearchModalProps> = ({ onSearch }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [skills, setSkills] = useState('');
    const [experience, setExperience] = useState<Option>({ value: '', label: "" });
    const [location, setLocation] = useState('');
    const modalRef = useRef<HTMLDivElement | null>(null);

    const handleSearch = () => {
        onSearch({ skills: skills, experience: experience?.label, location: location });
        setIsModalOpen(false);
    };

    const generateYearsArray = (): { value: string, label: string }[] => {
        const years = [{ value: 'Freshers', label: 'Freshers (Less than 1 year)' }];
        for (let i = 1; i <= 30; i++) {
            years.push({ value: `${i}`, label: `${i} year${i === 1 ? '' : 's'}` });
        }
        return years;
    };

    const options = generateYearsArray();

    const buttonText = [
        skills && `${skills}`,
        experience && `${experience?.label}`,
        location && ` ${location}`,
    ]
        .filter(Boolean)
        .join(', ');

    // Close modal on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsModalOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='flex'>
            <SearchButton onClick={() => setIsModalOpen(true)}>{buttonText || "Search Jobs..."}</SearchButton>
            {isModalOpen && (
                <div className="fixed inset-0 w-full flex flex-col items-center top-0 justify-start bg-black bg-opacity-50 z-8">
                    <div className="bg-slate-50  shadow-slate-200 shadow-sm flex justify-center p-6 w-full" ref={modalRef}>
                        <div className='flex w-3/4 gap-4 justify-center flex-col'>

                            <Logo />
                            <div className="flex h-12 w-full items-center shadow-slate-300 box-border shadow-md justify-center border px-4 py-8 border-gray-300 rounded-3xl">
                                <div className='flex w-full justify-start'>
                                    <input
                                        type="text"
                                        placeholder="Enter Keywords / Designations / Companies"
                                        value={skills}
                                        onChange={(e) => setSkills(e.target.value)}
                                        className="border-0 bg-slate-50 p-2 focus:outline-none"
                                    />
                                    <div className="border-l  border-gray-300 h-8" />  {/* Vertical bar */}
                                    <ExperienceDropdown options={options} value={experience} onChange={setExperience} />
                                    <div className="border-l border-gray-300 h-8" />  {/* Vertical bar */}
                                    <input
                                        type="text"
                                        placeholder="Enter location"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        className="border-0 bg-slate-50 p-2 focus:outline-none "
                                    />
                                </div>

                                <div className='flex justify-end w-full'>
                                    <button
                                        onClick={handleSearch}
                                        className="bg-blue-600 flex items-center shadow-sm shadow-blue-300  gap-2 text-white font-semibold py-1 px-4 h-9 rounded-3xl transition-colors box-border box-content duration-200 hover:bg-blue-700"
                                    >
                                        <SvgSearch />
                                        <span className="flex-1 text-left whitespace-nowrap overflow-hidden text-lg font-semibold text-ellipsis">Search</span>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobSearchModal;
