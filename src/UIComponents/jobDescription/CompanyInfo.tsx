// components/CompanyInfo.tsx
import React from 'react';

interface CompanyInfoProps {
    companyName: string;
    description: string;
    website: string;
    address: string;
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({ companyName, description, website, address }) => {
    return (
        <div className="flex flex-col bg-white gap-3 p-4 shadow-active hover:shadow-hover rounded-2xl">
            <h2 className="text-xl font-semibold">{'About Company'}</h2>
            <div className="text-gray-700 text-sm ">
                {description}
            </div>
            <div className="font-semibold text-sm">Company Info</div>
            <div className="flex gap-1 items-center">
                <p className="font-semibold text-sm">Link:</p>
                <p>
                    <a href={website} target="_blank" rel="nofollow" className="text-blue-500 text-sm hover:underline">
                        {`${companyName} Web site`}
                    </a>
                </p>
            </div>
            <div className="flex items-start gap-1">
                <p className="font-semibold text-sm text-slate-900">Address:</p>
                <p className='text-sm text-slate-500'>{address}</p>
            </div>
        </div>
    );
};

export default CompanyInfo;
