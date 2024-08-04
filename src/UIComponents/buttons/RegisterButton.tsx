// components/PrimaryButton.tsx
'use client'
import React from 'react';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: () => void;
    children: React.ReactNode;
}

const RegisterButton: React.FC<PrimaryButtonProps> = ({ onClick, children, className, ...props }) => {
    return (
        <button
            type='button'
            onClick={onClick}
            className={`bg-orange-500 text-white border border-orange-600 hover:bg-orange-400 h-10 font-semibold py-1 px-4 rounded-3xl  transition duration-200 
         ${className}`} 
            {...props} 
        >
            {children}
        </button>
    );
};

export default RegisterButton;
