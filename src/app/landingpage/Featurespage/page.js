"use client"
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import ColourfulText from "@/components/ui/colourful-text";
import { Feaaturescard } from "./box/page";

export function Featurespage() {
  return (
    <BackgroundBeamsWithCollision>
      <div className=" flex 
       gap-6 flex-col  justify-center items-center">
        <h1 className="text-7xl font-sans"><ColourfulText text="Why Choose Gyanmanch"></ColourfulText></h1>
        <h1 className="text-2xl font-sans text-white">Our platform offers powerful features to create share , and take quizzes</h1>
        <Feaaturescard></Feaaturescard>

      </div>



    </BackgroundBeamsWithCollision>
  );
}
