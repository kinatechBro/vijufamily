import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  icon: Icon,
  className = '',
}) => {
  const baseClasses = `
    inline-flex items-center font-medium rounded-full
    transition-all duration-200 ease-smooth
  `;

  const variants = {
    default: 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200',
    success: 'bg-emerald-100 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800',
    warning: 'bg-amber-100 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800',
    error: 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800',
    info: 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800',
    outline: 'border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 bg-transparent',
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-2.5 py-1.5 text-sm',
    lg: 'px-3 py-2 text-base',
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <span className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}>
      {Icon && <Icon className={`${iconSizes[size]} mr-1`} />}
      {children}
    </span>
  );
};

export default Badge;