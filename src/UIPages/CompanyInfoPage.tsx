// pages/index.tsx
import CompanyInfo from "@/UIComponents/jobDescription/CompanyInfo";

const CompanyInfoPage = () => {
  const companyDetails = {
    companyName: '2COMS',
    description: '2COMS is a Recruitment and staffing solutions company established in 1999 in Kolkata with branches in Pune, Hyderabad & Bhubaneshwar. 2COMS focuses on verticals like KPO, BPO, IT, Insurance, Banking.',
    website: 'http://www.2coms.com',
    address: '388, BLOCK-G, N.A., N.A., JNAN GOSWAMI SARANI, NEW ALIPORE, KOLKATA, West Bengal, India',
  };

  return (
    <CompanyInfo
      companyName={companyDetails.companyName}
      description={companyDetails.description}
      website={companyDetails.website}
      address={companyDetails.address}
    />
  );
};

export default CompanyInfoPage;
