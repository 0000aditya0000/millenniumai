import React, { useRef } from 'react';
import ContactHeader from './ContactHeader';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import './Contact.css';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ContactPage: React.FC = () => {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null)


  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-header",
        start: "top 70%",
        end: "top 40%",
        scrub: 1,
      },
    });
  
    tl.from(h1Ref.current, { y: 100, opacity: 0, duration: 0.8 });
    tl.from(pRef.current, { y: 100, opacity: 0, duration: 0.8 }, "-=0.4");
  
    gsap.utils.toArray(".contact-info-item").forEach((item, i) => {
      gsap.from(item, {
        opacity: 0,
        x: -50,
        duration: 0.6,
        delay: i * 0.2,
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          end: "top 65%",
          toggleActions: "play none none reverse",
        },
      });
    });
  
    gsap.utils.toArray(".form-group").forEach((item, i) => {
      gsap.from(item, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        delay: i * 0.15,
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          end: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    });

    gsap.to(textRef.current,{
      y:-40,
      opacity:0,
      scrollTrigger:{
        trigger: textRef.current,
        start:"bottom 30$%",
        end: "bottom 20%",
        scrub:1
      }
    })
  
    ScrollTrigger.refresh();
  }, []);
  

  return (
    <section className="contact-page">
      <div className="contact-background">
        <div className="contact-gradient"></div>
        <div className="contact-stars"></div>
      </div>
      <div className="container mx-auto px-4 py-16 max-w-6xl relative z-10">
        <div ref={textRef} className="text-center mb-12 contact-header">
          <h2 
            ref={h1Ref}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Get in Touch
          </h2>
          <p
            ref={pRef}
            className="text-lg text-gray-300 max-w-xl mx-auto"
          >
            Ready to transform your business with AI? We're here to help you navigate the future.
          </p>
        </div>

        <div className="contact-content grid md:grid-cols-2 gap-12">
          <div ref={infoRef}>
            <ContactInfo />
          </div>
          <div ref={formRef}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
