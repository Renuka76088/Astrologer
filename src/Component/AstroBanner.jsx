import React from 'react';
import { motion } from 'framer-motion';

const AstroStats = [
  { label: 'Celestial Alignments', value: '12k+', desc: 'Calculated Daily' },
  { label: 'Expert Oracles', value: '450+', desc: 'Verified Consultants' },
  { label: 'Accuracy Rate', value: '99.8%', desc: 'Based on Natal Data' },
  { label: 'Global Seekers', value: '1.2M', desc: 'Connected Souls' },
];

const AstroBanner = () => {
  return (
    <section className="relative w-full h-[280px] bg-[#030014] overflow-hidden flex items-center border-y border-white/5">
      
      {/* Background Layer: Blue & Purple Deep Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-[-10%] w-[40%] h-full bg-blue-900/20 blur-[120px] rounded-full opacity-50"></div>
        <div className="absolute bottom-0 right-[-10%] w-[40%] h-full bg-purple-900/20 blur-[120px] rounded-full opacity-50"></div>
        {/* Fine Mesh Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Side: Branding/Title */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <h2 className="text-sm tracking-[0.5em] text-blue-400 font-bold uppercase mb-2">
              Cosmic Metrics
            </h2>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-light text-white tracking-tighter">Real-time</span>
              <span className="text-3xl font-serif italic text-purple-400">Insights</span>
            </div>
          </motion.div>

          {/* Right Side: Professional Minimalist Cards */}
          <div className="flex flex-1 justify-between items-center gap-8 overflow-x-auto no-scrollbar py-4">
            {AstroStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group min-w-[150px]"
              >
                {/* Vertical Divider Accent */}
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 h-12 w-[1px] bg-gradient-to-b from-transparent via-blue-500/50 to-transparent hidden md:block"></div>
                
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="cursor-default"
                >
                  <div className="text-2xl font-bold text-white tracking-tight mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-gray-500 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-blue-400/60 italic font-medium">
                    {stat.desc}
                  </div>
                </motion.div>

                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 bg-blue-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Aesthetic Thin Line Animation (Moving across the bottom) */}
      <motion.div 
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"
      />
    </section>
  );
};

export default AstroBanner;