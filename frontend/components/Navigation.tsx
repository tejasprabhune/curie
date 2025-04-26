'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { HomeIcon, BookOpenIcon } from '@heroicons/react/24/outline';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link
              href="/home"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                pathname === '/home'
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              <HomeIcon className="h-5 w-5 mr-2" />
              Home
            </Link>
            <Link
              href="/learn"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                pathname === '/learn'
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              <BookOpenIcon className="h-5 w-5 mr-2" />
              Learn
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 