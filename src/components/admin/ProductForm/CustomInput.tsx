import React from 'react';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}
const CustomInput = ({ label, className, ...props }: CustomInputProps) => {
  return (
    <div className={'flex flex-col gap-2'}>
      <label htmlFor={props.name}>{label}</label>
      <input {...props} className={`w-full p-2 border rounded ${className}`} />
    </div>
  );
};

export default CustomInput;
