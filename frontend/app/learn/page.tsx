'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { BookOpenIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Navigation from '../../components/Navigation';

const units = [
  "Introduction to Transformers",
  "Attention Mechanism",
  "Self-Attention and Multi-Head Attention",
  "Positional Encoding",
  "Encoder-Decoder Architecture",
  "Training and Optimization",
  "Applications in NLP",
  "Advanced Architectures",
  "Limitations and Challenges",
  "Future Directions"
];

export default function LearnPage() {
  const router = useRouter();

  const importJson = async() => {
    
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center shadow-lg">
              <svg
                className="w-6 h-6 text-white"
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
            <span className="text-2xl font-bold text-primary-600">Curie</span>
          </div>
          <button
            onClick={() => router.push('/')}
            className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
          >
            Sign Out
          </button>
        </div>
      </header>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Attention Is All You Need
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Summary and Units */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Summary</h2>
              <p className="text-gray-600 mb-6">
                This paper introduces the Transformer, a novel neural network architecture that relies entirely on attention mechanisms, dispensing with recurrence and convolutions entirely. The model achieves state-of-the-art results in machine translation tasks while being more parallelizable and requiring significantly less time to train.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mb-4">Course Units</h2>
              <div className="space-y-2">
                {units.map((unit, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                  >
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-sm font-medium mr-3">
                        {index + 1}
                      </span>
                      <span className="text-gray-900 text-sm">{unit}</span>
                    </div>
                    <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 h-[calc(100vh-12rem)]">
              <iframe
                src="https://jupyterlite.readthedocs.io/en/stable/_static/notebooks/?path=javascript.ipynb"
                className="w-full h-full border-0 rounded-lg"
                title="JupyterLite Notebook"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 