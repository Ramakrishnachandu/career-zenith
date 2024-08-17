'use client'
import { useToastStore } from '@/store/useToastStore';
import React, { useEffect } from 'react';
import SvgApprove from '../SVG/SvgApprove';
import SvgCancel from '../SVG/SvgCancel';
// import { useToastStore } from '../store/useToastStore';
// import { XIcon } from '@heroicons/react/solid

interface ToastProps {
    id: string;
    title: string
    type: 'default' | 'success' | 'error' | 'warning';
    message?: string;
}

const Toast: React.FC<ToastProps> = ({ id, type, title, message }) => {
    const removeToast = useToastStore((state) => state.removeToast);

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(id);
        }, 10000);

        return () => clearTimeout(timer);
    }, [id, removeToast]);

    const getToastStyle = () => {
        switch (type) {
            case 'success':
                return 'bg-green-100 border border-green-500 ';
            case 'error':
                return 'bg-red-500 text-white';
            case 'warning':
                return 'bg-yellow-500 text-white';
            default:
                return 'bg-gray-500 text-white';
        }
    };

    return (
        <div className={`flex w-fit items-center gap-4 justify-between p-4 mb-2 rounded-md ${getToastStyle()}`}>
            <SvgApprove />
            <p className='text-slate-900 text-base font-semibold'>{title}</p>
            {message && <span>{message}</span>}
            <button onClick={() => removeToast(id)} className="ml-4">
                <SvgCancel />
            </button>
        </div>
    );
};

export default Toast;
