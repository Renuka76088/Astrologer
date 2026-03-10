// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Star, MessageCircle, PhoneCall, Award, Globe2, IndianRupee, ChevronRight, ChevronLeft } from 'lucide-react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import axios from 'axios';

// const AstrologySpeakers = () => {
//   const [astrologers, setAstrologers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAstrologers = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/api/astrologer');
//         // API returns { total, astrologers }
//         setAstrologers(response.data.astrologers);
//       } catch (error) {
//         console.error('Error fetching astrologers:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAstrologers();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64 text-white text-xl">
//         Loading Astrologers...
//       </div>
//     );
//   }

//   return (
//     <section className="py-24 bg-[#020617] relative overflow-hidden">
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />
//       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-center mb-12"
//         >
//           <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Trusted Guides</span>
//           <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
//             Consult Our <span className="font-serif italic text-amber-200">Cosmic Experts</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto" />
//         </motion.div>

//         <div className="max-w-7xl mx-auto relative group">
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             autoplay={{ delay: 4000, disableOnInteraction: false }}
//             pagination={{ clickable: true, dynamicBullets: true }}
//             navigation={{
//                 nextEl: '.swiper-button-next-custom',
//                 prevEl: '.swiper-button-prev-custom',
//             }}
//             breakpoints={{
//               1024: { slidesPerView: 2 },
//             }}
//             className="pb-16"
//           >
//             {astrologers.map((astrologer) => (
//               <SwiperSlide key={astrologer._id}>
//                 <div className="relative h-full flex flex-col sm:flex-row bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl overflow-hidden hover:border-amber-500/30 transition-all duration-500 shadow-2xl m-2">
//                   <div className="sm:w-2/5 relative h-64 sm:h-auto overflow-hidden">
//                     <img 
//                       src={astrologer.profilePicture?.url || ''} 
//                       alt={astrologer.fullName} 
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-900 via-transparent to-transparent" />
//                     <div className="absolute top-4 left-4 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-green-500/30">
//                       <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
//                       <span className="text-[10px] text-green-400 font-bold uppercase tracking-wider">Live</span>
//                     </div>
//                   </div>

//                   <div className="p-6 sm:w-3/5 flex flex-col justify-between">
//                     <div>
//                       <div className="flex justify-between items-start mb-2">
//                         <div>
//                           <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
//                             {astrologer.fullName}
//                           </h3>
//                           <p className="text-amber-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
//                             <Award size={12} /> {astrologer.specialization}
//                           </p>
//                         </div>
//                         <div className="bg-amber-500/10 text-amber-500 px-2 py-1 rounded-lg flex items-center gap-1 text-xs font-bold border border-amber-500/20">
//                           <Star size={12} fill="currentColor" /> {astrologer.rating || '5.0'}
//                         </div>
//                       </div>

//                       <p className="text-slate-400 text-xs italic mb-4 line-clamp-2">
//                         "{astrologer.bio}"
//                       </p>

//                       <div className="space-y-2 mb-6">
//                         <div className="flex items-center gap-3 text-slate-300 text-xs">
//                           <div className="p-1 bg-slate-800 rounded text-blue-400"><Globe2 size={12}/></div>
//                           <span>{astrologer.language}</span>
//                         </div>
//                         <div className="flex items-center gap-3 text-slate-300 text-xs">
//                           <div className="p-1 bg-slate-800 rounded text-emerald-400"><IndianRupee size={12}/></div>
//                           <span className="font-semibold text-white text-sm">₹{astrologer.price}<span className="text-slate-400 font-normal"> / min</span></span>
//                           <span className="ml-auto text-[10px] bg-slate-800 px-2 py-1 rounded text-slate-400 tracking-tighter">Exp: {astrologer.experience}</span>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="flex gap-2">
//                       <button className="flex-1 bg-white/5 hover:bg-white/10 text-white border border-white/10 py-2 rounded-xl flex items-center justify-center gap-2 transition-all hover:border-amber-500/50 text-xs font-bold uppercase">
//                         <MessageCircle size={16} className="text-amber-400" /> Chat
//                       </button>
//                       <button className="flex-1 bg-amber-500 hover:bg-amber-400 text-slate-950 py-2 rounded-xl flex items-center justify-center gap-2 font-bold transition-all shadow-lg shadow-amber-500/20 text-xs font-bold uppercase">
//                         <PhoneCall size={16} /> Call Now
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           <button className="swiper-button-prev-custom absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 bg-slate-800/50 p-2 rounded-full border border-white/10 text-white hover:bg-amber-500 hover:text-slate-900 transition-all opacity-0 group-hover:opacity-100 hidden md:block">
//             <ChevronLeft size={24} />
//           </button>
//           <button className="swiper-button-next-custom absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 bg-slate-800/50 p-2 rounded-full border border-white/10 text-white hover:bg-amber-500 hover:text-slate-900 transition-all opacity-0 group-hover:opacity-100 hidden md:block">
//             <ChevronRight size={24} />
//           </button>
//         </div>

//         <style jsx global>{`
//           .swiper-pagination-bullet {
//             background: #f59e0b !important;
//           }
//           .swiper-pagination-bullet-active {
//             width: 24px !important;
//             border-radius: 4px !important;
//           }
//         `}</style>

//         <motion.div className="text-center mt-8">
//           <button className="group text-white font-bold flex items-center gap-2 mx-auto hover:text-amber-400 transition-colors">
//             View All Astrologers <ChevronRight className="group-hover:translate-x-1 transition-transform" />
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AstrologySpeakers;

import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle, PhoneCall, Award, Globe2, IndianRupee, ChevronRight, ChevronLeft } from 'lucide-react';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const astrologers = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    specialty: "Vedic Astrology, Kundli",
    experience: "15+ Years",
    rating: "4.9",
    languages: ["English", "Hindi", "Sanskrit"],
    price: "45",
    bio: "Specializing in career guidance and relationship compatibility using ancient Vedic principles.",
    img: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    name: "Acharya Vikram",
    specialty: "Numerology & Vastu",
    experience: "12+ Years",
    rating: "4.8",
    languages: ["Hindi", "Punjabi"],
    price: "30",
    bio: "Helping individuals align their home energy and name vibrations for maximum financial success.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 3,
    name: "Meera Kapadia",
    specialty: "Tarot Card Reader",
    experience: "10+ Years",
    rating: "5.0",
    languages: ["English", "Gujarati", "Hindi"],
    price: "50",
    bio: "Intuitive reader focusing on emotional healing and helping you navigate life's crossroads.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 4,
    name: "Pt. Rajesh Kumar",
    specialty: "Palmistry & Face Reading",
    experience: "20+ Years",
    rating: "4.7",
    languages: ["Hindi", "English"],
    price: "40",
    bio: "An expert in reading life lines and providing instant clarity through traditional palmistry.",
    img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=400",
  }
];

const AstrologySpeakers = () => {
  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Trusted Guides</span>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
            Consult Our <span className="font-serif italic text-amber-200">Cosmic Experts</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto" />
        </motion.div>

        {/* Swiper Container */}
        <div className="max-w-7xl mx-auto relative group">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
              1024: { slidesPerView: 2 },
            }}
            className="pb-16"
          >
            {astrologers.map((astrologer) => (
              <SwiperSlide key={astrologer.id}>
                <div className="relative h-full flex flex-col sm:flex-row bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl overflow-hidden hover:border-amber-500/30 transition-all duration-500 shadow-2xl m-2">
                  
                  {/* Profile Image Section */}
                  <div className="sm:w-2/5 relative h-64 sm:h-auto overflow-hidden">
                    <img 
                      src={astrologer.img} 
                      alt={astrologer.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-900 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-green-500/30">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-[10px] text-green-400 font-bold uppercase tracking-wider">Live</span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
                            {astrologer.name}
                          </h3>
                          <p className="text-amber-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                            <Award size={12} /> {astrologer.specialty}
                          </p>
                        </div>
                        <div className="bg-amber-500/10 text-amber-500 px-2 py-1 rounded-lg flex items-center gap-1 text-xs font-bold border border-amber-500/20">
                          <Star size={12} fill="currentColor" /> {astrologer.rating}
                        </div>
                      </div>

                      <p className="text-slate-400 text-xs italic mb-4 line-clamp-2">
                        "{astrologer.bio}"
                      </p>

                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-3 text-slate-300 text-xs">
                          <div className="p-1 bg-slate-800 rounded text-blue-400"><Globe2 size={12}/></div>
                          <span>{astrologer.languages.join(", ")}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-300 text-xs">
                          <div className="p-1 bg-slate-800 rounded text-emerald-400"><IndianRupee size={12}/></div>
                          <span className="font-semibold text-white text-sm">₹{astrologer.price}<span className="text-slate-400 font-normal"> / min</span></span>
                          <span className="ml-auto text-[10px] bg-slate-800 px-2 py-1 rounded text-slate-400 tracking-tighter">Exp: {astrologer.experience}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 bg-white/5 hover:bg-white/10 text-white border border-white/10 py-2 rounded-xl flex items-center justify-center gap-2 transition-all hover:border-amber-500/50 text-xs font-bold uppercase">
                        <MessageCircle size={16} className="text-amber-400" /> Chat
                      </button>
                      <button className="flex-1 bg-amber-500 hover:bg-amber-400 text-slate-950 py-2 rounded-xl flex items-center justify-center gap-2 font-bold transition-all shadow-lg shadow-amber-500/20 text-xs font-bold uppercase">
                        <PhoneCall size={16} /> Call Now
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 bg-slate-800/50 p-2 rounded-full border border-white/10 text-white hover:bg-amber-500 hover:text-slate-900 transition-all opacity-0 group-hover:opacity-100 hidden md:block">
            <ChevronLeft size={24} />
          </button>
          <button className="swiper-button-next-custom absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 bg-slate-800/50 p-2 rounded-full border border-white/10 text-white hover:bg-amber-500 hover:text-slate-900 transition-all opacity-0 group-hover:opacity-100 hidden md:block">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Global CSS for Swiper Dots */}
        <style jsx global>{`
          .swiper-pagination-bullet {
            background: #f59e0b !important;
          }
          .swiper-pagination-bullet-active {
            width: 24px !important;
            border-radius: 4px !important;
          }
        `}</style>

        {/* View All Button */}
        <motion.div className="text-center mt-8">
          <button className="group text-white font-bold flex items-center gap-2 mx-auto hover:text-amber-400 transition-colors">
            View All Astrologers <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AstrologySpeakers;