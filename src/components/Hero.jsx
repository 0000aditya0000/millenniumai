import heroimg from "../assets/tape2.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="w-full min-h-[70vh] flex items-center justify-center relative px-2 md:px-0"
      style={{
        background: `url(${heroimg}) no-repeat center center/cover`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      {/* Gradient overlay for better text contrast */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 py-16 md:py-0 relative z-10">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center text-left z-10 md:pl-4">
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold mb-4 w-full md:w-[50%] text-white leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Premium Adhesive Tapes Designed to Perform
          </motion.h1>
          <motion.p
            className="text-base md:text-xl max-w-full md:max-w-lg mb-8 font-medium text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Delivering reliable, industrial-grade tapes for packaging, insulation, and custom solutions.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#services"
              className="bg-[#1a2341] hover:bg-[#10172b] text-white font-bold px-7 py-3 rounded-full shadow-lg text-lg transition-all duration-200 text-center"
            >
              View Our Products
            </a>
            <a
              href="#contact"
              className="bg-[#1a2341] hover:bg-[#10172b] text-white font-bold px-7 py-3 rounded-full shadow-lg text-lg transition-all duration-200 text-center"
            >
              Get a Quote
            </a>
          </motion.div>
        </div>
        {/* Right: Tape Image (hidden, since it's now in the background) */}
        <div className="hidden" />
      </div>
    </section>
  );
}
