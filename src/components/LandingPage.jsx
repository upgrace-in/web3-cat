import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom'
import Contact from "./Contact/Contact"
import Counter from "./Counter/Counter"
import Feature from "./Features/Feature"
import Footer from "./Footer/Footer"
import Hero from "./Hero/Hero"
import MysteryBox from "./MysteryBox/MysteryBox"
import Sidebar from "./Sidebar/Sidebar"
import Token from "./Token/Token"
import Roadmap from "./Roadmap/Roadmap.jsx"
import Team from "./Team/Team.jsx"
import Partners from "./Partners/Partners.jsx"
import WOW from 'wow.js'




export const LandingPage = () => {
    const wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        live: true
      });
      wow.init();
    return (
        <>
            <div className="heroSection">
                <div>
                    <Hero />
                </div>
            </div>
            
            <MysteryBox />
            <Counter />
            <Contact />
            <Feature />
            <Token />
            <Roadmap />
            <Team />
            <Partners />
            <Footer />
        </>
    )


}