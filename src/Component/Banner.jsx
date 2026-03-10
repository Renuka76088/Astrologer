import { motion } from "framer-motion";

const Banner = ({ zodiacSymbols }) => {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center min-h-[calc(100vh-100px)] py-16">

      {/* LEFT ZODIAC */}
      <div className="flex justify-center order-2 lg:order-1">
        <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] flex items-center justify-center">

          {/* Center Sun */}
          <div className="w-24 h-24 rounded-full border border-[#D4AF37]/30 flex items-center justify-center relative">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-[#D4AF37] rounded-full blur-2xl"
            />
            <span className="text-3xl font-thin text-white">☼</span>
          </div>

          {/* Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-white/10 rounded-full"
          >
            {zodiacSymbols.map((symbol, i) => (
              <div
                key={i}
                className="absolute text-lg text-white/40"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-200px) rotate(-${i * 30}deg)`
                }}
              >
                {symbol}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* RIGHT TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="order-1 lg:order-2 space-y-10"
      >
        <div className="space-y-4">
          <h4 className="text-[#D4AF37] uppercase tracking-[0.5em] text-xs font-bold">
            The 6th International Meeting
          </h4>

          <h1 className="text-5xl md:text-7xl font-light text-white leading-[1.1]">
            Stars of Our <br />
            <span className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#f7e4a1] to-[#D4AF37]">
              Astro Conference
            </span>
          </h1>
        </div>

        <button className="group relative px-10 py-4 bg-transparent border border-[#D4AF37] text-[#D4AF37] uppercase tracking-widest text-xs font-bold overflow-hidden">
          <span className="relative z-10 group-hover:text-black transition-colors duration-500">
            Reserve Your Seat
          </span>
          <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </button>
      </motion.div>

    </div>
  );
};

export default Banner;