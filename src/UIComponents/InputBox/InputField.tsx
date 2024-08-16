import React from 'react';

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
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        maxLength={maxLength}
        placeholder={placeholder}
        className={`w-full rounded-md p-2 border transition-colors ${
          error
            ? 'border-red-500 focus:border-red-500'
            : 'border-slate-300 hover:border-blue-600 focus:border-blue-600'
        }`}
        id={id}
        value={value}
        onChange={onChange}
        autoComplete="off"
        // required={required}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default InputField;
