'use client'
const Logo: React.FC = () => {
    return (
        <div className="logo-container">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 400 100"
                width="200"
                height="50"
            >
                <rect width="400" height="100" fill="#f0f4ff" rx="20" />
                <text
                    x="20"
                    y="70"
                    fontFamily="Arial, sans-serif"
                    fontSize="56"
                    fill="#1e3a8a"
                    fontWeight="bold"
                >
                    Career
                </text>
                <text
                    x="220"
                    y="70"
                    fontFamily="Arial, sans-serif"
                    fontSize="56"
                    fill="#4f46e5"
                    fontWeight="bold"
                >
                    Zenith
                </text>
            </svg>

        </div>
    );
};


export default Logo
