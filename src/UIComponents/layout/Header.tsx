'use client'
import React from 'react';
import Logo from '../logo/Logo';
import JobSearchModal from '../modals/JobSearchModal';
import PrimaryButton from '../buttons/PrimaryButton';
import RegisterButton from '../buttons/RegisterButton';
import Link from 'next/link';

const Header = () => {
    const handleSearch = (query: { skills: string; experience: string; location: string }) => {
        console.log('Searching for:', query);
        // Implement your search logic here
    };

    return (
        <header className="bg-slate-50 w-full gap-2 sticky top-0 border-b z-999 shadow-sm shadow-slate-300 border-slate-300 py-4 px-6 md:px-8">
            <div className="flex items-center justify-between flex-wrap">

                <Link href="/"><Logo /></Link>



                {/* Navigation Links */}
                <nav className="flex-grow md:flex md:justify-center">
                    <ul className="flex gap-6 text-sm md:text-base">
                        <li className='flex cursor-pointer border-b-2 p-1  border-transparent hover:border-blue-600'> <Link href="/jobsearch">{'Jobs'}</Link></li>
                        <li className='flex cursor-pointer border-b-2 p-1 border-transparent hover:border-blue-600'><Link href="/skillTests">{'Skill Tests'}</Link></li>
                        <li className='flex cursor-pointer border-b-2 p-1 border-transparent hover:border-blue-600'><Link href="/services">{'Services'}</Link></li>
                    </ul>
                </nav>

                {/* Search Modal */}
                <div className="flex justify-center md:flex-grow">
                    <JobSearchModal onSearch={handleSearch} />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-4 md:mt-0">
                    <PrimaryButton onClick={() => { /* Login Logic */ }}>Login</PrimaryButton>
                    <RegisterButton onClick={() => { /* Register Logic */ }}>Register</RegisterButton>
                    <PrimaryButton onClick={() => { /* Resume Builder Logic */ }}>Resume Builder</PrimaryButton>
                </div>
            </div>
        </header>
    );
}

export default Header;
