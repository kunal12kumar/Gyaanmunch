"use client"
import React from "react"



export default function Feaaturescard() {


    return (
      <div className="w-full h-full py-16 px-4">
  
        
  
  
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {boxcontent.map((proj, index) => (
          <div 
            key={index}
            className="relative flex flex-col items-center justify-center p-8 rounded-3xl text-center h-full" 
            style={{
              background: "linear-gradient(180deg, #1e1731 0%, #12111a 100%)",
              boxShadow: "0 0 40px rgba(88, 53, 156, 0.3)"
            }}
          >
            {/* Glow effect */}
            <div className="absolute -z-10 w-3/4 h-3/4 rounded-full bg-purple-700/20 blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{proj.title}</h2>
            
            <p className="text-sm md:text-base text-gray-300">
              {proj.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  
  
  
  
    );
  }


  const boxcontent=[
    {
      "step": 1,
      "title": "Upload Content",
      "description": "Upload your PDF document or paste text content that you want to create a quiz from."
    },
    {
      "step": 2,
      "title": "Generate Questions",
      "description": "Our AI analyzes your content and automatically generates relevant quiz questions."
    },
    {
      "step": 3,
      "title": "Customize Quiz",
      "description": "Edit questions, add your own, adjust difficulty, and set time limits as needed."
    },
    {
      "step": 4,
      "title": "Share & Take",
      "description": "Share your quiz with others or take it yourself and get instant results and feedback."
    }
  ]
  
  