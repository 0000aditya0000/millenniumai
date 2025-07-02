import { useState } from "react";
import { FaTape } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="backdrop-blur-xl bg-white shadow-lg sticky top-0 z-50 border-b border-[#b07a3c]/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo left */}
        <div className="flex items-center gap-2">
          {/* <FaTape className="text-3xl text-[#b07a3c] drop-shadow" /> */}
          <img src="/src/assets/logo.png" alt="Power Fixit" className="w-10 h-10" />
          <span className="font-extrabold text-2xl text-[#1a2341] tracking-wide">Power Fixit</span>
        </div>
        {/* Nav links center */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex gap-6 bg-white/70 rounded-full px-8 py-2 shadow-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-2 py-1 group text-lg font-medium text-[#1a2341] hover:text-[#b07a3c] transition"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-[#b07a3c] to-[#a86b2d] rounded-full transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
        {/* CTA button right */}
        <div className="hidden md:flex">
          <a href="#contact" className="ml-6 bg-[#b07a3c] hover:bg-[#a86b2d] text-white font-bold px-6 py-2 rounded-full shadow transition text-lg">Get a Quote</a>
        </div>
        {/* Hamburger for mobile */}
        <button className="md:hidden text-[#b07a3c] text-3xl ml-auto" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-[#b07a3c]/20 px-4 pb-4 flex flex-col gap-4 text-lg font-semibold shadow-lg animate-fade-in-down rounded-b-2xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#1a2341] hover:text-[#b07a3c] transition px-3 py-2 rounded-full"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="bg-[#b07a3c] hover:bg-[#a86b2d] text-white font-bold px-6 py-2 rounded-full shadow transition text-lg mt-2">Get a Quote</a>
        </div>
      )}
    </nav>
  );
} 