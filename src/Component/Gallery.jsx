import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const images = [
  { id: 1, url: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=1000', title: 'Nebula Dreams', size: 'col-span-2 row-span-2' },
  { id: 2, url: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1000', title: 'Stellar Dust', size: 'col-span-1 row-span-1' },
  { id: 3, url: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000', title: 'Orbital View', size: 'col-span-1 row-span-1' },
  { id: 4, url: 'https://media.istockphoto.com/id/1414633082/vector/zodiac-circle-on-the-background-of-the-dark-space-astrology.jpg?s=612x612&w=0&k=20&c=cUjuYF_hyZEAA5G6cKtx3KwW6KbNUZBdx11jPd71RiE=', title: 'Deep Space', size: 'col-span-1 row-span-2' },
  { id: 5, url: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1000', title: 'Galactic Core', size: 'col-span-2 row-span-1' },
];

const Gallery = () => {
  return (
    <section className="relative min-h-screen bg-[#020617] py-20 px-4 overflow-hidden">
      {/* Animated Background Stars */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
        <motion.div 
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Sparkles className="text-purple-400 w-5 h-5" />
            <span className="text-purple-400 tracking-[0.3em] uppercase text-sm font-semibold">Cosmic Showcase</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Universe</span>
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-3 gap-4 h-full md:h-[800px]">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`${img.size} relative group overflow-hidden rounded-3xl border border-white/10 shadow-2xl cursor-pointer`}
            >
              {/* Image with Parallax-like effect */}
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-8">
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="text-white text-2xl font-bold"
                >
                  {img.title}
                </motion.p>
                <div className="flex gap-2 mt-2">
                  <div className="h-1 w-8 bg-purple-500 rounded-full"></div>
                  <p className="text-gray-300 text-xs uppercase tracking-widest">Explore Depth</p>
                </div>
              </div>

              {/* Glowing Border on Hover */}
              <div className="absolute inset-0 border-2 border-purple-500/0 group-hover:border-purple-500/50 rounded-3xl transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;