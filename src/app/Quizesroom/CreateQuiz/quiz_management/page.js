// This is the dashboard for the user in which we will show how many quizes they have given  and total attempts means analytics 
"use client"

import { useState } from 'react';
import { Search, Plus, List, Grid, Filter, Download, BarChart, Clock, Users, MoreHorizontal, Book } from 'lucide-react';

export default function QuizManagementDashboard() {
  const [viewMode, setViewMode] = useState('grid');
  
  const quizzes = [
    {
      id: 1,
      title: "Introduction to Biology Quiz",
      questions: 10,
      timeLimit: "10 min",
      document: "Introduction_to_Biology.pdf",
      created: "2 days ago",
      attempts: 24,
      avgScore: 76,
      completionRate: "92%"
    },
    {
      id: 2,
      title: "World History Overview",
      questions: 15,
      timeLimit: "20 min",
      document: "World_History_Notes.docx",
      created: "1 week ago",
      attempts: 37,
      avgScore: 82,
      completionRate: "88%"
    },
    {
      id: 3,
      title: "Programming Basics Test",
      questions: 12,
      timeLimit: "15 min",
      document: "Programming_Basics.txt",
      created: "2 weeks ago",
      attempts: 18,
      avgScore: 65,
      completionRate: "76%"
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        

        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-1">My Quizzes</h2>
            <p className="text-gray-400">Manage your created quizzes and view analytics</p>
          </div>
          <button className="mt-4 md:mt-0 bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
            <Plus size={18} className="mr-2" /> Create New Quiz
          </button>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search quizzes..."
                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 pl-10 pr-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex gap-2">
              <button className="bg-gray-700 text-white px-3 py-2 rounded-md flex items-center">
                <Filter size={16} className="mr-2" /> Filter
              </button>
              <button 
                className={`px-3 py-2 rounded-md flex items-center ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`} 
                onClick={() => setViewMode('grid')}
              >
                <Grid size={16} />
              </button>
              <button 
                className={`px-3 py-2 rounded-md flex items-center ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
                onClick={() => setViewMode('list')}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="text-gray-400 text-sm mb-2">Total Quizzes</h3>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center mr-3">
                <Book size={20} />
              </div>
              <span className="text-2xl font-bold">3</span>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="text-gray-400 text-sm mb-2">Total Attempts</h3>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center mr-3">
                <Users size={20} />
              </div>
              <span className="text-2xl font-bold">79</span>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="text-gray-400 text-sm mb-2">Average Score</h3>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-yellow-500 flex items-center justify-center mr-3">
                <BarChart size={20} />
              </div>
              <span className="text-2xl font-bold">76%</span>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="text-gray-400 text-sm mb-2">Completion Rate</h3>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center mr-3">
                <Clock size={20} />
              </div>
              <span className="text-2xl font-bold">85%</span>
            </div>
          </div>
        </div>

        {/* Quiz List - Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizzes.map(quiz => (
              <div key={quiz.id} className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="h-24 bg-gradient-to-r from-blue-500 to-purple-600 relative">
                  <div className="absolute bottom-4 left-4 bg-gray-900 text-xs text-white px-2 py-1 rounded">
                    {quiz.questions} Questions
                  </div>
                  <div className="absolute bottom-4 right-4 bg-gray-900 text-xs text-white px-2 py-1 rounded flex items-center">
                    <Clock size={12} className="mr-1" /> {quiz.timeLimit}
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-lg mb-2">{quiz.title}</h3>
                    <button className="text-gray-400 hover:text-white">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                  
                  <div className="text-xs text-gray-400 mb-4">Created {quiz.created}</div>
                  
                  <div className="flex justify-between text-sm mb-4">
                    <div>
                      <div className="text-gray-400">Attempts</div>
                      <div className="font-medium">{quiz.attempts}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Avg. Score</div>
                      <div className="font-medium">{quiz.avgScore}%</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Completion</div>
                      <div className="font-medium">{quiz.completionRate}</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">View</button>
                    <button className="bg-gray-700 text-white px-3 py-1 rounded text-sm">Share</button>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Create New Quiz Card */}
            <div className="bg-gray-800 rounded-lg border-2 border-dashed border-gray-700 flex items-center justify-center h-64">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Plus size={24} className="text-gray-400" />
                </div>
                <p className="text-gray-400">Create New Quiz</p>
              </div>
            </div>
          </div>
        )}

        {/* Quiz List - Table View */}
        {viewMode === 'list' && (
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-700 text-gray-300">
                  <th className="text-left py-3 px-4">Quiz Name</th>
                  <th className="text-center py-3 px-4">Questions</th>
                  <th className="text-center py-3 px-4">Time Limit</th>
                  <th className="text-center py-3 px-4">Created</th>
                  <th className="text-center py-3 px-4">Attempts</th>
                  <th className="text-center py-3 px-4">Avg. Score</th>
                  <th className="text-center py-3 px-4">Completion</th>
                  <th className="text-center py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {quizzes.map((quiz, index) => (
                  <tr key={quiz.id} className={`border-t border-gray-700 ${index % 2 === 1 ? 'bg-gray-750' : ''}`}>
                    <td className="py-3 px-4">
                      <div className="font-medium">{quiz.title}</div>
                      <div className="text-xs text-gray-400">{quiz.document}</div>
                    </td>
                    <td className="text-center py-3 px-4">{quiz.questions}</td>
                    <td className="text-center py-3 px-4">{quiz.timeLimit}</td>
                    <td className="text-center py-3 px-4">{quiz.created}</td>
                    <td className="text-center py-3 px-4">{quiz.attempts}</td>
                    <td className="text-center py-3 px-4">{quiz.avgScore}%</td>
                    <td className="text-center py-3 px-4">{quiz.completionRate}</td>
                    <td className="text-center py-3 px-4">
                      <div className="flex justify-center space-x-2">
                        <button className="p-1 text-blue-400 hover:text-blue-300">
                          <BarChart size={16} />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-gray-300">
                          <Download size={16} />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-gray-300">
                          <MoreHorizontal size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-gray-400">
            Showing 1-3 of 3 quizzes
          </div>
          <div className="flex">
            <button className="bg-gray-700 text-white px-3 py-1 rounded-l-md">Previous</button>
            <button className="bg-blue-600 text-white px-3 py-1">1</button>
            <button className="bg-gray-700 text-white px-3 py-1 rounded-r-md">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}