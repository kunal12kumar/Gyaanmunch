"use client"

import { CheckCircle, ArrowRight, Settings, List } from 'lucide-react';

export default function SuccessConfirmationPage() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
       

        {/* Success Message */}
        <div className="flex flex-col items-center justify-center text-center py-12">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-bold mb-2">Quiz Successfully Created!</h2>
          <p className="text-gray-400 text-lg mb-8">Your quiz is now ready to be taken by students</p>
          
          {/* Quiz Info */}
          <div className="bg-gray-800 rounded-lg p-6 mb-10 max-w-lg w-full">
            <h3 className="text-lg font-semibold mb-4">Quiz Information</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Quiz Name:</span>
                <span className="font-medium">Introduction to Biology Quiz</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Questions:</span>
                <span>10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Time Limit:</span>
                <span>10 minutes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Quiz Link:</span>
                <a href="#" className="text-blue-400 truncate">https://quizwiz.com/q/bio101-spring2025</a>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg w-full">
            <button className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-md flex items-center justify-center">
              <List size={18} className="mr-2" /> View Quiz Dashboard
            </button>
            <button className="flex-1 bg-gray-700 text-white px-4 py-3 rounded-md flex items-center justify-center">
              <Settings size={18} className="mr-2" /> Edit Quiz Settings
            </button>
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-gray-800 rounded-lg p-6 mb-10">
          <h3 className="text-xl font-semibold mb-4">What&apos;s Next?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">1</div>
                <h4 className="font-medium">Share with Students</h4>
              </div>
              <p className="text-sm text-gray-300">Send the quiz link to your students via email, social media, or share the QR code.</p>
              <div className="mt-4">
                <a href="#" className="text-blue-400 text-sm flex items-center">
                  Share Now <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">2</div>
                <h4 className="font-medium">Monitor Progress</h4>
              </div>
              <p className="text-sm text-gray-300">Track student performance and participation through the comprehensive analytics dashboard.</p>
              <div className="mt-4">
                <a href="#" className="text-blue-400 text-sm flex items-center">
                  View Analytics <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">3</div>
                <h4 className="font-medium">Create More Quizzes</h4>
              </div>
              <p className="text-sm text-gray-300">Upload additional documents and create more quizzes for different topics or subjects.</p>
              <div className="mt-4">
                <a href="#" className="text-blue-400 text-sm flex items-center">
                  Create New Quiz <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">How was your experience?</h3>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button key={star} className="text-gray-400 hover:text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
          <textarea 
            placeholder="Share your thoughts or suggestions for improvement..."
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
          ></textarea>
          <div className="mt-3 flex justify-end">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}