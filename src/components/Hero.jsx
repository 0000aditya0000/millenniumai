
export default function Hero() {
  return (
    <section
      className="w-full min-h-[70vh] flex items-center justify-center relative px-4 md:px-0"
      style={{
        background: "url('/src/assets/Tape.png') no-repeat center center/cover",
      }}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 py-16 md:py-0 relative z-10">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center text-left z-10 md:pl-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 w-[50%] text-white leading-tight drop-shadow-lg">
            Premium Adhesive Tapes Designed to Perform
          </h1>
          <p className="text-lg md:text-xl max-w-lg mb-8 font-medium text-white/90">
            Delivering reliable, industrial-grade tapes for packaging, insulation, and custom solutions.
          </p>
          <div className="flex gap-4 mb-10">
            <a
              href="#services"
              className="bg-[#1a2341] hover:bg-[#10172b] text-white font-bold px-7 py-3 rounded-full shadow-lg text-lg transition-all duration-200"
            >
              View Our Products
            </a>
            <a
              href="#contact"
              className="bg-[#1a2341] hover:bg-[#10172b] text-white font-bold px-7 py-3 rounded-full shadow-lg text-lg transition-all duration-200"
            >
              Get a Quote
            </a>
          </div>
        </div>
        {/* Right: Tape Image (hidden, since it's now in the background) */}
        <div className="hidden" />
      </div>
      {/* Overlay for darkening the background image for text readability */}
    </section>
  );
}
