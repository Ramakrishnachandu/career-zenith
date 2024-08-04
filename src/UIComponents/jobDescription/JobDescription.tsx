import React from 'react';

interface JobDescriptionProps {
  title: string;
  summary: string;
  clientInfo: string;
  workLocation: string;
  experience: string;
  mustHaveSkills: string;
  keyResponsibilities: string[];
  technicalExperience: string[];
  role: string;
  industryType: string;
  department: string;
  employmentType: string;
  roleCategory: string;
  education: string;
  keySkills: string[];
}

const JobDescription: React.FC<JobDescriptionProps> = ({
  title,
  summary,
  clientInfo,
  workLocation,
  experience,
  mustHaveSkills,
  keyResponsibilities,
  technicalExperience,
  role,
  industryType,
  department,
  employmentType,
  roleCategory,
  education,
  keySkills,
}) => {
  return (
    <section className="p-6 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Summary</h3>
        <p>{summary}</p>
        <p>
          <strong>About the Client:</strong> {clientInfo}
        </p>
        <p>
          <strong>Work Location:</strong> {workLocation}
        </p>
        <p>
          <strong>Experience:</strong> {experience}
        </p>
        <p>
          <strong>Must have Skills:</strong> {mustHaveSkills}
        </p>
      </div>
      <div className="mb-4">
        <strong>Key Responsibilities:</strong>
        <ul className="list-disc list-inside">
          {keyResponsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <strong>Technical Experience:</strong>
        <ul className="list-disc list-inside">
          {technicalExperience.map((experience, index) => (
            <li key={index}>{experience}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <div>
          <strong>Role:</strong> {role}
        </div>
        <div>
          <strong>Industry Type:</strong> {industryType}
        </div>
        <div>
          <strong>Department:</strong> {department}
        </div>
        <div>
          <strong>Employment Type:</strong> {employmentType}
        </div>
        <div>
          <strong>Role Category:</strong> {roleCategory}
        </div>
      </div>
      <div className="mb-4">
        <div>
          <strong>Education:</strong> {education}
        </div>
      </div>
      <div>
        <strong>Key Skills:</strong>
        <div className="flex flex-wrap">
          {keySkills.map((skill, index) => (
            <span
              key={index}
              className="mr-2 mb-2 px-2 py-1 bg-gray-200 text-gray-800 rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobDescription;
