import React, { useRef } from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Brain } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    gsap.from(footerRef.current, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 100%',
        end:"bottom 100%",
        scrub:1
      },
    });
  }, []);

  return (
    <footer ref={footerRef} className="footer-section text-white z-20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex px-44 justify-between flex-wrap gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-indigo-400" />
              <span className="text-2xl font-bold">Millennium AI</span>
            </div>
            <p className="text-gray-400 w-60">
              Transforming businesses through innovative AI solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://x.com/Millennium_Ai_" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/millennium-ai/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/millennium_ai_?igsh=NGk4MDc1dndpa3N2&utm_source=qr" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Millennium AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
