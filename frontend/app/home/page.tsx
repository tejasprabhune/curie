'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowUpTrayIcon, DocumentTextIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Navigation from '../../components/Navigation';

const researchPapers = [
  {
    title: "Attention Is All You Need",
    authors: "Vaswani et al.",
    year: "2017",
    abstract: "The transformer architecture that revolutionized natural language processing and machine learning."
  },
  {
    title: "Learning Transferable Visual Models From Natural Language Supervision",
    authors: "Radford et al.",
    year: "2021",
    abstract: "CLIP: A neural network that learns visual concepts from natural language supervision."
  },
  {
    title: "LLaMA: Open and Efficient Foundation Language Models",
    authors: "Touvron et al.",
    year: "2023",
    abstract: "A collection of foundation language models ranging from 7B to 65B parameters."
  }
];

export default function HomePage() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      // Automatically upload the file
      try {
        const formData = new FormData();
        formData.append('file', file);
        // In a real app, you would send this to your backend
        console.log('Uploading file:', file.name);
        // Simulate upload delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setUploadedFile(file.name);
        setSelectedFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } catch (error) {
        console.error('Error uploading file:', error);
        alert('Error uploading file. Please try again.');
      }
    } else {
      alert('Please select a PDF file');
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
    
    const file = event.dataTransfer.files?.[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      // Automatically upload the file
      try {
        const formData = new FormData();
        formData.append('file', file);
        // In a real app, you would send this to your backend
        console.log('Uploading file:', file.name);
        // Simulate upload delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setUploadedFile(file.name);
        setSelectedFile(null);
      } catch (error) {
        console.error('Error uploading file:', error);
        alert('Error uploading file. Please try again.');
      }
    } else {
      alert('Please drop a PDF file');
    }
  };

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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Transform Research Papers into Learnable Courses
          </h1>
          <p className="text-xl text-gray-600">
            Upload your research paper and let Curie create an interactive learning experience
          </p>
        </div>

        {/* Upload Section */}
        <div className="max-w-3xl mx-auto">
          <div 
            className={`bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-dashed ${
              isDragging ? 'border-primary-500 bg-primary-50' : 'border-gray-200'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-4">
                <ArrowUpTrayIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Upload Research Paper
              </h2>
              {selectedFile ? (
                <div className="mb-6">
                  <p className="text-gray-600 mb-2">Uploading:</p>
                  <p className="text-lg font-medium text-primary-600">
                    {selectedFile.name}
                  </p>
                </div>
              ) : uploadedFile ? (
                <div className="mb-6">
                  <div className="flex items-center justify-center space-x-2 text-green-600">
                    <CheckCircleIcon className="w-5 h-5" />
                    <p className="text-lg font-medium">Successfully uploaded:</p>
                  </div>
                  <p className="text-lg font-medium text-primary-600 mt-2">
                    {uploadedFile}
                  </p>
                </div>
              ) : (
                <p className="text-gray-600 mb-6">
                  Drag and drop your PDF or click to browse files
                </p>
              )}
              <input
                type="file"
                ref={fileInputRef}
                accept=".pdf"
                onChange={handleFileSelect}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200"
              >
                Upload File
              </button>
            </div>
          </div>

          {/* Research Papers Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Past Papers</h2>
            {researchPapers.map((paper, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DocumentTextIcon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{paper.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {paper.authors} ({paper.year})
                    </p>
                    <p className="text-gray-600">{paper.abstract}</p>
                    <button
                      className="mt-4 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                      onClick={() => {
                        // In a real app, this would navigate to the paper's detailed view
                        alert(`Loading ${paper.title}...`);
                      }}
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 