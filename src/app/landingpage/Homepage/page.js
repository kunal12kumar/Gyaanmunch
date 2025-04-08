"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import ColourfulText from "@/components/ui/colourful-text";
import Link from "next/link";

export function Homepage() {
  return (
    <div
      className="min-h-screen w-full gap-8 bg-[linear-gradient(to_right,_#000510_0%,_#001624_50%,_#000510_100%)] relative flex  flex-col items-center justify-center antialiased">
      <div className="w-full mx-auto p-4">
        <h1
          className="relative z-10 text-3xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Create <ColourfulText text="Smart Quizzes"></ColourfulText> From Any Document
        </h1>

       
        


      </div>

      <h1 className="text-xl w-[80%] font-sans text-white text-center">Upload PDF files or text and let our AI generate intelligent quiz questions. Learn , test and share knowledge with friends and colleagues</h1>

      <div className="flex w-[60%] flex-col sm:flex-row justify-center items-center gap-8">
      <Link href="/Quizesroom/CreateQuiz"> <button className="w-[100%] px-8 text-center text-xl cursor-pointer hover:scale-90 text-bold box-border border-1 border-[#4a4ae3] h-[40px] rounded-2xl bg-[#3b3bca] ">Create Quiz Now

        </button> </Link> 

        <Link href="/Quizesroom/CreateQuiz"> <button className="w-[100%] px-8 text-center text-xl  hover:scale-90 cursor-pointer text-bold box-border border-1 border-[#4a4ae3] h-[40px] rounded-2xl bg-[#3b3bca] ">Join Quizes

        </button>  </Link> 

        
      </div>


      <BackgroundBeams />
    </div>
  );
}
