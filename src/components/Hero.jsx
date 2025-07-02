import { motion } from "framer-motion";
import heroimg from "../assets/42_files/powerfixit.pdf-image-055.jpg"

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 overflow-hidden px-4 md:px-0">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 py-12 md:py-0">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col items-start md:items-start text-left z-10"
        >
          
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow text-yellow-900 leading-tight">
            Premium BOPP Self-Adhesive Tape
          </h1>
          <p className="text-lg md:text-xl max-w-lg mb-2 font-medium text-gray-800">
            Strong. Reliable. Trusted by businesses across India. Perfect for packaging, shipping, and more!
          </p>
          <p className="text-lg md:text-xl italic max-w-lg mb-6 font-semibold text-yellow-700">
            Adhesives You Can Trust, Results You Can Expect.
          </p>
          <a
            href="#contact"
            className="inline-block bg-yellow-700 hover:bg-yellow-800 text-white font-bold px-8 py-3 rounded-full shadow-lg text-lg tracking-wide transition-all duration-200 border-2 border-yellow-800"
          >
            Get a Quote
          </a>
        </motion.div>
        {/* Right: Tape Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end z-10"
        >
          <img
            src={heroimg}
            alt="Tape Roll"
            className="w-64 h-64 md:w-180 md:h-100 object-cover rounded-3xl border-4 border-yellow-200 shadow-xl bg-white"
          />
        </motion.div>
      </div>
    </section>
  );
}
