"use client"
import React from "react"



export function Feaaturescard() {


    return (
        <div className="w-full h-full py-16 px-4">




            <div className="container min-h-screen mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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


const boxcontent = [
    {
        "title": "PDF to Quiz",
        "description": "Upload any PDF document and our AI will automatically generate relevant quiz questions based on the content."
    },
    {
        "title": "Text to Questions",
        "description": "Simply paste any text and get intelligent questions that test understanding of the material."
    },
    {
        "title": "Share & Collaborate",
        "description": "Invite friends, students, or colleagues to take your quizzes or collaborate on creating them."
    },
    {
        "title": "Custom Questions",
        "description": "Edit AI-generated questions or create your own to perfectly match your learning objectives."
    },
    {
        "title": "Instant Results",
        "description": "Get immediate feedback with detailed performance analysis and suggestions for improvement."
    },
    {
        "title": "Save & Review",
        "description": "Save quizzes to retake later and track your progress over time for continuous improvement."
    }
]

