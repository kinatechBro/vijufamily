import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, RefreshCw, Wifi, WifiOff } from 'lucide-react';

interface ErrorMessageProps {
  error?: any;
  onRetry?: () => void;
  className?: string;
  title?: string;
  description?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  error,
  onRetry,
  className = '',
  title,
  description,
}) => {
  const getErrorInfo = () => {
    if (title && description) {
      return { title, description, icon: AlertCircle };
    }

    if (!error) {
      return {
        title: 'Something went wrong',
        description: 'An unexpected error occurred. Please try again.',
        icon: AlertCircle,
      };
    }

    // Handle different error types
    if (error.code === 'ECONNABORTED' || error.message?.includes('timeout')) {
      return {
        title: 'Request Timeout',
        description: 'The request took too long to complete. Please check your connection and try again.',
        icon: WifiOff,
      };
    }

    if (error.response?.status === 404) {
      return {
        title: 'Content Not Found',
        description: 'The requested content could not be found. It may have been moved or deleted.',
        icon: AlertCircle,
      };
    }

    if (error.response?.status === 500) {
      return {
        title: 'Server Error',
        description: 'There was a problem with the server. Please try again later.',
        icon: AlertCircle,
      };
    }

    if (error.response?.status >= 400 && error.response?.status < 500) {
      return {
        title: 'Request Error',
        description: error.response?.data?.message || 'There was a problem with your request.',
        icon: AlertCircle,
      };
    }

    if (error.code === 'ERR_NETWORK' || !navigator.onLine) {
      return {
        title: 'Network Error',
        description: 'Please check your internet connection and try again.',
        icon: WifiOff,
      };
    }

    return {
      title: 'Something went wrong',
      description: error.message || 'An unexpected error occurred. Please try again.',
      icon: AlertCircle,
    };
  };

  const { title: errorTitle, description: errorDescription, icon: Icon } = getErrorInfo();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex flex-col items-center justify-center p-8 text-center ${className}`}
    >
      <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-red-500" />
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {errorTitle}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
        {errorDescription}
      </p>
      
      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 flex items-center focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Try Again
        </button>
      )}
      
      {/* Network status indicator */}
      <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
        {navigator.onLine ? (
          <>
            <Wifi className="w-4 h-4 mr-1 text-green-500" />
            Connected
          </>
        ) : (
          <>
            <WifiOff className="w-4 h-4 mr-1 text-red-500" />
            Offline
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ErrorMessage;