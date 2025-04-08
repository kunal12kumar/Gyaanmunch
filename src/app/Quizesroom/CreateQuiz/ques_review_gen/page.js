"use client"

import { useState } from 'react';
import { CheckCircle, Edit, Trash2, Plus, Save } from 'lucide-react';

export default function QuestionReviewPage() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What are the key components of a eukaryotic cell?",
      options: [
        "Nucleus, mitochondria, cell membrane, and cytoplasm",
        "Cell wall, chloroplasts, and flagella",
        "DNA, RNA, and proteins only",
        "Ribosomes and endoplasmic reticulum only"
      ],
      answer: 0,
      editing: false
    },
    {
      id: 2,
      question: "Which period saw the rise of industrialization in Western Europe?",
      options: [
        "The Renaissance",
        "The Industrial Revolution",
        "The Middle Ages",
        "The Enlightenment"
      ],
      answer: 1,
      editing: false
    },
    {
      id: 3,
      question: "What is a variable in programming?",
      options: [
        "A mathematical equation",
        "A storage location with an assigned name",
        "A function that performs calculations",
        "The main function in any program"
      ],
      answer: 1,
      editing: false
    }
  ]);

  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleEdit = (id) => {
    setQuestions(questions.map(q => 
      q.id === id ? {...q, editing: true} : q
    ));
    setActiveQuestion(questions.find(q => q.id === id));
  };

  const handleSave = (id) => {
    setQuestions(questions.map(q => 
      q.id === id ? {...q, editing: false} : q
    ));
    setActiveQuestion(null);
  };

  const handleDelete = (id) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  return (
    <div className="bg-[linear-gradient(to_right,_#000510_0%,_#001624_50%,_#000510_100%)] min-h-screen text-white">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
       

        {/* Main Content */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-center mb-2">Review Generated Questions</h2>
          <p className="text-gray-400 text-center mb-8">Edit, remove, or add questions before finalizing your quiz</p>

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
            <div className="h-1 flex-1 bg-blue-500 mx-2"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                3
              </div>
              <span className="text-xs mt-1 text-white">Review</span>
            </div>
            <div className="h-1 flex-1 bg-gray-600 mx-2"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white">
                4
              </div>
              <span className="text-xs mt-1 text-gray-400">Settings</span>
            </div>
            <div className="h-1 flex-1 bg-gray-600 mx-2"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white">
                5
              </div>
              <span className="text-xs mt-1 text-gray-400">Share</span>
            </div>
          </div>

          {/* Questions List */}
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <div className="mb-4 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Questions ({questions.length})</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center text-sm">
                <Plus size={16} className="mr-1" /> Add Question
              </button>
            </div>

            <div className="space-y-4">
              {questions.map((q) => (
                <div key={q.id} className="bg-gray-700 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <h4 className="font-medium">{q.question}</h4>
                    <div className="flex space-x-2">
                      <button onClick={() => handleEdit(q.id)} className="text-blue-400 hover:text-blue-300">
                        <Edit size={18} />
                      </button>
                      <button onClick={() => handleDelete(q.id)} className="text-red-400 hover:text-red-300">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  <div className="ml-4 space-y-1 text-sm text-gray-300">
                    {q.options.map((option, index) => (
                      <div key={index} className="flex items-center">
                        <div className={`w-4 h-4 rounded-full mr-2 ${index === q.answer ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                        <span>{option}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between">
          <button className="bg-gray-700 text-white px-6 py-2 rounded-md">
            Back
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
            Continue to Settings
          </button>
        </div>
      </div>
    </div>
  );
}