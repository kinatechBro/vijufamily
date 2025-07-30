import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  interactive?: boolean;
  gradient?: boolean;
  elevated?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  interactive = false,
  gradient = false,
  elevated = false,
}) => {
  const baseClasses = `
    bg-white dark:bg-slate-800 
    border border-slate-200 dark:border-slate-700 
    rounded-2xl 
    transition-all duration-300 ease-smooth
    ${elevated ? 'shadow-lg' : 'shadow-sm'}
    ${gradient ? 'bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900' : ''}
    ${interactive ? 'cursor-pointer' : ''}
    ${hover ? 'hover:shadow-xl hover:-translate-y-1 hover:border-slate-300 dark:hover:border-slate-600' : ''}
    ${className}
  `;

  if (interactive) {
    return (
      <motion.div
        className={baseClasses}
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={baseClasses}>{children}</div>;
};

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconColor?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  className = '',
  iconColor = 'text-orange-500',
}) => {
  return (
    <Card hover interactive className={`p-6 ${className}`}>
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl flex items-center justify-center">
          <Icon className={`w-8 h-8 ${iconColor}`} />
        </div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  );
};

interface StatCardProps {
  value: string;
  label: string;
  icon?: LucideIcon;
  trend?: 'up' | 'down' | 'neutral';
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  icon: Icon,
  trend = 'neutral',
  className = '',
}) => {
  const trendColors = {
    up: 'text-emerald-500',
    down: 'text-red-500',
    neutral: 'text-slate-500',
  };

  return (
    <Card elevated className={`p-6 ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
            {value}
          </div>
          <div className="text-slate-600 dark:text-slate-400 text-sm font-medium">
            {label}
          </div>
        </div>
        {Icon && (
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 flex items-center justify-center`}>
            <Icon className={`w-6 h-6 ${trendColors[trend]}`} />
          </div>
        )}
      </div>
    </Card>
  );
};

export default Card;