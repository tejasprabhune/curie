import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-3 mb-8">
      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg relative group">
        {/* Animated light rays */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 to-transparent animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-200/20 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        
        <svg
          className="w-9 h-9 text-white transform group-hover:scale-110 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      </div>
      <span className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
        Curie
      </span>
    </div>
  );
};

export default Logo; 