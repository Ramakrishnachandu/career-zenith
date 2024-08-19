// components/Footer.js
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex flex-col items-center justify-between px-4 sm:flex-row">
                <div className="text-center sm:text-left">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Career Zenith. All rights
                        reserved.
                    </p>
                </div>
                <div>
                    <p className="text-sm">
                        {"- Site Developed by "}
                        <span className="font-bold" title="Chandu Veera Ramakrishna">
                            <Link className="hover:text-blue-500" href="/developer-profile">{"Chandu"}</Link>
                        </span>
                    </p>
                </div>
                <div className="flex space-x-4 mt-4 sm:mt-0">
                    <a
                        href="https://github.com/Ramakrishnachandu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400"
                    >
                        <i className="fab fa-github fa-2x">Git Hub</i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/krish4u/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400"
                    >
                        <i className="fab fa-linkedin fa-2x">Linked In</i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
