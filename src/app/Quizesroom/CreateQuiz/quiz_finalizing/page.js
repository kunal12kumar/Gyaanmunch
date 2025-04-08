// in this we will do all work of quiz finalizing of code 

"use client"

import React , {useState} from 'react';
import { CheckCircle, Share2, Copy, Mail, Download, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';


export default function QuizFinalizationPage() {
  const [copied, setCopied] = useState(false);
  const [quizLink, setQuizLink] = useState("https://quizwiz.com/q/bio101-spring2025");
  
  const handleCopyLink = () => {
    // In a real app, this would copy to clipboard
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[linear-gradient(to_right,_#000510_0%,_#001624_50%,_#000510_100%)] min-h-screen text-white">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
      

        {/* Main Content */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-center mb-2">Share Your Quiz</h2>
          <p className="text-gray-400 text-center mb-8">Your quiz is ready to be shared with students</p>

          {/* Progress Indicator */}
          <div className="flex justify-between items-center mb-10 px-10">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                <CheckCircle size={18} />
              </div>
              <span className="text-xs mt-1 text-gray-400">Upload</span>
            </div>
            <div className="h-1 flex-1 bg-green-500 mx-2"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                <CheckCircle size={18} />
              </div>
              <span className="text-xs mt-1 text-gray-400">Processing</span>
            </div>
            <div className="h-1 flex-1 bg-green-500 mx-2"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                <CheckCircle size={18} />
              </div>
              <span className="text-xs mt-1 text-gray-400">Review</span>
            </div>
            <div className="h-1 flex-1 bg-green-500 mx-2"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                <CheckCircle size={18} />
              </div>
              <span className="text-xs mt-1 text-gray-400">Settings</span>
            </div>
            <div className="h-1 flex-1 bg-blue-500 mx-2"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                5
              </div>
              <span className="text-xs mt-1 text-white">Share</span>
            </div>
          </div>

          {/* Quiz Overview */}
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Quiz Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-md font-medium mb-3">Quiz Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Quiz Name:</span>
                    <span>Introduction to Biology Quiz</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Number of Questions:</span>
                    <span>10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Time Limit:</span>
                    <span>10 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Passing Score:</span>
                    <span>70%</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-md font-medium mb-3">Source Document</h4>
                <div className="flex items-center space-x-3">
                  <div className="bg-red-500 text-white rounded px-2 py-1 text-xs">PDF</div>
                  <div className="flex-1 truncate">Introduction_to_Biology.pdf</div>
                  <span className="text-xs text-gray-400">4.2 MB</span>
                </div>
                <div className="mt-4">
                  <button className="text-blue-400 text-sm flex items-center">
                    <Download size={14} className="mr-1" /> Download Source
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sharing Options */}
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Share2 size={18} className="mr-2" /> Share Your Quiz
            </h3>
            
            {/* Direct Link */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Direct Link</label>
              <div className="flex">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Link size={16} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={quizLink}
                    readOnly
                    className="w-full bg-gray-700 border border-gray-600 rounded-l-md py-2 pl-10 pr-3 text-gray-200 focus:outline-none"
                  />
                </div>
                <button 
                  onClick={handleCopyLink}
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-md flex items-center"
                >
                  {copied ? <CheckCircle size={16} className="mr-1" /> : <Copy size={16} className="mr-1" />}
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
            
            {/* QR Code */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">QR Code</label>
              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-md w-32 h-32 flex items-center justify-center">
                  <div className="bg-gray-200 w-24 h-24 rounded-sm"></div>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-3">Scan this QR code with a mobile device to access the quiz</p>
                  <button className="text-blue-400 text-sm flex items-center">
                    <Download size={14} className="mr-1" /> Download QR Code
                  </button>
                </div>
              </div>
            </div>
            
            {/* Other Sharing Options */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Other Options</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center justify-center">
                  <Mail size={16} className="mr-2" /> Email Quiz
                </button>
                <button className="bg-gray-700 text-white px-4 py-2 rounded-md flex items-center justify-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                  Tweet
                </button>
                <button className="bg-gray-700 text-white px-4 py-2 rounded-md flex items-center justify-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.252a10.23 10.23 0 0 1 7.495 3.253l-5.01 5.01a3.75 3.75 0 1 0 2.99 3.99h-7.635a1.25 1.25 0 1 1 0-2.5h7.635a3.732 3.732 0 0 0 .245 1.5l5.01-5.01a10.25 10.25 0 1 1-10.73-6.243Zm0 2.5a7.75 7.75 0 1 0 0 15.5 7.75 7.75 0 0 0 0-15.5Z"></path>
                  </svg>
                  Classroom
                </button>
              </div>
            </div>
          </div>
          
          {/* Analytics Preview */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Analytics Preview</h3>
              <button className="text-blue-400 text-sm">View Full Analytics</button>
            </div>
            <div className="bg-gray-700 rounded-lg p-4 text-center">
              <p className="text-gray-400 mb-2">Quiz analytics will be available once students start taking the quiz</p>
              <div className="grid grid-cols-3 gap-4 text-center mt-4">
                <div>
                  <p className="text-2xl font-bold">-</p>
                  <p className="text-xs text-gray-400">Attempts</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">-</p>
                  <p className="text-xs text-gray-400">Avg. Score</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">-</p>
                  <p className="text-xs text-gray-400">Completion Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between">
          <button className="bg-gray-700 text-white px-6 py-2 rounded-md">
            Back
          </button>
      <Link href="/Quizesroom/CreateQuiz/success_confir"> <button className="bg-green-600 text-white px-6 py-2 rounded-md">
            Go to Dashboard
          </button>  </Link> 
        </div>
      </div>
    </div>
  );
}