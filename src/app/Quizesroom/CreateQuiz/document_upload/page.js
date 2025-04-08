// in this we will put the section in which there will uption to upload the section pdf 

"use client"
import React from "react"
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function UploadSection() {

    return (

        <div
            className="min-h-screen w-full gap-8 bg-[linear-gradient(to_right,_#000510_0%,_#001624_50%,_#000510_100%)] relative flex  flex-col items-center justify-center antialiased">


            <div className="min-h-screen w-full bg-[#0f1420] text-white font-['Inter',sans-serif]">
                <div className="w-[90%] mx-auto px-5 py-5">
                    {/* Header */}
                    
                    {/* Page Title */}
                    <h1 className="text-center text-2xl font-bold mb-2">Upload Document</h1>
                    <p className="text-center text-[#8b8fa3] mb-10">Upload a document to generate quiz questions automatically</p>

                    {/* Upload Area */}
                    <div className="bg-white/5 border-2 border-dashed border-white/20 rounded-xl p-10 text-center mb-8 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-white/30">
                        <div className="w-16 h-16 bg-[#6c5ce7] rounded-full flex items-center justify-center mx-auto mb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="17 8 12 3 7 8"></polyline>
                                <line x1="12" y1="3" x2="12" y2="15"></line>
                            </svg>
                        </div>
                        <div className="text-lg mb-4">Drag and drop your file here</div>
                        <div className="text-[#8b8fa3] mb-5">or click to browse files from your device</div>
                        <button className="bg-[#4664f6] text-white border-none py-3 px-6 rounded-md text-base cursor-pointer transition-colors duration-300 hover:bg-[#5471fd]">
                            Browse Files
                        </button>
                        <div className="text-sm text-[#8b8fa3] mt-4">Supports: PDF, DOCX, TXT (Max 5MB)</div>
                    </div>

                    {/* OR Divider */}
                    <div className="flex items-center text-center my-8 text-[#8b8fa3]">
                        <div className="flex-1 border-b border-white/10"></div>
                        <div className="px-3">OR</div>
                        <div className="flex-1 border-b border-white/10"></div>
                    </div>

                    {/* Recent Files */}
                    <div className="bg-white/5 rounded-xl p-5 mt-8">
                        <div className="text-lg font-medium mb-4">Recent Documents</div>

                        {/* File Item 1 */}
                        <div className="flex items-center p-3 rounded-md transition-colors duration-300 hover:bg-white/10 cursor-pointer">
                            <div className="w-8 h-8 bg-[#ff5a7e] rounded-md flex items-center justify-center mr-3 text-sm">
                                PDF
                            </div>
                            <div className="flex-1">
                                <div className="text-sm mb-1">Introduction_to_Biology.pdf</div>
                                <div className="text-xs text-[#8b8fa3]">4.2 MB • Uploaded 2 days ago</div>
                            </div>
                        </div>

                        {/* File Item 2 */}
                        <div className="flex items-center p-3 rounded-md transition-colors duration-300 hover:bg-white/10 cursor-pointer">
                            <div className="w-8 h-8 bg-[#4664f6] rounded-md flex items-center justify-center mr-3 text-sm">
                                DOC
                            </div>
                            <div className="flex-1">
                                <div className="text-sm mb-1">World_History_Notes.docx</div>
                                <div className="text-xs text-[#8b8fa3]">2.1 MB • Uploaded 1 week ago</div>
                            </div>
                        </div>

                        {/* File Item 3 */}
                        <div className="flex items-center p-3 rounded-md transition-colors duration-300 hover:bg-white/10 cursor-pointer">
                            <div className="w-8 h-8 bg-[#6c5ce7] rounded-md flex items-center justify-center mr-3 text-sm">
                                TXT
                            </div>
                            <div className="flex-1">
                                <div className="text-sm mb-1">Programming_Basics.txt</div>
                                <div className="text-xs text-[#8b8fa3]">0.8 MB • Uploaded 2 weeks ago</div>
                            </div>
                        </div>
                    </div>

                    {/* Button Container */}
                    <div className="flex justify-between mt-10">
                        <button className="bg-transparent border border-white/20 text-white py-3 px-6 rounded-md text-base cursor-pointer transition-colors duration-300 hover:bg-white/10">
                            Back
                        </button>
                        <button className="bg-[#4664f6] text-white border-none py-3 px-6 rounded-md text-base cursor-pointer transition-colors duration-300 hover:bg-[#5471fd]">
                            Continue
                        </button>
                    </div>
                </div>
            </div>

            <BackgroundBeams />
        </div>

    )
}