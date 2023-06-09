import React from 'react';
import'../../App.css';
import HeroSection from '../HeroSection';
import AboutSection from '../AboutSection';
import Schedule from '../Schedule';
import GalleryCarousel from '../GalleryCarousel';
import Footer from '../Footer';



function Home() {
    return (
        <>
        <HeroSection />
        <AboutSection />
        <Schedule />
        <GalleryCarousel />
        <Footer/>
        </>
    )
}

export default Home;