import React from 'react';
import { ButtonProps, ButtonSize, ButtonShape } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium',
  shape = 'rounded-md', 
  onClick,
  className = '',
  type = 'button',
  ...rest
}) => {

  // Define Tailwind classes based on size prop
  const sizeClasses: Record<ButtonSize, string> = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-[8px] md:text-[10.5px] lg:text-[10.5px] xl:text-[13.5px] w-[100px] lg:w-auto md:w-auto',
    large: 'px-7 py-3 text-lg',
  };

  // Define Tailwind classes based on shape prop
  const shapeClasses: Record<ButtonShape, string> = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full',
  };

  // Combine base styles with size, shape, and any custom classes
  const combinedClasses = `text-[#222222] font-semibold border border-gray-400
    hover:bg-emerald-100 hover:cursor-pointer hover:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-50
    transition-colors duration-200
    ${sizeClasses[size]}
    ${shapeClasses[shape]}
    ${className}
  `.trim(); 

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      {...rest} 
    >
      {children}
    </button>
  );
};

export default Button;