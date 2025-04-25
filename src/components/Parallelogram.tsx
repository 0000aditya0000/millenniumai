import gsap from 'gsap';
import React, { forwardRef, useRef } from 'react';

const Parallelogram = forwardRef(({ content }, ref) => {
  const containerRef = useRef(null);

  // Combine both refs
  const setRefs = (el) => {
    containerRef.current = el;
    if (typeof ref === 'function') {
      ref(el);
    } else if (ref) {
      ref.current = el;
    }
  };

  const handleMouseEnter = () => {
    gsap.to(containerRef.current, {
      width: '100%',
      duration: 0.5,
      
    });
  };

  const handleMouseLeave = () => {
    gsap.to(containerRef.current, {
      width: '25%',
      duration: 0.5,
      ease: 'power2.out',
      

    });
  };

  return (
    <div
      ref={setRefs}
     
      className="group relative ease-in-out w-1/4 h-[75%]"
    >
      <div className="w-full h-full transform -skew-x-[20deg] overflow-hidden">
        <img
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}    
          src={content.image}
          className="h-full w-full absolute object-cover"
          alt={content.title}
        />
        <div
        onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}  
        className='absolute w-full h-full items-center flex flex-col pt-16 hover:backdrop-contrast-50 opacity-0 transition-all hover:opacity-[100%]' >
            <h1 className='text-white w-[200px] text-center text-3xl font-bold'>{content.title}</h1>
            <p className='text-white mt-10 w-[300px] text-center text-xl'>{content.description}</p>

        </div>
      </div>
    </div>
  );
});

export default Parallelogram;
