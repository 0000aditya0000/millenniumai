import { useState } from "react";
import { FaTape } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-yellow-700 font-extrabold text-2xl">
          <FaTape className="text-3xl" />
          PowerFixit Tapes
        </div>
        <div className="hidden md:flex gap-8 text-lg font-semibold">
          <a href="#" className="text-yellow-700 hover:text-yellow-900 transition">Home</a>
          <a href="#services" className="text-yellow-700 hover:text-yellow-900 transition">Services</a>
          <a href="#about" className="text-yellow-700 hover:text-yellow-900 transition">About</a>
          <a href="#testimonials" className="text-yellow-700 hover:text-yellow-900 transition">Testimonials</a>
          <a href="#contact" className="text-yellow-700 hover:text-yellow-900 transition">Contact</a>
        </div>
        <button className="md:hidden text-yellow-700 text-3xl" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-yellow-100 px-4 pb-4 flex flex-col gap-4 text-lg font-semibold">
          <a href="#" className="text-yellow-700 hover:text-yellow-900 transition" onClick={() => setOpen(false)}>Home</a>
          <a href="#services" className="text-yellow-700 hover:text-yellow-900 transition" onClick={() => setOpen(false)}>Services</a>
          <a href="#about" className="text-yellow-700 hover:text-yellow-900 transition" onClick={() => setOpen(false)}>About</a>
          <a href="#testimonials" className="text-yellow-700 hover:text-yellow-900 transition" onClick={() => setOpen(false)}>Testimonials</a>
          <a href="#contact" className="text-yellow-700 hover:text-yellow-900 transition" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
} 