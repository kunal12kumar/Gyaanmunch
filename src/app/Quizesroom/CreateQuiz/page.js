"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import ColourfulText from "@/components/ui/colourful-text";
import Createquizcard from "./box/page";
// Fix the import path to point directly to the component file


export default function CreateQuiz() {
    const [questionCount, setQuestionCount] = useState(10);
    const [selectedTypes, setSelectedTypes] = useState({
        multipleChoice: true,
        trueFalse: true,
        fillInBlanks: false
    });

    const handleTypeChange = (type) => {
        setSelectedTypes({
            ...selectedTypes,
            [type]: !selectedTypes[type]
        });
    };
    
    return (
        <div
            className="min-h-screen w-full gap-8 bg-[linear-gradient(to_right,_#000510_0%,_#001624_50%,_#000510_100%)] relative flex flex-col pb-8 antialiased">
            <h1 className="sm:text-5xl text-2xl text-center "><ColourfulText text="Create Your Quiz"></ColourfulText></h1>
            <h1 className="text-center mx-auto text-2xl text-white w-[90%]">Choose How you want to generate Quiz questions</h1>

            {/* Correct component usage */}

            <Createquizcard></Createquizcard>
           
            <div className="flex items-center justify-center p-4">
                <div className="w-[90%] bg-gray-800/60 rounded-2xl p-8 border border-gray-700">
                    <div className="flex items-center gap-2 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <h2 className="text-xl font-bold text-white">Quiz Settings</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {/* Quiz Title */}
                        <div>
                            <label className="block text-gray-300 mb-2">Quiz Title</label>
                            <input
                                type="text"
                                placeholder="Enter a title for your quiz"
                                className="w-full bg-gray-900 text-white border border-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Difficulty Level */}
                        <div>
                            <label className="block text-gray-300 mb-2">Difficulty Level</label>
                            <select className="w-full bg-gray-900 text-white border border-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                                <option>Medium</option>
                                <option>Easy</option>
                                <option>Hard</option>
                            </select>
                        </div>

                        {/* Question Types */}
                        <div>
                            <label className="block text-gray-300 mb-2">Question Types</label>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="multipleChoice"
                                        checked={selectedTypes.multipleChoice}
                                        onChange={() => handleTypeChange('multipleChoice')}
                                        className="h-4 w-4 text-blue-500"
                                    />
                                    <label htmlFor="multipleChoice" className="ml-2 text-gray-300">Multiple Choice</label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="trueFalse"
                                        checked={selectedTypes.trueFalse}
                                        onChange={() => handleTypeChange('trueFalse')}
                                        className="h-4 w-4 text-blue-500"
                                    />
                                    <label htmlFor="trueFalse" className="ml-2 text-gray-300">True/False</label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="fillInBlanks"
                                        checked={selectedTypes.fillInBlanks}
                                        onChange={() => handleTypeChange('fillInBlanks')}
                                        className="h-4 w-4 text-blue-500"
                                    />
                                    <label htmlFor="fillInBlanks" className="ml-2 text-gray-300">Fill in Blanks</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {/* Number of Questions */}
                        <div>
                            <label className="block text-gray-300 mb-2">Number of Questions</label>
                            <div className="flex flex-col">
                                <input
                                    type="range"
                                    min="1"
                                    max="50"
                                    value={questionCount}
                                    onChange={(e) => setQuestionCount(e.target.value)}
                                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                />
                                <span className="text-gray-300 text-right mt-1">{questionCount} questions</span>
                            </div>
                        </div>

                        {/* Time Limit */}
                        <div>
                            <label className="block text-gray-300 mb-2">Time Limit per Question</label>
                            <select className="w-full bg-gray-900 text-white border border-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                                <option>30 seconds</option>
                                <option>15 seconds</option>
                                <option>45 seconds</option>
                                <option>60 seconds</option>
                                <option>No limit</option>
                            </select>
                        </div>

                        {/* Access Settings */}
                        <div>
                            <label className="block text-gray-300 mb-2">Access Settings</label>
                            <select className="w-full bg-gray-900 text-white border border-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                                <option>Shareable link</option>
                                <option>Private</option>
                                <option>Password protected</option>
                            </select>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex sm:flex-row flex-col justify-center gap-4 mt-6">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-8 rounded-full transition-colors">
                            Generate Quiz
                        </button>
                        <button className="border border-gray-600 hover:border-gray-500 text-white font-medium py-2 px-8 rounded-full transition-colors">
                            Save Draft
                        </button>
                        <button className="border border-gray-600 hover:border-gray-500 text-white font-medium py-2 px-8 rounded-full transition-colors">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>

            <BackgroundBeams />
        </div>
    );
}