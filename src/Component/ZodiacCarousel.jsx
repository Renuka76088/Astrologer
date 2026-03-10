import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const ZodiacCarousel = () => {
  const zodiacs = [
    { name: 'Aries', icon: '♈', rotate: -10 },
    { name: 'Taurus', icon: '♉', rotate: -5 },
    { name: 'Gemini', icon: '♊', rotate: 0 },
    { name: 'Cancer', icon: '♋', rotate: 5 },
    { name: 'Leo', icon: '♌', rotate: 10 },
    { name: 'Virgo', icon: '♍', rotate: -10 },
    { name: 'Libra', icon: '♎', rotate: -5 },
    { name: 'Scorpio', icon: '♏', rotate: 0 },
  ];

  // Infinite loop ke liye array ko double kar rahe hain
  const duplicatedZodiacs = [...zodiacs, ...zodiacs];

  return (
    <div className="relative min-h-screen w-full bg-[#05051a] overflow-hidden flex flex-col items-center">
      
      {/* --- BACKGROUND ANIMATION --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
        
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.1, 0.5, 0.1] }}
            transition={{ duration: Math.random() * 5 + 2, repeat: Infinity }}
            className="absolute bg-white rounded-full w-[1px] h-[1px]"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      {/* --- CONTINUOUS SCROLLING SECTION --- */}
      <div className="relative z-10 w-full pt-24 pb-16 overflow-hidden">
        <motion.div 
          className="flex gap-6 px-4"
          animate={{ x: [0, -1600] }} // Adjust based on total cards width
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {duplicatedZodiacs.map((sign, index) => (
            <motion.div
              key={index}
              style={{ rotate: `${sign.rotate}deg` }}
              className="relative w-40 h-56 md:w-48 md:h-64 flex-shrink-0 group cursor-pointer"
            >
              <div className="w-full h-full bg-white/[0.03] backdrop-blur-lg border border-white/10 rounded-xl 
                flex flex-col items-center justify-center p-4 transition-all duration-500
                group-hover:border-purple-500/50 group-hover:bg-white/[0.08]">
                
                <span className="text-5xl md:text-6xl mb-6 drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]">
                  {sign.icon}
                </span>
                
                <h3 className="text-sm md:text-lg font-serif tracking-widest uppercase text-white/80 group-hover:text-white">
                  {sign.name}
                </h3>
                
                <div className="absolute bottom-4 w-8 h-[1px] bg-purple-500/30 group-hover:w-16 transition-all" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12 px-4">
          <h2 className="text-3xl md:text-5xl font-serif italic text-white/90">
            Know Yourself Through Your Sign
          </h2>
          <p className="text-blue-300/40 text-[10px] tracking-[0.5em] uppercase mt-4">Discover Your Celestial Path</p>
        </div>
      </div>

      {/* --- TESTIMONIALS (Static/Grid) --- */}
      <div className="relative z-10 w-full max-w-7xl px-6 py-20 bg-black/20 backdrop-blur-md border-t border-white/5">
        <h3 className="text-xl md:text-2xl font-serif text-center mb-12 uppercase tracking-widest text-white/70">What My Clients Say</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl relative mb-8 text-center italic group hover:bg-white/[0.05] transition-colors">
                <p className="text-gray-400 text-xs leading-relaxed">
                  "The cosmic reading was spot on. Highly recommended for anyone seeking clarity."
                </p>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0a0a25] rotate-45 border-b border-r border-white/5" />
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <img src={`https://i.pravatar.cc/100?u=${i}`} className="w-12 h-12 rounded-full border border-purple-500/50 p-0.5 grayscale" alt="" />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, s) => <Star key={s} size={10} className="fill-yellow-600 text-yellow-600" />)}
                </div>
                <p className="text-xs font-medium text-white/80">Niny Stevan</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ZodiacCarousel;