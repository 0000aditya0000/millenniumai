import React, { forwardRef, useRef } from 'react';
import gsap from 'gsap';
import { scrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';


const ServiceCard = forwardRef(({ item }, ref) => {
    const isFour = item.id % 4 === 0;

    const h1Ref = useRef(null);
    const pContainerRef = useRef(null);

    const onHover = () => {
        gsap.to(h1Ref.current, {
            bottom:'77%',
            duration: 0.5,
        })

        gsap.to(pContainerRef.current, {
            top:0,
            duration: 0.5,
        })
    }

    const onHoverLeave = () => {
        gsap.to(h1Ref.current, {
            bottom:0,
            duration: 0.5,
        })

        gsap.to(pContainerRef.current, {
            top:'100%',
            duration: 0.5,
        })
    }

    return (
        <div className="relative mt-10 w-[350px] rounded-lg overflow-hidden  flex items-center justify-center" ref={ref}>
            {isFour && (
                <div className="w-[300px] h-[300px] absolute left-60 top-48 bg-[#1B1640] bg-gradient-to-r from-[#1B1640] to-transparent blur-3xl" />
            )}

            <div onMouseEnter={onHover} onMouseLeave={onHoverLeave} className="w-full bg-slate-400 h-[300px] " >

                {/* first div */}
                <div className=' absolute'>
                <img className='min-h-[300px] object-cover w-full' src="" alt="" />
                </div>
                {/* second div */}
                <div ref={h1Ref} className='absolute z-10  w-full flex bottom-0 mb-3 items-center justify-center '>
                    <h1 className='text-white text-xl text-center'>{item.title}</h1>
                </div>
                {/* third div */}
                <div ref={pContainerRef} className='w-full z-9 top-[100%] h-full bg-[#13143b] p-5 absolute '>
                    <p className='text-white text-sm absolute bottom-5 pr-6 '>{item.description}</p>
                </div>
            </div>
        </div>
    );
});

export default ServiceCard;
