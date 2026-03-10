import { motion, AnimatePresence } from "framer-motion";
import { UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

const PageHeader = ({ menuItems1, menuItems, isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      {/* --- FIXED PROFESSIONAL HEADER --- */}
      <header className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-6 py-4 md:px-16 border-b border-white/5 backdrop-blur-xl bg-black/20">
        
        {/* Logo */}
        <div className="text-xl md:text-2xl font-light tracking-[0.3em] text-white">
          ASTRO<span className="font-bold text-[#D4AF37]">CON</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-10 text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold">
          {menuItems1.map(item => (
            <a key={item} href="#" className="hover:text-[#D4AF37] transition-all duration-300 relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-6">
          {/* Register Button - Professional Style */}
                 <Link to='/astrologer-form'>
          <button className="relative hidden md:flex items-center gap-2 px-6 py-2.5 bg-transparent border border-[#D4AF37]/50 text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-bold overflow-hidden transition-all duration-500 rounded-full group hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-500">
              <UserPlus size={14} />
              Register Now
            </span>
            <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </button></Link>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMenuOpen(true)} 
            className="lg:hidden flex flex-col gap-1.5 p-2"
          >
            <div className="w-6 h-[1px] bg-[#D4AF37]"></div>
            <div className="w-4 h-[1px] bg-[#D4AF37] self-end"></div>
          </button>
        </div>
      </header>

      {/* --- MOBILE SIDEBAR --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/95 backdrop-blur-md z-[110]"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[300px] bg-[#050510] z-[120] p-10 border-r border-white/5 flex flex-col"
            >
              {/* Sidebar Logo */}
              <div className="text-xl font-light tracking-[0.3em] text-white mb-16">
                ASTRO<span className="font-bold text-[#D4AF37]">CON</span>
              </div>

              <nav className="flex flex-col gap-8">
                {menuItems.map(item => (
                  <a
                    key={item}
                    href="#"
                    className="text-xl font-light tracking-widest text-white hover:text-[#D4AF37] transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>

              {/* Mobile Sidebar Footer Button */}
              <div className="mt-auto">
                <Link to='/astrologer-form'>
                
                 <button className="w-full py-4 bg-[#D4AF37] text-black text-xs uppercase tracking-widest font-bold rounded-lg shadow-lg shadow-[#D4AF37]/20 active:scale-95 transition-transform">
                    Register Now
                 </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      {/* Spacer to prevent content from going under the fixed header */}
      <div className="h-[80px]"></div>
    </>
  );
};

export default PageHeader;