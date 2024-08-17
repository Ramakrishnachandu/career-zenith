import React, { useState } from 'react';
import SvgClosedEye from '../SVG/SvgClosedEye';
import SvgOpenEye from '../SVG/SvgOpenEye';

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  maxLength?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  required?: boolean;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = 'text',
  placeholder,
  maxLength,
  value,
  onChange,
  id,
  required = false,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col gap-2 z-1 relative">
      <label htmlFor={id} className="font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative flex items-center">
        {type === 'tel' && (
          <span className="absolute inset-y-0 left-2 flex items-center text-slate-900">{'+91'}</span>
        )}
        <input
          type={showPassword ? 'text' : type}
          maxLength={maxLength}
          placeholder={placeholder}
          className={`w-full rounded-md p-2 ${type === 'password' ? "pr-10" : type === 'tel' ? 'pl-10' : 'pr-2'} border transition-colors 
            ${error ? 'border-red-500 focus:border-red-500' : 'border-slate-300 hover:border-blue-600 focus:border-blue-600 focus:outline-none'}
          `}
          id={id}
          value={value}
          onChange={onChange}
          autoComplete="off"
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <SvgOpenEye /> : <SvgClosedEye />}
          </button>
        )}
        {error && (
          <p className="mt-1 text-xs text-red-500 absolute bottom-[-1.5rem] left-0 w-full">
            {`${error}..!`}
          </p>
        )}
      </div>
    </div>
  );
};

export default InputField;
