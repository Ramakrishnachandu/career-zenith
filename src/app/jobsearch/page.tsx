import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-4 justify-center text-lg items-center">
      <div className="flex gap-7 w-full justify-center border p-11 border-slate-500">
        {/* Filters Section */}
        <div className="flex flex-col min-w-[17.375rem] gap-4 border rounded-md box-border px-8 py-4 text-slate-800 shadow-active shadow-blue-300 bg-white border-slate-300">
          <div className="flex items-start font-semibold text-lg">
            All Filters
          </div>
          <div className="flex w-full h-[1px] bg-slate-300 rounded-3xl" />
          <div className="flex gap-2 flex-col">
            <div className="flex font-semibold text-base">Work Mode</div>
            <div className="flex gap-2 items-center justify-start">
              <input type="checkbox"></input>
              <span className="flex text-sm">Work From Home</span>
              <span className="flex text-sm">{"(1234)"}</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox"></input>
              <span className="flex text-sm">Remote</span>
              <span className="flex text-sm">{"(432)"}</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox"></input>
              <span className="flex text-sm"> Hybrid </span>
              <span className="flex text-sm">{"(874)"}</span>
            </div>
          </div>
          <div className="flex w-full h-[1px] bg-slate-300 rounded-3xl" />
          <div className="flex gap-4 flex-col">
            <div className="flex font-semibold text-base">Experience</div>
            <div className="flex w-full gap-2">
              <input
                className="flex w-full"
                type="range"
                min={0}
                max={30}
              ></input>
            </div>
          </div>
          <div className="flex w-full h-[1px] bg-slate-300 rounded-3xl" />
          <div className="flex gap-2 flex-col">
            <div className="flex font-semibold text-base">Department</div>
            <div className="flex gap-2">
              <input type="checkbox"></input>
              <span className="flex text-sm">Developer</span>
              <span className="flex text-sm">{"(1234)"}</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox"></input>
              <span className="flex text-sm">Security Services</span>
              <span className="flex text-sm">{"(432)"}</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox"></input>
              <span className="flex text-sm"> IT & Engineering </span>
              <span className="flex text-sm">{"(874)"}</span>
            </div>
          </div>
          <div className="flex w-full h-[1px] bg-slate-300 rounded-3xl" />
          <div className="flex gap-2 flex-col">
            <div className="flex font-semibold text-base">Location</div>
            <div className="flex gap-2">
              <input type="checkbox"></input>
              <span className="flex text-sm"> Chennai</span>
              <span className="flex text-sm">{"(3)"}</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox"></input>
              <span className="flex text-sm">Bangalore</span>
              <span className="flex text-sm">{"(6)"}</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox"></input>
              <span className="flex text-sm"> Hyderabad </span>
              <span className="flex text-sm">{"(8)"}</span>
            </div>
          </div>
          <div className="flex w-full h-[1px] bg-slate-300 rounded-3xl" />
          <div className="flex gap-2 flex-col">
            <div className="flex font-semibold text-base">Salary</div>
            <div className="flex gap-2">
              <input type="checkbox"></input>
              <span className="flex text-sm">10 - 15 Lakhs </span>
              <span className="flex text-sm">{"(2)"}</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox"></input>
              <span className="flex text-sm">15 - 25 lakhs</span>
              <span className="flex text-sm">{"(3)"}</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox"></input>
              <span className="flex text-sm"> 25- 50 lakhs </span>
              <span className="flex text-sm">{"(1)"}</span>
            </div>
          </div>
          <div className="flex w-full h-[1px] bg-slate-300 rounded-3xl" />
          <div className="flex gap-2 flex-col">
            <div className="flex font-semibold text-base">Company Type</div>
            <div className="flex gap-2">
              <input type="checkbox"></input>
              <span className="flex text-sm">Indian MNC</span>
              <span className="flex text-sm">{"(14)"}</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox"></input>
              <span className="flex text-sm">Corporate</span>
              <span className="flex text-sm">{"(3)"}</span>
            </div>
          </div>
          <div className="flex w-full h-[1px] bg-slate-300 rounded-3xl" />
          <div className="flex gap-2 flex-col">
            <div className="flex font-semibold text-base">Education</div>
            <div className="flex gap-2">
              <input type="checkbox"></input>
              <span className="flex text-sm">B.Tech / B.E </span>
              <span className="flex text-sm">{"(4)"}</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox"></input>
              <span className="flex text-sm">Any Graduate</span>
              <span className="flex text-sm">{"(53)"}</span>
            </div>
          </div>
        </div>
        {/* Job Cards Section start */}
        <div className="flex flex-col border max-w-[35rem] gap-6 border-slate-500">
          {/* Job Cards Container start */}
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
                  <span title="4-9 Yrs" className="">
                    4-9 Yrs
                  </span>
                </span>
              </span>
              <span className="ver-line flex items-center mr-4">
                <span className="ni-job-tuple-icon ni-job-tuple-icon-srp-rupee sal">
                  <span title="Not disclosed">Not disclosed</span>
                </span>
              </span>
              <span className="loc-wrap ver-line flex items-center">
                <span className="ni-job-tuple-icon ni-job-tuple-icon-srp-location loc">
                  <span title="Bengaluru" className="locWdth">
                    Bengaluru
                  </span>
                </span>
              </span>
            </div>
            <div className="row4 mb-2">
              <span className="job-desc ni-job-tuple-icon ni-job-tuple-icon-srp-description text-gray-600">
                3: Ability to operate independently and make decisions with
                little direct supervision...
              </span>
            </div>
            <div className="row5 mb-2">
              <ul className="tags-gt flex flex-wrap">
                <li className="bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2">
                  redux
                </li>
                <li className="bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2">
                  css
                </li>
                <li className="bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2">
                  core javascript
                </li>
                <li className="bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2">
                  unit testing
                </li>
                <li className="bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2">
                  bootstrap
                </li>
                <li className="bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2">
                  mobile application development
                </li>
                <li className="  bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2">
                  ajax
                </li>
                <li className="  bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2">
                  jsx
                </li>
              </ul>
            </div>
            <div className="row6 flex justify-between items-center text-gray-500">
              <span className="job-post-day">2 Days Ago</span>
              <span className="ni-job-tuple-icon ni-job-tuple-icon-srpSaveUnfilled un-saved save-job-tag cursor-pointer hover:text-blue-600">
                save
              </span>
            </div>
          </div>
          {/* Job Cards Container end */}
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
                  <span title="4-9 Yrs" className="">
                    4-9 Yrs
                  </span>
                </span>
              </span>
              <span className="ver-line flex items-center mr-4">
                <span className="ni-job-tuple-icon ni-job-tuple-icon-srp-rupee sal">
                  <span title="Not disclosed">Not disclosed</span>
                </span>
              </span>
              <span className="loc-wrap ver-line flex items-center">
                <span className="ni-job-tuple-icon ni-job-tuple-icon-srp-location loc">
                  <span title="Bengaluru" className="locWdth">
                    Bengaluru
                  </span>
                </span>
              </span>
            </div>
            <div className="row4 mb-2">
              <span className="job-desc ni-job-tuple-icon ni-job-tuple-icon-srp-description text-gray-600">
                3: Ability to operate independently and make decisions with
                little direct supervision...
              </span>
            </div>
            <div className="row5 mb-2">
              <ul className="tags-gt flex flex-wrap">
                <li className="bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2">
                  redux
                </li>
                <li className="bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2">
                  css
                </li>
                <li className="bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2">
                  core javascript
                </li>
                <li className="bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2">
                  unit testing
                </li>
                <li className="bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2">
                  bootstrap
                </li>
                <li className="bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2">
                  mobile application development
                </li>
                <li className="  bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2">
                  ajax
                </li>
                <li className="  bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2">
                  jsx
                </li>
              </ul>
            </div>
            <div className="row6 flex justify-between items-center text-gray-500">
              <span className="job-post-day">2 Days Ago</span>
              <span className="ni-job-tuple-icon ni-job-tuple-icon-srpSaveUnfilled un-saved save-job-tag cursor-pointer hover:text-blue-600">
                save
              </span>
            </div>
          </div>
        </div>
        {/* Job Cards Section end */}
        {/* <div className='border border-slate-500'>Adds jdflksdjfksdfsdkjhfsjfhsjkf</div> */}
      </div>
    </div>
  );
};

export default page;
