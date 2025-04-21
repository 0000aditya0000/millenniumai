import React, {useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const ContactHeader: React.FC = () => {

    const h1ref = useRef(null)
    const pRef = useRef(null)

    useGSAP(() => {
        gsap.from(h1ref.current, {
            y: 100,
            scrollTrigger: {
                trigger: h1ref.current,
                start: "top 70%",
                end: "top 50%",
                scrub: 1,
            },
            opacity: 0,
        });
        gsap.from(pRef.current, {
            y: 100,
            scrollTrigger: {
                trigger: pRef.current,
                start: "top 70%",
                end: "top 50%",
                scrub: 1,
            },
            opacity: 0,
        });
    })

  return (
    <div className="text-center mb-12 contact-header">
      <h2  className="text-4xl md:text-5xl font-bold text-white mb-4 reveal-text-delay">
        Get in Touch
      </h2>
      <p className="text-lg text-gray-300 max-w-xl mx-auto reveal-text-delay-2">
        Ready to transform your business with AI? We're here to help you navigate the future.
      </p>
    </div>
  );
};

export default ContactHeader;