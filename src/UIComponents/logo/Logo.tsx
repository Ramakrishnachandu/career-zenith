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
                    Nexus
                </text>
                <path
                    d="M140 50 C140 40, 150 40, 150 50 C150 60, 140 60, 140 50 Z"
                    fill="#4f46e5"
                />
                <path
                    d="M180 50 L190 50 L185 45 Z"
                    fill="white"
                />
                <path
                    d="M185 50 Q195 45, 205 50 Q195 55, 185 50 Z"
                    fill="#4f46e5"
                />
                <circle cx="360" cy="50" r="12" fill="#4f46e5" />
                <circle cx="360" cy="50" r="6" fill="white" />
            </svg>

        </div>
    );
};


export default Logo
