"use client"
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import ColourfulText from "@/components/ui/colourful-text";
import Feaaturescard  from "./box/page";

export default function HowitWorkspage() {
  return (
    <BackgroundBeamsWithCollision>
      <div className=" min-h-screen flex 
       gap-6 flex-col  justify-center items-center">
        <h1 className="sm:text-7xl text-4xl mt-8 font-sans text-center"><ColourfulText text="How It Works"></ColourfulText></h1>
 
        <Feaaturescard></Feaaturescard>

      </div>



    </BackgroundBeamsWithCollision>
  );
}
