'use client'
import React from 'react';
import Toast from './Toast';
import { useToastStore } from '@/store/useToastStore';

const ToastContainer: React.FC = () => {
    const toasts = useToastStore((state) => state.toasts);

    return (
        <div className="fixed top-4 right-4 z-50 p-4">
            {toasts.map((toast) => (
                <Toast
                    key={toast.id}
                    id={toast.id}
                    type={toast.type}
                    title={toast.title}
                    message={toast.message}
                />
            ))}
        </div>
    );
};

export default ToastContainer;
