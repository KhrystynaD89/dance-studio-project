import React from 'react';
import'../../App.css';
import HeroSection from '../HeroSection';
import AboutSection from '../AboutSection';
import Schedule from '../Schedule';



function Home() {
    return (
        <>
        <HeroSection />
        <AboutSection />
        <Schedule />
        </>
    )
}

export default Home;