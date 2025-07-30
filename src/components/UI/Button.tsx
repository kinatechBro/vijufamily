import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  fullWidth?: boolean;
  gradient?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  loading = false,
  fullWidth = false,
  gradient = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = `
    inline-flex items-center justify-center
    font-semibold rounded-xl
    transition-all duration-200 ease-smooth
    focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900
    disabled:opacity-50 disabled:cursor-not-allowed
    ${fullWidth ? 'w-full' : ''}
  `;

  const variants = {
    primary: gradient
      ? `bg-gradient-to-r from-red-600 to-orange-500 text-white 
         hover:from-red-700 hover:to-orange-600 
         focus:ring-orange-500 shadow-lg hover:shadow-xl
         hover:-translate-y-0.5 active:translate-y-0`
      : `bg-red-600 text-white hover:bg-red-700 
         focus:ring-red-500 shadow-md hover:shadow-lg
         hover:-translate-y-0.5 active:translate-y-0`,
    
    secondary: `bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white 
                hover:bg-slate-200 dark:hover:bg-slate-700 
                focus:ring-slate-500 shadow-sm hover:shadow-md
                border border-slate-200 dark:border-slate-700`,
    
    outline: `border-2 border-red-600 text-red-600 dark:text-red-400 
              hover:bg-red-600 hover:text-white dark:hover:text-white
              focus:ring-red-500 hover:shadow-md`,
    
    ghost: `text-slate-700 dark:text-slate-300 
            hover:bg-slate-100 dark:hover:bg-slate-800 
            focus:ring-slate-500`,
    
    danger: `bg-red-600 text-white hover:bg-red-700 
             focus:ring-red-500 shadow-md hover:shadow-lg
             hover:-translate-y-0.5 active:translate-y-0`,
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6',
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const buttonContent = (
    <>
      {loading && <LoadingSpinner size="sm" className="mr-2" />}
      {!loading && Icon && iconPosition === 'left' && (
        <Icon className={`${iconSizes[size]} mr-2`} />
      )}
      {children}
      {!loading && Icon && iconPosition === 'right' && (
        <Icon className={`${iconSizes[size]} ml-2`} />
      )}
    </>
  );

  if (variant === 'primary' && gradient) {
    return (
      <motion.button
        className={combinedClasses}
        disabled={disabled || loading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.1 }}
        {...props}
      >
        {buttonContent}
      </motion.button>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={disabled || loading}
      {...props}
    >
      {buttonContent}
    </button>
  );
};

export default Button;