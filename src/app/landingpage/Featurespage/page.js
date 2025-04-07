"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import ColourfulText from "@/components/ui/colourful-text";
import { Feaaturescard } from "./box/page";

export default function Featurespage() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex min-h-screen gap-6 flex-col justify-center items-center">
        <h1 className="sm:text-7xl text-3xl text-center font-sans">
          <ColourfulText text="Why Choose Gyanmanch" />
        </h1>
        <h1 className="text-2xl font-sans w-[90%] text-center text-white">
          Our platform offers powerful features to create, share, and take quizzes
        </h1>
        <Feaaturescard />
      </div>
    </BackgroundBeamsWithCollision>
  );
}
