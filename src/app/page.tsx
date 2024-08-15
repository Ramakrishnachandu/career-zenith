'use client'
import { useState } from 'react'
import Header from "@/UIComponents/layout/Header";
import JobSearchModal from "@/UIComponents/modals/JobSearchModal";
import SearchInput from "@/UIComponents/searchBar/JobSearchBar";
import CompanyInfoPage from "@/UIPages/CompanyInfoPage";
import JobPage from "@/UIPages/JobPage";
import { generateYearsArray } from '@/functions/generateYears';
import JobsCategoriesCard from '@/UIComponents/cards/JobsCategoriesCard';
import SvgRemoteTheme from '@/UIComponents/SVG/SvgRemoteTheme';

interface Option {
  value: string
  label: string
}
export default function Home() {
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState<Option>({ value: '', label: "" });
  const [location, setLocation] = useState('');
  // const modalRef = useRef<HTMLDivElement | null>(null);

  const handleSearch = (query: { skills: string; experience: string; location: string }) => {
    // onSearch({ skills: skills, experience: experience?.label, location: location });
    // setIsModalOpen(false);
  };



  const options = generateYearsArray();

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className="flex justify-center flex-col mt-10 items-center gap-4  w-full">
        <div className="flex flex-col gap-4 justify-center items-center">
          <p className="flex text-3xl font-bold text-slate-900">Find your dream job now</p>
          <p className="flex text-lg font-semibold text-slate-900">5 lakh+ jobs for you to explore</p>
        </div>
        <div>
          <SearchInput
            skills={skills}
            setSkills={setSkills}
            experience={experience}
            setExperience={setExperience}
            location={location}
            setLocation={setLocation}
            options={options}
            onSearch={handleSearch} />
        </div>

        <div>
          <JobsCategoriesCard text={'MNC'} icon={<SvgRemoteTheme />} link={'/'} />
        </div>
      </div>
      <div className="flex border  rounded-md justify-center flex-col gap-8 items-center w-full p-4">
      
        <div className="flex gap-2 p-2 bg-white rounded-md">
          <JobPage />
        </div>
        <div className="flex gap-2  bg-white rounded-md">
          <CompanyInfoPage />
        </div>
      </div>
    </main>
  );
}
