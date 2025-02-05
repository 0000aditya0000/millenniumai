import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      title: "AI-Powered Solutions",
      description: "Transforming businesses through innovative artificial intelligence solutions"
    },
    {
      image: "https://images.unsplash.com/photo-1676299081847-82ec15127128",
      title: "Future of Technology",
      description: "Empowering your digital transformation journey with cutting-edge AI"
    },
    {
      image: "https://images.unsplash.com/photo-1677442136728-6cd35ec7aa94",
      title: "Smart Automation",
      description: "Streamline your operations with intelligent automation solutions"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                {slide.description}
              </p>
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg hover:bg-indigo-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>
    </div>
  );
};

export default Hero;