// in this we will set the no,. of question , difficulty , time , and other setting 
"use client"

import { useState } from 'react';
import { CheckCircle, Clock, Users, Shuffle, BarChart } from 'lucide-react';
import Link from 'next/link';

export default function QuizSettingsConfigurationPage() {
  const [settings, setSettings] = useState({
    quizName: "Introduction to Biology Quiz",
    timeLimit: 10,
    attemptLimit: 1,
    passScore: 70,
    randomizeQuestions: true,
    showResults: true,
    allowReview: true
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div className="bg-[linear-gradient(to_right,_#000510_0%,_#001624_50%,_#000510_100%)] min-h-screen text-white">
      <div className="max-w-6xl mx-auto p-6">
        

        {/* Main Content */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-center mb-2">Quiz Settings</h2>
          <p className="text-gray-400 text-center mb-8">Configure your quiz settings and options</p>

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
            <div className="h-1 flex-1 bg-blue-500 mx-2"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                4
              </div>
              <span className="text-xs mt-1 text-white">Settings</span>
            </div>
            <div className="h-1 flex-1 bg-gray-600 mx-2"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white">
                5
              </div>
              <span className="text-xs mt-1 text-gray-400">Share</span>
            </div>
          </div>

          {/* Settings Form */}
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <div className="space-y-6">
              {/* Basic Settings */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Basic Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Quiz Name</label>
                    <input
                      type="text"
                      name="quizName"
                      value={settings.quizName}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Time Limit (minutes)</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Clock size={16} className="text-gray-400" />
                        </div>
                        <input
                          type="number"
                          name="timeLimit"
                          value={settings.timeLimit}
                          onChange={handleInputChange}
                          min="0"
                          className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 pl-10 pr-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <p className="text-xs text-gray-400 mt-1">Set to 0 for no time limit</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Attempt Limit</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Users size={16} className="text-gray-400" />
                        </div>
                        <input
                          type="number"
                          name="attemptLimit"
                          value={settings.attemptLimit}
                          onChange={handleInputChange}
                          min="1"
                          className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 pl-10 pr-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <p className="text-xs text-gray-400 mt-1">How many times users can take the quiz</p>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Passing Score (%)</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <BarChart size={16} className="text-gray-400" />
                      </div>
                      <input
                        type="number"
                        name="passScore"
                        value={settings.passScore}
                        onChange={handleInputChange}
                        min="0"
                        max="100"
                        className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 pl-10 pr-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Advanced Options */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Advanced Options</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="randomizeQuestions"
                      name="randomizeQuestions"
                      checked={settings.randomizeQuestions}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-500 rounded"
                    />
                    <div className="ml-3 flex items-center">
                      <Shuffle size={16} className="text-gray-400 mr-2" />
                      <label htmlFor="randomizeQuestions" className="text-sm text-gray-300">
                        Randomize question order
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="showResults"
                      name="showResults"
                      checked={settings.showResults}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-500 rounded"
                    />
                    <label htmlFor="showResults" className="ml-3 text-sm text-gray-300">
                      Show results immediately after completion
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="allowReview"
                      name="allowReview"
                      checked={settings.allowReview}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-500 rounded"
                    />
                    <label htmlFor="allowReview" className="ml-3 text-sm text-gray-300">
                      Allow users to review answers after completion
                    </label>
                  </div>
                </div>
              </div>
              
              {/* Theme Options */}
             
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between">
          <button className="bg-gray-700 text-white px-6 py-2 rounded-md">
            Back
          </button>
         <Link href="/Quizesroom/CreateQuiz/quiz_finalizing"> <button className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded-md">
            Finalize Quiz
          </button> </Link>
        </div>
      </div>
    </div>
  );
}