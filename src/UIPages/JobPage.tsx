// import JobDescription from './JobDescription';

import JobDescription from "@/UIComponents/jobDescription/JobDescription";

const JobPage = () => {
    const jobData = {
        title: "Job description",
        summary: "This is a sample job description.",
        clientInfo: "Our client is an Irish-domiciled multinational company that provides consulting and processing services.",
        workLocation: "Bangalore",
        experience: "4 years",
        mustHaveSkills: "React Native",
        keyResponsibilities: [
            "Responsible for translating design wireframes into high-quality code",
            "Ability to work creatively and analytically in a problem-solving environment",
            "Ability to operate independently and make decisions with little direct supervision",
        ],
        technicalExperience: [
            "Strong core JavaScript, TypeScript, JSX, and CSS",
            "4 years of JavaScript development experience",
            "Minimum of 2-3 years of experience with React Native and Strong in React-Native UI framework",
        ],
        role: "Front End Developer",
        industryType: "IT Services & Consulting",
        department: "Engineering - Software & QA",
        employmentType: "Full Time, Permanent",
        roleCategory: "Software Development",
        education: "Any Graduate",
        keySkills: [
            "redux",
            "css",
            "core javascript",
            "unit testing",
            "bootstrap",
            "mobile application development",
            "ajax",
            "jsx",
            "jquery",
            "react.js",
            "ui",
            "native",
            "design patterns",
            "flux",
            "json",
            "html",
            "typescript",
            "api",
            "hooks",
            "material ui",
            "gui testing",
            "react native",
            "jest",
            "javascript",
            "context api",
            "node.js",
            "framework",
            "application",
        ],
    };

    return (
        <div>
            <JobDescription {...jobData} />
        </div>
    );
};

export default JobPage;
