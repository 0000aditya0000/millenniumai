import React, { useRef } from "react";
import "./banner.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Banner = ({ services }) => {
  const sliderRef = useRef(null);

  useGSAP(()=> {
    gsap.from(sliderRef.current,{
      y:100,
      opacity:0,
      scrollTrigger:{
        trigger: sliderRef.current,
        start:'top 70%',
        end:"top 60%",
        scrub:1
      }
    })

  })

//   const handleClick = (i) => {
//     gsap.to(sliderRef.current, {
//       rotateY: (360 / 10) * i,
//       duration: 1,
//     });
//   };

  return (
    <div 
    ref={sliderRef}
    className="relative w-full h-screen overflow-hidden">
      <div
        className="slider absolute top-[10%] left-[43%] w-[180px] h-[225px] z-10"
      >
        {services.map((item, i) => (
          <div
            key={i}
            // onClick={() => handleClick(i)}
            className="item absolute overflow-hidden inset-0 bg-gray-400"
            style={{
              transform: `rotateY(${i * (360 / services.length)}deg) translateZ(550px)`,
            }}
          >
            <img
              src={item.backgroundUrl}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="description">
              <h3 className="text-white text-[12px] font-bold">{item.title}</h3>
              <p className="text-white text-[9px]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
