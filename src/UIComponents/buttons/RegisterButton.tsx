// components/PrimaryButton.tsx
'use client'
import React from 'react';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void;
    children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, children, className, disabled, ...props }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`text-white h-10 font-semibold py-1 px-4 rounded-3xl transition duration-200 
                ${disabled ? 'bg-gray-500 cursor-not-allowed opacity-50' : 'bg-blue-600 hover:bg-blue-700'}
                ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;
