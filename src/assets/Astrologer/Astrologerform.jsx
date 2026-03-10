// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { User, Briefcase, Sparkles, Languages, IndianRupee, FileText, Camera, CheckCircle2, Star } from 'lucide-react';
// import axios from 'axios';

// const Astrologerform = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     experience: '',
//     specialization: '',
//     language: '',
//     price: '',
//     bio: '',
//     profilePicture: null,
//   });
//   const [loading, setLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files) {
//       setFormData({ ...formData, [name]: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setSuccessMessage('');

//     try {
//       const data = new FormData();
//       data.append('fullName', formData.fullName);
//       data.append('experience', formData.experience);
//       data.append('specialization', formData.specialization);
//       data.append('language', formData.language);
//       data.append('price', formData.price);
//       data.append('bio', formData.bio);
//       if (formData.profilePicture) {
//         data.append('profilePicture', formData.profilePicture);
//       }

//       const response = await axios.post(
//         'http://localhost:4000/api/astrologer/register',
//         data,
//         {
//           headers: { 'Content-Type': 'multipart/form-data' },
//         }
//       );

//       setSuccessMessage(response.data.message);
//       setFormData({
//         fullName: '',
//         experience: '',
//         specialization: '',
//         language: '',
//         price: '',
//         bio: '',
//         profilePicture: null,
//       });
//     } catch (error) {
//       console.error('Error registering astrologer:', error);
//       alert('Something went wrong. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="h-screen w-full bg-[#020205] flex items-center justify-center p-4 md:p-8 font-serif overflow-hidden">
//       <div className="w-full max-w-6xl h-full max-h-[800px] bg-[#0a0a15] rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 flex flex-col lg:flex-row">
        
//         {/* Left Side */}
//         <div className="hidden lg:flex lg:w-5/12 relative overflow-hidden bg-gradient-to-b from-[#1a1743] to-[#020205] p-10 flex-col justify-between border-r border-white/5">
//           <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-[#D4AF37]/10 blur-[80px] rounded-full" />
//           <div className="relative z-10">
//             <div className="text-[#D4AF37] mb-4 flex gap-1">
//               {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
//             </div>
//             <h2 className="text-4xl text-white font-light leading-tight mb-4">
//               Empower Lives with your <br />
//               <span className="italic text-[#D4AF37]">Cosmic Wisdom</span>
//             </h2>
//             <p className="text-gray-400 text-xs leading-relaxed tracking-wide max-w-xs">
//               Duniya bhar ke logon se judiye aur unhein unki kismat ka rasta dikhaiye.
//             </p>
//           </div>
//           <div className="relative z-10 group">
//             <img 
//               src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800" 
//               alt="Astrology" 
//               className="rounded-xl opacity-50 grayscale aspect-square object-cover shadow-2xl"
//             />
//           </div>
//           <div className="relative z-10 text-[9px] uppercase tracking-[0.4em] text-gray-500">
//             Verified Professional Network
//           </div>
//         </div>

//         {/* Right Side Form */}
//         <div className="w-full lg:w-7/12 bg-[#0d0d1a] p-6 md:p-12 flex flex-col justify-center">
//           <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            
//             {/* Heading */}
//             <div className="mb-8">
//               <div className="flex items-center gap-3 mb-2">
//                 <div className="h-[1px] w-8 bg-[#D4AF37]/50" />
//                 <span className="text-[#D4AF37] text-[9px] uppercase tracking-[0.3em] font-bold">Registration</span>
//               </div>
//               <h3 className="text-2xl md:text-3xl text-white font-light">
//                 Become a <span className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#f7e4a1]">Verified Expert</span>
//               </h3>
//             </div>

//             <form className="space-y-5" onSubmit={handleSubmit}>
              
//               {/* Profile Picture */}
//               <div className="flex items-center gap-4 mb-6 p-3 bg-white/5 rounded-xl border border-white/5">
//                 <div className="relative group w-14 h-14">
//                   <div className="w-full h-full rounded-full border border-dashed border-[#D4AF37]/50 flex items-center justify-center bg-black/40">
//                     <Camera className="text-[#D4AF37]" size={20} />
//                   </div>
//                   <input type="file" name="profilePicture" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleChange} />
//                 </div>
//                 <div>
//                   <h4 className="text-white text-xs font-medium">Profile Photo</h4>
//                   <p className="text-gray-500 text-[9px]">PNG/JPG (Max 5MB)</p>
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-x-8 gap-y-5">
//                 {/* Full Name */}
//                 <div className="space-y-1">
//                   <label className="text-gray-400 text-[9px] uppercase tracking-widest">Full Name</label>
//                   <div className="relative">
//                     <User className="absolute left-0 top-1/2 -translate-y-1/2 text-[#D4AF37]/50" size={14} />
//                     <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Dr. Vikram Sharma" className="w-full bg-transparent border-b border-white/10 py-2 pl-7 text-sm text-white focus:border-[#D4AF37] outline-none transition-all placeholder:text-gray-700" />
//                   </div>
//                 </div>

//                 {/* Experience */}
//                 <div className="space-y-1">
//                   <label className="text-gray-400 text-[9px] uppercase tracking-widest">Experience (Years)</label>
//                   <div className="relative">
//                     <Briefcase className="absolute left-0 top-1/2 -translate-y-1/2 text-[#D4AF37]/50" size={14} />
//                     <input type="number" name="experience" value={formData.experience} onChange={handleChange} placeholder="12" className="w-full bg-transparent border-b border-white/10 py-2 pl-7 text-sm text-white focus:border-[#D4AF37] outline-none transition-all placeholder:text-gray-700" />
//                   </div>
//                 </div>

//                 {/* Specialization */}
//                 <div className="space-y-1">
//                   <label className="text-gray-400 text-[9px] uppercase tracking-widest">Specialization</label>
//                   <div className="relative">
//                     <Sparkles className="absolute left-0 top-1/2 -translate-y-1/2 text-[#D4AF37]/50" size={14} />
//                     <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} placeholder="Vedic, Tarot" className="w-full bg-transparent border-b border-white/10 py-2 pl-7 text-sm text-white focus:border-[#D4AF37] outline-none transition-all placeholder:text-gray-700" />
//                   </div>
//                 </div>

//                 {/* Languages */}
//                 <div className="space-y-1">
//                   <label className="text-gray-400 text-[9px] uppercase tracking-widest">Languages</label>
//                   <div className="relative">
//                     <Languages className="absolute left-0 top-1/2 -translate-y-1/2 text-[#D4AF37]/50" size={14} />
//                     <input type="text" name="language" value={formData.language} onChange={handleChange} placeholder="Hindi, English" className="w-full bg-transparent border-b border-white/10 py-2 pl-7 text-sm text-white focus:border-[#D4AF37] outline-none transition-all placeholder:text-gray-700" />
//                   </div>
//                 </div>
//               </div>

//               {/* Price & Bio */}
//               <div className="grid md:grid-cols-3 gap-6">
//                 <div className="md:col-span-1 space-y-1">
//                   <label className="text-gray-400 text-[9px] uppercase tracking-widest">Price (₹/min)</label>
//                   <div className="relative">
//                     <IndianRupee className="absolute left-0 top-1/2 -translate-y-1/2 text-[#D4AF37]/50" size={14} />
//                     <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="45" className="w-full bg-transparent border-b border-white/10 py-2 pl-7 text-sm text-white focus:border-[#D4AF37] outline-none transition-all placeholder:text-gray-700" />
//                   </div>
//                 </div>
//                 <div className="md:col-span-2 space-y-1">
//                   <label className="text-gray-400 text-[9px] uppercase tracking-widest">Bio</label>
//                   <div className="relative">
//                     <FileText className="absolute left-0 top-2 text-[#D4AF37]/50" size={14} />
//                     <textarea rows="1" name="bio" value={formData.bio} onChange={handleChange} placeholder="Short description..." className="w-full bg-transparent border-b border-white/10 py-1 pl-7 text-sm text-white focus:border-[#D4AF37] outline-none transition-all resize-none placeholder:text-gray-700"></textarea>
//                   </div>
//                 </div>
//               </div>

//               {/* Submit */}
//               <div className="pt-6">
//                 <motion.button 
//                   whileHover={{ scale: 1.01 }}
//                   whileTap={{ scale: 0.99 }}
//                   type="submit"
//                   disabled={loading}
//                   className="w-full py-3.5 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-[10px] rounded-full shadow-lg shadow-[#D4AF37]/10 flex items-center justify-center gap-2 disabled:opacity-50"
//                 >
//                   <CheckCircle2 size={16} />
//                   {loading ? 'Submitting...' : 'Submit Application'}
//                 </motion.button>
//               </div>

//               {/* Success Popup */}
//               {successMessage && (
//                 <div className="mt-4 p-3 bg-green-600 text-white rounded-lg text-center text-sm animate-fadeIn">
//                   {successMessage}
//                 </div>
//               )}
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Astrologerform;
import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Sparkles, Languages, IndianRupee, FileText, Camera, CheckCircle2, Star } from 'lucide-react';

const Astrologerform = () => {
  return (
    // Fixed screen height with no scroll
    <div className="h-screen w-full bg-[#020205] flex items-center justify-center p-4 md:p-8 font-serif overflow-hidden">
      {/* Main Container - Fixed Height */}
      <div className="w-full max-w-6xl h-full max-h-[800px] bg-[#0a0a15] rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 flex flex-col lg:flex-row">
        
        {/* --- LEFT SIDE: IMAGE & TEXT --- */}
        <div className="hidden lg:flex lg:w-5/12 relative overflow-hidden bg-gradient-to-b from-[#1a1743] to-[#020205] p-10 flex-col justify-between border-r border-white/5">
          <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-[#D4AF37]/10 blur-[80px] rounded-full" />
          
          <div className="relative z-10">
            <div className="text-[#D4AF37] mb-4 flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <h2 className="text-4xl text-white font-light leading-tight mb-4">
              Empower Lives with your <br />
              <span className="italic text-[#D4AF37]">Cosmic Wisdom</span>
            </h2>
            <p className="text-gray-400 text-xs leading-relaxed tracking-wide max-w-xs">
              Duniya bhar ke logon se judiye aur unhein unki kismat ka rasta dikhaiye.
            </p>
          </div>

          <div className="relative z-10 group">
            <img 
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800" 
              alt="Astrology" 
              className="rounded-xl opacity-50 grayscale aspect-square object-cover shadow-2xl"
            />
          </div>

          <div className="relative z-10 text-[9px] uppercase tracking-[0.4em] text-gray-500">
            Verified Professional Network
          </div>
        </div>

        {/* --- RIGHT SIDE: FORM --- */}
        <div className="w-full lg:w-7/12 bg-[#0d0d1a] p-6 md:p-12 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Heading Section */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-[1px] w-8 bg-[#D4AF37]/50" />
                <span className="text-[#D4AF37] text-[9px] uppercase tracking-[0.3em] font-bold">Registration</span>
              </div>
              <h3 className="text-2xl md:text-3xl text-white font-light">
                Become a <span className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#f7e4a1]">Verified Expert</span>
              </h3>
            </div>

            <form className="space-y-5">
              {/* Profile Picture Upload - Compact */}
              <div className="flex items-center gap-4 mb-6 p-3 bg-white/5 rounded-xl border border-white/5">
                <div className="relative group w-14 h-14">
                  <div className="w-full h-full rounded-full border border-dashed border-[#D4AF37]/50 flex items-center justify-center bg-black/40">
                    <Camera className="text-[#D4AF37]" size={20} />
                  </div>
                  <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                </div>
                <div>
                  <h4 className="text-white text-xs font-medium">Profile Photo</h4>
                  <p className="text-gray-500 text-[9px]">PNG/JPG (Max 5MB)</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-5">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-gray-400 text-[9px] uppercase tracking-widest">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-0 top-1/2 -translate-y-1/2 text-[#D4AF37]/50" size={14} />
                    <input type="text" placeholder="Dr. Vikram Sharma" className="w-full bg-transparent border-b border-white/10 py-2 pl-7 text-sm text-white focus:border-[#D4AF37] outline-none transition-all placeholder:text-gray-700" />
                  </div>
                </div>

                {/* Experience */}
                <div className="space-y-1">
                  <label className="text-gray-400 text-[9px] uppercase tracking-widest">Experience (Years)</label>
                  <div className="relative">
                    <Briefcase className="absolute left-0 top-1/2 -translate-y-1/2 text-[#D4AF37]/50" size={14} />
                    <input type="number" placeholder="12" className="w-full bg-transparent border-b border-white/10 py-2 pl-7 text-sm text-white focus:border-[#D4AF37] outline-none transition-all placeholder:text-gray-700" />
                  </div>
                </div>

                {/* Specialization */}
                <div className="space-y-1">
                  <label className="text-gray-400 text-[9px] uppercase tracking-widest">Specialization</label>
                  <div className="relative">
                    <Sparkles className="absolute left-0 top-1/2 -translate-y-1/2 text-[#D4AF37]/50" size={14} />
                    <input type="text" placeholder="Vedic, Tarot" className="w-full bg-transparent border-b border-white/10 py-2 pl-7 text-sm text-white focus:border-[#D4AF37] outline-none transition-all placeholder:text-gray-700" />
                  </div>
                </div>

                {/* Languages */}
                <div className="space-y-1">
                  <label className="text-gray-400 text-[9px] uppercase tracking-widest">Languages</label>
                  <div className="relative">
                    <Languages className="absolute left-0 top-1/2 -translate-y-1/2 text-[#D4AF37]/50" size={14} />
                    <input type="text" placeholder="Hindi, English" className="w-full bg-transparent border-b border-white/10 py-2 pl-7 text-sm text-white focus:border-[#D4AF37] outline-none transition-all placeholder:text-gray-700" />
                  </div>
                </div>
              </div>

              {/* Price & Bio - Flex layout for compact feel */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1 space-y-1">
                  <label className="text-gray-400 text-[9px] uppercase tracking-widest">Price (₹/min)</label>
                  <div className="relative">
                    <IndianRupee className="absolute left-0 top-1/2 -translate-y-1/2 text-[#D4AF37]/50" size={14} />
                    <input type="number" placeholder="45" className="w-full bg-transparent border-b border-white/10 py-2 pl-7 text-sm text-white focus:border-[#D4AF37] outline-none transition-all placeholder:text-gray-700" />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-1">
                  <label className="text-gray-400 text-[9px] uppercase tracking-widest">Bio</label>
                  <div className="relative">
                    <FileText className="absolute left-0 top-2 text-[#D4AF37]/50" size={14} />
                    <textarea rows="1" placeholder="Short description..." className="w-full bg-transparent border-b border-white/10 py-1 pl-7 text-sm text-white focus:border-[#D4AF37] outline-none transition-all resize-none placeholder:text-gray-700"></textarea>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-6">
                <motion.button 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full py-3.5 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-[10px] rounded-full shadow-lg shadow-[#D4AF37]/10 flex items-center justify-center gap-2"
                >
                  <CheckCircle2 size={16} />
                  Submit Application
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Astrologerform;