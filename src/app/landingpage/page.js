"use client"
import React from "react"
import { Homepage } from "./Homepage/page"
import  Featurespage  from "./Featurespage/page"
import HowitWorkspage from "./HowItWork/page"
import Footer from "./Footer/paje"




export default function Landingpage(){

    return(
        <div>
            <Homepage></Homepage>
            <Featurespage></Featurespage>
            <HowitWorkspage></HowitWorkspage>
            <Footer></Footer>
            
        </div>
    )
}