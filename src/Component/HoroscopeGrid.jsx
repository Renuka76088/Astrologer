import React from "react";

// Updated signs array with abstract geometric data
const signs = [
  { name: "Aries", planet: "Mars", color: "from-red-300 to-orange-400", path: "M 20 20 a 10 10 0 0 1 10 -10 m 0 0 a 10 10 0 0 1 10 10 M 20 20 c 15 -5, 15 20, 0 20 h -10 M 40 20 c -15 -5, -15 20, 0 20 h 10" },
  { name: "Taurus", planet: "Venus", color: "from-emerald-300 to-teal-400", path: "M 20 40 q 10 10, 20 0 M 20 40 v 5 a 10 10 0 0 0 20 0 v -5" },
  { name: "Gemini", planet: "Mercury", color: "from-amber-200 to-yellow-400", path: "M 22 25 v 15 M 38 25 v 15 M 15 25 q 15 -5, 30 0 M 15 40 q 15 5, 30 0" },
  { name: "Cancer", planet: "Luna", color: "from-blue-200 to-slate-400", path: "M 25 25 a 8 8 0 1 1 -10 10 m 10 -10 q -5 0, -10 -5 M 35 35 a 8 8 0 1 0 10 -10 m -10 10 q 5 0, 10 5" },
  { name: "Leo", planet: "Sun", color: "from-amber-400 to-orange-500", path: "M 15 30 a 5 5 0 1 1 5 10 h 10 q 10 0, 10 -10 a 5 5 0 0 0 -5 -10" },
  { name: "Virgo", planet: "Mercury", color: "from-lime-300 to-green-400", path: "M 15 20 v 20 q 0 5, 5 5 t 5 -5 v -20 m 10 0 v 20 q 0 10, -10 10 a 10 10 0 0 1 10 10" },
  { name: "Libra", planet: "Venus", color: "from-cyan-200 to-sky-400", path: "M 20 20 q 10 -10, 20 0 L 50 20 M 20 30 v 10 M 40 30 v 10 M 15 40 h 30" },
  { name: "Scorpio", planet: "Pluto", color: "from-rose-400 to-purple-600", path: "M 15 20 v 20 q 0 5, 5 5 t 5 -5 v -20 m 10 0 v 20 m 0 -20 q 5 0, 5 5 v 15 h 3 m 0 0 a 5 5 0 0 1 5 10 l 10 -10" },
  { name: "Sagittarius", planet: "Jupiter", color: "from-blue-400 to-indigo-500", path: "M 20 40 l 20 -20 m -5 0 h 5 v 5 m 0 0 a 10 10 0 0 0 0 10" },
  { name: "Capricorn", planet: "Saturn", color: "from-slate-400 to-neutral-600", path: "M 15 20 v 20 q 0 10, 10 0 v -10 m 0 0 l 15 15 q 5 5, 5 -5 v -20 q 0 -10, -10 0" },
  { name: "Aquarius", planet: "Uranus", color: "from-sky-300 to-cyan-500", path: "M 15 20 q 10 -10, 20 0 q 10 10, 20 0 M 15 30 q 10 -10, 20 0 q 10 10, 20 0" },
  { name: "Pisces", planet: "Neptune", color: "from-teal-200 to-emerald-500", path: "M 15 20 a 10 10 0 0 1 20 20 m -20 0 a 10 10 0 0 0 20 -20 M 15 30 h 20" }
];

// Helper component to render the abstract line-art signs
const AbstractSign = ({ path }) => (
  <svg
    viewBox="0 0 60 60"
    className="w-20 h-20 mb-6 drop-shadow-[0_0_8px_rgba(216,180,254,0.5)]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Abstract Line path */}
    <path d={path} />

    {/* Subtle geometric dots (abstract stars) */}
    <circle cx="15" cy="15" r="0.5" fill="currentColor" stroke="none" />
    <circle cx="45" cy="45" r="0.5" fill="currentColor" stroke="none" />
    <circle cx="30" cy="5" r="0.3" fill="currentColor" stroke="none" className="opacity-60" />
    <circle cx="55" cy="30" r="0.3" fill="currentColor" stroke="none" className="opacity-60" />
  </svg>
);

export default function HoroscopeGrid() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white flex flex-col items-center justify-center px-6 py-20 font-sans">
      
      {/* Galaxy Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2000')"
        }}
      ></div>

      {/* Purple Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090016]/95 via-[#1b0c4e]/85 to-[#050010]"></div>

      {/* Stars Animation Overlay */}
      <div className="absolute inset-0 stars"></div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-16 max-w-2xl">
        <span className="text-purple-400 font-medium tracking-widest text-xs uppercase mb-2 block">Your Cosmic Guide</span>
        <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-tight">
          What's Your <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-100 to-indigo-300">Sign?</span>
        </h2>
        <p className="text-sm text-slate-400 mt-4 max-w-md mx-auto">Explore abstract geometric interpretations of the twelve zodiac archetypes and discover your daily guidance.</p>
      </div>

      {/* Zodiac Grid */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl w-full">
        {signs.map((sign, index) => (
          <div
            key={index}
            className="group relative bg-[#110729]/40 backdrop-blur-sm border border-purple-900/40 rounded-3xl p-8 flex flex-col items-center justify-center text-center transition-all duration-700 hover:border-purple-500/50 hover:bg-[#160a3b] hover:-translate-y-3 hover:shadow-[0_20px_60px_-10px_rgba(88,28,135,0.5)]"
          >
            {/* Hover Glow Effect */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl blur-2xl bg-gradient-to-br ${sign.color} -z-10`} />

            {/* Abstract Sign Icon */}
            <div className={`text-purple-300 transition-colors duration-500 group-hover:text-white`}>
              <AbstractSign path={sign.path} />
            </div>

            {/* Name and Planet */}
            <div className="relative mt-auto">
                <h3 className="text-xl font-bold tracking-tight text-white group-hover:scale-105 transition-transform duration-500">{sign.name}</h3>
                <p className={`text-xs uppercase tracking-[0.2em] font-medium mt-1.5 transition-colors duration-500 text-purple-200 group-hover:text-purple-100`}>{sign.planet}</p>
            </div>
            
            {/* Abstract geometric background circle inside card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-purple-500/10 rounded-full group-hover:scale-150 transition-transform duration-1000"></div>

          </div>
        ))}
      </div>

      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        body {
            font-family: 'Inter', sans-serif;
        }

        .stars{
          background: radial-gradient(white 1.2px, transparent 1.2px);
          background-size: 80px 80px;
          opacity: .15;
          animation: starMove 200s linear infinite;
        }

        @keyframes starMove{
          from{transform:translateY(0)}
          to{transform:translateY(-3200px)}
        }
        `}
      </style>

    </div>
  );
}