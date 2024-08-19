/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'readme-typing-svg.herokuapp.com',
                pathname: '/**',
            },
        ],
        dangerouslyAllowSVG: true, // Enable SVG support
    },
};

export default nextConfig;
