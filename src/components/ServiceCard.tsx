import React, { forwardRef, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ServiceCard = forwardRef(({ item }, ref) => {
    const isFour = item.id % 4 === 0;

    const h1Ref = useRef(null);
    const pContainerRef = useRef(null);
    const containerRef = useRef(null)

    const onHover = () => {
        gsap.to(h1Ref.current, {
            bottom: '77%',
            duration: 0.5,
        });

        gsap.to(pContainerRef.current, {
            top: 0,
            duration: 0.5,
        });
    };

    useGSAP(()=>{
        gsap.to(containerRef.current,{
            y:-40,
            opacity:0,
            scrollTrigger:{
                trigger:containerRef.current,
                start:"bottom 30%",
                end:"bottom 20%",
                scrub:1
            }
        })
    })

    const onHoverLeave = () => {
        gsap.to(h1Ref.current, {
            bottom: 0,
            duration: 0.5,
        });

        gsap.to(pContainerRef.current, {
            top: '100%',
            duration: 0.5,
        });
    };

    return (
        <div ref={containerRef}>
        <div
            className="relative mt-10 w-[350px] h-[300px] rounded-lg overflow-hidden shadow-[0_0_10px_#444] hover:shadow-[0_0_10px_#777] flex items-center justify-center bg-black"
            ref={ref}
        >
            <div 
                onMouseEnter={onHover}
                onMouseLeave={onHoverLeave}
                className="relative w-full h-full"
            >
                {/* Image */}
                <img
                    className="w-full h-full object-cover absolute top-0 left-0"
                    src={item.backgroundUrl}
                    alt="Service Background"
                />

                {/* Title */}
                <div
                    ref={h1Ref}
                    className="absolute z-20 w-full flex bottom-0 mb-3 items-center justify-center "
                >
                    <h1 className="text-white text-xl text-center">{item.title}</h1>
                </div>

                {/* Description Overlay */}
                <div
                    ref={pContainerRef}
                    className="absolute w-full h-full backdrop-blur-md top-[100%] bg-[#0e0c159e] p-5 z-10 "
                >
                    <p className="text-white text-sm absolute bottom-5 pr-6">{item.description}</p>
                </div>
            </div>
        </div>
        </div>
    );
});

export default ServiceCard;
