import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 text-base inline-flex items-center justify-center';

  const variants = {
    primary: 'bg-cyan-600 hover:bg-cyan-700 text-white focus:ring-cyan-500',
    secondary: 'bg-white hover:bg-gray-50 text-cyan-600 border border-cyan-600 focus:ring-cyan-500',
    outline: 'bg-transparent hover:bg-cyan-50 text-cyan-600 border border-cyan-600 focus:ring-cyan-500',
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;