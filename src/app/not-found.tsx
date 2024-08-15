// pages/_not-found.tsx
"use client";
import React from "react";
import Link from "next/link";
import SvgNotFound from "@/UIComponents/SVG/SvgNotFound";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center p-5 h-auto bg-slate-50">
      <img
        src="https://cdn-icons-png.flaticon.com/512/13637/13637535.png"
        width="256"
        height="256"
        alt="not found"
        title="Not Found"
      />

      {/* <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1> */}
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-500 mb-8">{`Sorry, the page you're looking for doesn't exist.`}</p>
      <Link href="/">
        <div className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
          Go back to Home
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
