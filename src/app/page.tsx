'use client'
import { useState } from 'react'
import Header from "@/UIComponents/layout/Header";
import JobSearchModal from "@/UIComponents/modals/JobSearchModal";
import SearchInput from "@/UIComponents/searchBar/JobSearchBar";
import CompanyInfoPage from "@/UIPages/CompanyInfoPage";
import JobPage from "@/UIPages/JobPage";
import { generateYearsArray } from '@/functions/generateYears';

interface Option {
  value: string
  label: string
}
export default function Home() {
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState<Option>({ value: '', label: "" });
  const [location, setLocation] = useState('');
  // const modalRef = useRef<HTMLDivElement | null>(null);

  const handleSearch = () => {
    // onSearch({ skills: skills, experience: experience?.label, location: location });
    // setIsModalOpen(false);
  };



  const options = generateYearsArray();

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Header />

      <div className="flex justify-center flex-col mt-10 items-center gap-4  w-full">
        <div className="flex flex-col gap-4 justify-center items-center">
          <p className="flex text-3xl font-bold text-slate-900">Find your dream job now</p>
          <p className="flex text-lg font-semibold text-slate-900">5 lakh+ jobs for you to explore</p>
        </div>
        <div >

          <SearchInput
            skills={skills}
            setSkills={setSkills}
            experience={experience}
            setExperience={setExperience}
            location={location}
            setLocation={setLocation}
            options={options}
            handleSearch={handleSearch} />
        </div>
      </div>
      <div className="flex border  rounded-md justify-center flex-col gap-8 items-center w-full p-4">
        <div className="p-4 flex flex-col hover:shadow-hover shadow-active gap-2 bg-white rounded-2xl">

          <div className="flex justify-between border border-yellow-300 items-center ">
            <div className="flex border flex-col border-green-500">
              <a
                className="title text-lg font-semibold text-blue-600 hover:underline"
                title="React Native- react js Developer"
                href="https://www.naukri.com/job-listings-react-native-react-js-developer-2coms-bengaluru-4-to-9-years-020824010130"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Native - React JS Developer
              </a>
              <span className="comp-dtls-wrap flex items-center">
                <a
                  className="comp-name text-sm text-gray-700 hover:underline mr-4"
                  title="2coms"
                  href="https://www.naukri.com/2coms-jobs-careers-10111"
                  target="_blank"
                >
                  2coms
                </a>
                <a
                  className="rating flex items-center text-gray-500 hover:underline"
                  href="https://www.ambitionbox.com/reviews/2coms-reviews?utm_campaign=srp_ratings&utm_medium=desktop&utm_source=naukri"
                  target="_blank"
                  title="Powered by Ambition Box"
                >
                  <span className="ni-job-tuple-icon ni-job-tuple-icon-ot_star star"></span>
                  <span className="main-2">4.0</span>
                  <span className="ni-job-tuple-icon ni-job-tuple-icon-ot_star"></span>
                </a>
                <a
                  className="review ver-line text-gray-500 hover:underline"
                  href="https://www.ambitionbox.com/reviews/2coms-reviews?utm_campaign=srp_ratings&utm_medium=desktop&utm_source=naukri"
                  target="_blank"
                  title="Powered by Ambition Box"
                >
                  412 Reviews
                </a>
              </span>
            </div>
            <div className="flex h-12 w-12 border border-slate-100 rounded-md  items-center p-1">
              <img
                src="https://img.naukimg.com/logo_images/groups/v1/467982.gif"
                className="w-16 h-16 object-contain"
                loading="lazy"
                alt="Company Logo"
              />
            </div>


          </div>

          <div className="flex">
            <span className="flex items-center">
              <span className="ni-job-tuple-icon ni-job-tuple-icon-srp-experience exp">
                <span title="4-9 Yrs" className="">4-9 Yrs</span>
              </span>
            </span>
            <span className="ver-line flex items-center mr-4">
              <span className="ni-job-tuple-icon ni-job-tuple-icon-srp-rupee sal">
                <span title="Not disclosed">Not disclosed</span>
              </span>
            </span>
            <span className="loc-wrap ver-line flex items-center">
              <span className="ni-job-tuple-icon ni-job-tuple-icon-srp-location loc">
                <span title="Bengaluru" className="locWdth">Bengaluru</span>
              </span>
            </span>
          </div>
          <div className="row4 mb-2">
            <span className="job-desc ni-job-tuple-icon ni-job-tuple-icon-srp-description text-gray-600">
              3: Ability to operate independently and make decisions with little direct supervision...
            </span>
          </div>
          <div className="row5 mb-2">
            <ul className="tags-gt flex flex-wrap">
              <li className="bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2">redux</li>
              <li className="bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2">css</li>
              <li className="bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2">core javascript</li>
              <li className="bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2">unit testing</li>
              <li className="bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2">bootstrap</li>
              <li className="bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2">mobile application development</li>
              <li className="  bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2">ajax</li>
              <li className="  bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2">jsx</li>
            </ul>
          </div>
          <div className="row6 flex justify-between items-center text-gray-500">
            <span className="job-post-day">2 Days Ago</span>
            <span className="ni-job-tuple-icon ni-job-tuple-icon-srpSaveUnfilled un-saved save-job-tag cursor-pointer hover:text-blue-600">
              save
            </span>
          </div>

        </div>
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
