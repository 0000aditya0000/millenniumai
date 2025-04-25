import React, { useState, useRef } from 'react';
import { Menu, X, User } from 'lucide-react';
import Logo from '../assets/image.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  useGSAP(() => {
    gsap.from(navRef.current, { y: -100, duration: 2, ease: 'power4.out', opacity: 0 });
  });

  return (
    <header className="fixed w-full z-50 ">
      <nav ref={navRef} className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <img src={Logo} style={{ height: '3rem', width: '10rem' }} alt="logo" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/70 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

         

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white/10 backdrop-blur-lg p-4 rounded-md shadow-lg space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-white/80 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
