"use client"
import React from "react"
import { FaFileUpload, FaRegPaste, FaStar, FaImage, FaTools } from 'react-icons/fa';




export default function createquizcard() {


    return (
      <div className="w-full h-full py-16 px-4">
  
        
  
  
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizOptions.map((proj, index) => (
          <div 
          className="flex flex-col items-center justify-center p-8 rounded-xl text-center"
          style={{
            background: "#1e1e29",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)"
          }}
        >
          {/* Document icon */}
          <div className="w-16 h-16 mb-2 rounded-full bg-indigo-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        
          {/* Title */}
          <h2 className="text-xl font-bold text-white mb-1">Upload Document</h2>
          
          {/* Description */}
          <p className="text-xs text-gray-400 mb-3">
            Upload PDF, DOCX, or TXT files to generate questions from your content
          </p>
        
          {/* Supported formats text */}
          <p className="text-xs text-gray-500">
            Supports: PDF, DOCX, TXT (Max 5MB)
          </p>
        </div>
        ))}
      </div>
    </div>
  
  
  
  
    );
  }

  const quizOptions = [
    {
      title: "Upload Document",
      description: "Upload PDF, DOCX, or TXT files to generate questions from your content",
      details: "Supports: PDF, DOCX, TXT (Max 5MB)",
      icon: "📄"
    },
    {
      title: "Paste Text",
      description: "Paste text passages to create questions from specific content",
      details: "Up to 5000 characters",
      icon: "📋"
    },
    {
      title: "Choose Topic",
      description: "Select from popular topics or enter your own subject",
      details: ["Science", "History", "Tech"],
      icon: "⭐"
    },
    {
      title: "Upload Image",
      description: "Generate questions from charts, diagrams, or information-rich images",
      details: "Supports: JPG, PNG (Max 2MB)",
      icon: "🖼️"
    },
    {
      title: "Custom Quiz",
      description: "Create questions manually or mix generation methods",
      details: "For advanced customization",
      icon: "🛠️"
    }
  ];
  
  
  