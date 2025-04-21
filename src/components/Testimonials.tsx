import React, { useRef } from 'react';
import { Star } from 'lucide-react'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger); 

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      content: 'The AI solutions provided by Millennium AI have transformed our business operations. The results exceeded our expectations.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateLabs',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      content: 'Working with Millennium AI has been a game-changer. Their expertise in AI and machine learning is unmatched.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director of Innovation, FutureTech',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      content: 'The team\'s dedication to delivering cutting-edge AI solutions has helped us stay ahead of the competition.'
    }
  ];

  const h1Ref = useRef(null)
  const pRef = useRef(null)
  const cardRefs = useRef([])
  

  useGSAP(() => {
    gsap.from(h1Ref.current, {
      y: 100,
      scrollTrigger: {
        trigger: h1Ref.current,
        start: "top 70%",
        end: "top 50%",
        scrub: 1,
      },
      opacity: 0,
    
    })
    gsap.from(pRef.current, {
      y: 100,
      scrollTrigger: {
        trigger: pRef.current,
        start: "top 70%",
        end: "top 50%",
        scrub: 1,
      },
      opacity: 0, 
    })

    gsap.from(cardRefs.current, {
      y: 100,
      stagger:0.1,
      scrollTrigger: {
        trigger: cardRefs.current,
        start: "top 70%",
        end: "top 50%",
        scrub: 1,
      },
      opacity: 0,
    })
  })
  

  return (
    <section style={{fontFamily:"verdana"}} id="testimonials" className="py-20 px-28 bg-[#0e0c15]">
      <div className="container  mx-auto px-4">
        <div className="text-center mb-16">
          <h1 ref={h1Ref} className="text-5xl font-bold text-gray-100 ">What Our Clients Say</h1>
          <p ref={pRef} className="text-xl text-gray-400 mt-10 max-w-3xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div ref={(el) => cardRefs.current[index] = el} key={index} className="bg-[#0e0c15] p-8 rounded-xl hover:shadow-md shadow-gray-900 shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;