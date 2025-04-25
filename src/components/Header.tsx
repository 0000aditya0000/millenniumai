import React, { useState, useRef } from 'react';
import { Menu, X, Brain, User } from 'lucide-react';
import Logo from '../assets/image.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null)

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  useGSAP(() => {
    gsap.from (navRef.current, {y: -100, duration: 2, ease: 'power4.out', opacity: 0})
  })

  return (
    <header className="fixed w-full  backdrop-blur-xl z-50 shadow-sm">
      <nav ref={navRef} className="container mx-auto px-20 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
           <img src={Logo} style={{height:"4rem", width:"12rem"}}/>
           
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-evenly w-full">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 font-code text-md hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
           
          </div>
         
          
         

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t">
            <div className="flex flex-col space-y-4 px-4 py-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;