import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  fullWidth?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-transform active:scale-[0.96] disabled:opacity-50";
  
  const variants = {
    primary: "bg-[#e51d53] text-white hover:bg-[#d90b43] px-6 py-3",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 px-6 py-3",
    outline: "border border-gray-900 text-gray-900 hover:bg-gray-50 px-6 py-3",
    text: "text-gray-900 underline hover:text-gray-600 p-0"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
