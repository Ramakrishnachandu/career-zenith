// pages/_not-found.tsx
'use client'
import React from 'react';
import Link from 'next/link';
import SvgNotFound from '@/UIComponents/SVG/SvgNotFound';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 px-4">
            <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-gray-500 mb-8">{`Sorry, the page you're looking for doesn't exist.`}</p>
            <SvgNotFound />
            <Link href="/">
                <a className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
                    Go back to Home
                </a>
            </Link>
        </div>
    );
};

export default NotFound;
