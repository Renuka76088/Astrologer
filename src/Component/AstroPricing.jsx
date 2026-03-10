import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'STARKNIGHT',
    price: '₹2,499',
    tier: 'Basic Alignment',
    features: ['Precision Birth Chart Analysis', 'Lunar Cycle Synchronization', 'Bi-weekly Insight Reports'],
    cta: 'Explore Path'
  },
  {
    name: 'CELESTIAL',
    price: '₹5,999',
    tier: 'Professional Guidance',
    features: ['Everything in Starknight', '1-on-1 Strategic Consultation', 'Personalized Transit Mapping', 'Priority Portal Access'],
    popular: true,
    cta: 'Ascend Now'
  },
  {
    name: 'ORACLE',
    price: '₹12,499',
    tier: 'Elite Mastery',
    features: ['Full Destiny Blueprinting', 'Unlimited Strategic Sessions', 'Corporate Alignment Tools', 'VIP Direct Liaison'],
    cta: 'Master Destiny'
  }
];

const  AstroPricing = () => {
  return (
    <section className="relative py-24 bg-[#050505] text-white font-sans overflow-hidden">
      {/* Background: Fine Grain & Deep Glows */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-900/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-indigo-400 tracking-[0.4em] text-xs font-medium mb-3 uppercase"
          >
            Institutional Astrology
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-light tracking-tight"
          >
            Strategic <span className="italic font-serif">Providence</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 rounded-3xl overflow-hidden bg-black/40 backdrop-blur-md">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`p-10 md:p-14 flex flex-col border-b md:border-b-0 md:border-r border-white/10 last:border-0 relative group transition-colors duration-500 hover:bg-white/[0.02]`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
              )}

              <div className="mb-12">
                <h3 className="text-xs tracking-[0.3em] font-semibold text-gray-500 mb-6 uppercase">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-light tracking-tighter">{plan.price}</span>
                  <span className="text-gray-600 text-sm font-medium">/annum</span>
                </div>
                <p className="text-indigo-400/80 text-sm mt-4 font-medium tracking-wide italic">{plan.tier}</p>
              </div>

              <div className="flex-grow space-y-6 mb-12">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3 group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 mt-2 transition-transform duration-300 group-hover/item:scale-125"></div>
                    <span className="text-gray-400 text-[15px] leading-tight font-light tracking-wide">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`relative overflow-hidden w-full py-4 px-6 border transition-all duration-300 group/btn
                ${plan.popular 
                  ? 'bg-white text-black border-white hover:bg-transparent hover:text-white' 
                  : 'bg-transparent text-white border-white/20 hover:border-white'}`}>
                <span className="relative z-10 text-sm font-bold tracking-widest uppercase">{plan.cta}</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Aesthetic Accents */}
      <div className="absolute bottom-10 left-10 text-[100px] font-serif italic text-white/[0.02] pointer-events-none select-none">
        Astro
      </div>
    </section>
  );
};

export default  AstroPricing;