import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  icon,
  fullWidth = false,
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-colors";
  
  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };
  
  const variantStyles = {
    primary: "bg-indigo-900 hover:bg-indigo-800 text-white shadow-sm",
    secondary: "bg-amber-400 hover:bg-amber-500 text-indigo-900",
    outline: "border border-indigo-900 text-indigo-900 hover:bg-indigo-50",
    text: "text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-transparent",
  };
  
  const widthStyle = fullWidth ? "w-full" : "";
  const disabledStyle = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
  
  const buttonClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${disabledStyle} ${className}`;
  
  const iconElement = icon ? <span className="mr-2">{icon}</span> : null;
  
  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {iconElement}
        {children}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer">
        {iconElement}
        {children}
      </a>
    );
  }
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {iconElement}
      {children}
    </button>
  );
};

export default Button;