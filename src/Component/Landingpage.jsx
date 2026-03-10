import React from 'react'
import { useState } from "react";
import HoroscopeGrid from "./HoroscopeGrid";
import { motion,AnimatePresence } from 'framer-motion';
import Zodiac from '../assets/Zodiac.png'
import { Sparkles, CalendarDays, MapPin, Ticket } from 'lucide-react';
import AstrologySpeakers from './AstrologySpeakers';
import ZodiacCarousel from './ZodiacCarousel';
import Gallery from './Gallery';
import AstroPricing from './AstroPricing';
import AstroBanner from './AstroBanner';
import Footer from './Footer';
import Banner from './Banner';
import PageHeader from './PageHeader';

function Landingpage() {

 const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems1 = ["About", "Speakers", "Schedule", "Contact"];
  const menuItems = ["Home", "About", "Speakers", "Schedule", "Tickets"];

  const zodiacSymbols = ["♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓"];

  return (
   <>
      <div className="relative min-h-screen bg-[#020205] text-[#D4AF37] font-serif overflow-hidden">

      <PageHeader
        menuItems1={menuItems1}
        menuItems={menuItems}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <Banner zodiacSymbols={zodiacSymbols} />
 <HoroscopeGrid/>

    <div className="min-h-screen bg-[#0d0b21] bg-[radial-gradient(circle_at_top,_#1a1645_0%,_#0d0b21_70%)] text-white flex items-center justify-center p-6 font-sans">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-24">
        
        {/* Left Side: Animated Zodiac Wheel */}
        <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] flex items-center justify-center">
          {/* Rotating Outer Ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-slate-700 rounded-full opacity-40"
          />
          
          {/* Main Zodiac Image/SVG */}
         <motion.img
src={Zodiac} // Replace with your exact SVG/Image path
alt="Zodiac Wheel"
className="w-full h-full object-contain brightness-0 invert opacity-80" // 'brightness-0 invert' forces the image to pure white
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1, rotate: 360 }}
transition={{
opacity: { duration: 1 },
scale: { duration: 1 },
rotate: { duration: 120, repeat: Infinity, ease: "linear" }
}}
/>

          {/* Sun Center Glow */}
          <div className="absolute w-20 h-20 md:w-32 md:h-32 bg-blue-500/20 blur-3xl rounded-full" />
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 space-y-10">
          <motion.h1 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-serif tracking-wide leading-tight"
          >
            Discover The Stars Of Our <br /> 
            <span className="text-white/90">Astro Conference</span>
          </motion.h1>

          <div className="space-y-8">
            {/* When Section */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="text-blue-400">✦──✦</span>
                <h3 className="text-2xl font-semibold tracking-widest uppercase">When</h3>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-lg text-lg">
                The 6th International astrology conference will be a 
                memorable journey into participating in the transition 
                and transformation. This conference is dedicated to 
                honouring the divisions in our tradition.
              </p>
            </motion.div>

            {/* Where Section */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="group"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="text-blue-400">✦──✦</span>
                <h3 className="text-2xl font-semibold tracking-widest uppercase">Where</h3>
              </div>
              <p className="text-white font-medium text-lg tracking-wider">
                DOLPHIN HOTEL, NEW HAVEN, CT
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>

   
    </div>
    <AstrologySpeakers/>
    < ZodiacCarousel/>
    <Gallery/>
    <AstroPricing/>
    <AstroBanner/>
    <Footer/>
   
   </>
  )
}

export default Landingpage