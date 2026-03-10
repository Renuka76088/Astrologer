import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0b0b1e] text-white pt-20 pb-10 overflow-hidden">

      {/* Animated Stars Background */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      {/* Cosmic Glow */}
      <div className="absolute -top-40 left-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[150px] rounded-full animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold mb-4 tracking-wide">
            Astro<span className="text-purple-400">Universe</span>
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Discover your destiny through the cosmic power of astrology.
            Explore zodiac insights, daily horoscopes, and spiritual guidance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-purple-400 cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-purple-400 cursor-pointer transition">
              Zodiac Signs
            </li>
            <li className="hover:text-purple-400 cursor-pointer transition">
              Horoscope
            </li>
            <li className="hover:text-purple-400 cursor-pointer transition">
              Astrology Reports
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-purple-400 cursor-pointer transition">
              Birth Chart
            </li>
            <li className="hover:text-purple-400 cursor-pointer transition">
              Love Compatibility
            </li>
            <li className="hover:text-purple-400 cursor-pointer transition">
              Tarot Reading
            </li>
            <li className="hover:text-purple-400 cursor-pointer transition">
              Career Astrology
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-4">

            <div className="p-3 rounded-full bg-white/10 hover:bg-purple-500 transition cursor-pointer hover:scale-110">
              <Facebook size={18}/>
            </div>

            <div className="p-3 rounded-full bg-white/10 hover:bg-purple-500 transition cursor-pointer hover:scale-110">
              <Instagram size={18}/>
            </div>

            <div className="p-3 rounded-full bg-white/10 hover:bg-purple-500 transition cursor-pointer hover:scale-110">
              <Twitter size={18}/>
            </div>

            <div className="p-3 rounded-full bg-white/10 hover:bg-purple-500 transition cursor-pointer hover:scale-110">
              <Youtube size={18}/>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="relative border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
        © 2026 AstroUniverse. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
