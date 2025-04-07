"use client"
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import ColourfulText from "@/components/ui/colourful-text";
import { Feaaturescard } from "./box/page";

export function HowitWorkspage() {
  return (
    <BackgroundBeamsWithCollision>
      <div className=" min-h-screen flex 
       gap-6 flex-col  justify-center items-center">
        <h1 className="text-7xl font-sans"><ColourfulText text="How It Works"></ColourfulText></h1>
 
        <Feaaturescard></Feaaturescard>

      </div>



    </BackgroundBeamsWithCollision>
  );
}
