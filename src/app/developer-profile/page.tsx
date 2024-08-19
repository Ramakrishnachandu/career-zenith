// components/DeveloperProfile.js
import React from "react";
import Image from "next/image";

const DeveloperProfile = () => {
    
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-orange-100 pt-24 py-10 md:pt-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-card shadow-blue-200 md:shadow-blue-400 rounded-2xl overflow-visible md:overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image for mobile view */}
          <div className="flex justify-center md:hidden md:mt-7 mt-[-4.5rem]">
            <div
              className="w-36 h-36 rounded-full border border-slate-300 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/rk-image.jpg')",
                backgroundSize: "cover", // Ensure the image covers the container
                backgroundPosition: "center", // Center the image
              }}
            ></div>
          </div>

          {/* Image for larger screens */}
          <div
            className="hidden md:block md:w-[40%] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/rk-image.jpg')" }}
          />

          <div className="p-8 gap-2 md:w-2/3">
            <h1 className="block text-3xl leading-tight font-extrabold text-slate-900">
              {"Chandu Veera Ramakrishna"}
            </h1>
            {/* <div className="uppercase mt-1  tracking-wide text-sm text-indigo-600 font-bold">
                            {"Full Stack Developer | Frontend Developer"}
                        </div> */}
            <h1 className="flex mt-3 items-center justify-start">
              <Image
                height={300}
                width={300}
                alt={"example"}
                src="https://readme-typing-svg.herokuapp.com/?lines=Full+Stack+Developer..!;+Frontend+Developer...!;&center=true&size=31"
              />
            </h1>
            <p className="mt-2 text-gray-600">
              {` A passionate frontend developer with 4 years of
                            experience in crafting high-quality, responsive, and user-friendly
                            web applications. Proficient in React, Next.js, Tailwind CSS,
                            TypeScript, and JavaScript, with a proven track record of
                            delivering scalable solutions. Enthusiastic about collaborating
                            with UX teams and product owners to transform ideas into reality.`}
            </p>
            <div className="mt-6">
              <h2 className="text-lg leading-tight font-semibold text-gray-900">
                {"Technologies & Skills"}
              </h2>
              <ul className="mt-2 flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "JavaScript",
                  "Tailwind CSS",
                  "Chakra UI",
                  "Node.js",
                  "Zustand",
                  "MongoDB",
                ].map((skill, index) => (
                  <li
                    key={index}
                    className="bg-indigo-600 text-white px-3 py-1 rounded-full hover:bg-blue-800 text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <h2 className="text-lg leading-tight font-semibold text-gray-900">
                {"Featured Projects"}
              </h2>
              <ul className="mt-2 space-y-2">
                <li>
                  <h3 className="text-md font-semibold text-indigo-600">
                    {"Career Zenith"}
                  </h3>
                  <p className="text-gray-600">
                    {` A comprehensive job portal built with Next.js, TypeScript,
                                        and Tailwind CSS, featuring user authentication, job
                                        postings, application management, and real-time
                                        notifications.`}
                  </p>
                </li>
                <li>
                  <h3 className="text-md font-semibold text-indigo-600">
                    {`Rep Reports`}
                  </h3>
                  <p className="text-gray-600">
                    {`A dynamic reporting application for Wedbush, developed with
                                        React and Zustand, allowing for efficient data visualization
                                        and analysis.`}
                  </p>
                </li>
                <li>
                  <h3 className="text-md font-semibold text-indigo-600">
                    {` Custom Power BI Visuals`}
                  </h3>
                  <p className="text-gray-600">
                    {`Created custom visuals using React, enabling advanced data
                                        representation in Power BI dashboards.`}
                  </p>
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <a
                href="https://github.com/Ramakrishnachandu"
                className="text-indigo-600 font-semibold hover:underline"
              >
                {` Visit My GitHub Portfolio`}
              </a>
            </div>
            <div className="mt-6">
              <h2 className="text-lg leading-tight font-semibold text-gray-900">
                Contact Information
              </h2>
              <p className="mt-2 text-gray-600">
                Email:
                <a
                  href="mailto:ramakrishnachandu43@gmail.com"
                  className="text-blue-600 hover:text-indigo-800"
                >
                  {`ramakrishnachandu43@gmail.com`}
                </a>
              </p>
              <p className="mt-1 text-gray-600">
                LinkedIn:
                <a
                  href="https://www.linkedin.com/in/krish4u/"
                  className="text-blue-600 hover:text-indigo-800"
                >
                  {` https://www.linkedin.com/in/krish4u/`}
                </a>
              </p>
              <p className="mt-1 text-gray-600">
                GitHub:
                <a
                  href="https://github.com/Ramakrishnachandu"
                  className="text-blue-600 hover:text-indigo-800"
                >
                  {`github.com/Ramakrishnachandu`}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfile;
