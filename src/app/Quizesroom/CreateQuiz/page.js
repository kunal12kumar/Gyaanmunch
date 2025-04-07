"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import ColourfulText from "@/components/ui/colourful-text";
import Createquizcard from "./box/page";

export default function CreateQuiz() {
  return (
    <div
      className="min-h-screen w-full gap-8 bg-[linear-gradient(to_right,_#000510_0%,_#001624_50%,_#000510_100%)] relative flex  flex-col   antialiased">
        <h1 className="sm:text-5xl text-2xl text-center "><ColourfulText text="Create Your Quiz"></ColourfulText></h1>
        <h1 className="text-center text-2xl text-white ">Choose How you want to generate Quiz questions</h1>

        <Createquizcard></Createquizcard>



      


      <BackgroundBeams />
    </div>
  );
}
