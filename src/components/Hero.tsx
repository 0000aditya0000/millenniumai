import React, { useRef, useEffect, useState } from 'react'
import Parallelogram from './Parallelogram'
import Image1 from '../assets/images/image1.png'
import Image2 from '../assets/images/image2.png'
import Image3 from '../assets/images/image3.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import * as THREE from 'three'

export default function Hero() {
  const topLine = useRef(null)
  const leftLine = useRef(null)
  const rightLine = useRef(null)
  const headingRef = useRef<(HTMLSpanElement | null)[]>([])
  const paraRef = useRef<(HTMLSpanElement | null)[]>([])
  const parallelogramRef = useRef<(HTMLDivElement | null)[]>([])
  const btnRef = useRef(null)
  const btnTextRef = useRef<(HTMLSpanElement | null)[]>([])

  const [vantaEffect, setVantaEffect] = useState<any>(null)
  const vantaRef = useRef(null)

  const heading = ['Accelerate Your AI', 'with Precision', 'Annotation']
  const para =
    'Image, Video & Geospatial Annotation Services powered by experts and smart tech.'
  const paragraph = para.split(' ')
  const btn = 'Get Started'
  const button = btn.split('')

  const RightContent = [
    {
      title: 'AI-Powered Solutions',
      description:
        'Transforming the way industries operate through intelligent, scalable artificial intelligence technology.',
      image: Image1,
    },
    {
      title: 'Geospatial Annotation',
      description:
        'Empowering geospatial intelligence with AI-driven annotation for satellite and aerial imagery—bringing precision and scalability to your data workflows.',
      image: Image2,
    },
    {
      title: 'Future of Technology',
      description:
        'Fueling digital transformation through intelligent, AI-powered solutions built for the future.',
      image: Image3,
    },
  ]

  useEffect(() => {
    if (!vantaEffect && window.VANTA && window.VANTA.GLOBE && vantaRef.current) {
      const effect = window.VANTA.GLOBE({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        // highlightColor: '#0e0c15',
        color: "#4F46E5",
        color2:"#888888",
        backgroundColor:"#0E0C15",
        lowlightColor: 0x19143B,
        baseColor: 0x19143B,
        speed: 1.0,
        points: 14.0,
        maxDistance: 20.0,
        spacing: 18.0,
      })
      setVantaEffect(effect)

      return () => {
        effect.destroy()
      }
    }
  }, [])

  useGSAP(() => {
    gsap.from(topLine.current, { x: '-100%', duration: 2, opacity: 0 })
    gsap.from(leftLine.current, { y: '100%', duration: 2 })
    gsap.from(rightLine.current, { y: '100%', duration: 2 })
    gsap.from(headingRef.current, {
      y: 40,
      opacity: 0,
      stagger: 0.12,
      delay: 0.1,
    })
    gsap.from(paraRef.current, {
      y: 25,
      opacity: 0,
      stagger: 0.018,
      delay: 0.5,
    })
    gsap.from(parallelogramRef.current, {
      x: -50,
      opacity: 0,
      stagger: 0.1,
      delay: 0.2,
    })
    gsap.from(btnRef.current, { scale: 0, borderRadius: 50, delay: 0.1 })
    gsap.from(btnTextRef.current, {
      y: 10,
      stagger: 0.009,
      delay: 0.3,
      opacity: 0,
    })
  })

  return (
    <div ref={vantaRef} className='relative w-full h-screen overflow-hidden'>
      {/* Optional overlay to make content more visible */}
      <div className='absolute inset-0 bg-black/40 z-[1] pointer-events-none'></div>

      <div className='relative z-10 px-20 py-20 bg-transparent'>
        <div
          ref={topLine}
          className='fixed w-[99vw] mt-6 h-[1px] bg-[#444] left-0'
        ></div>

        <div className='flex'>
          <div ref={leftLine} className='h-[90vh] w-[1px] bg-[#444]'></div>

          <div className='flex-1 flex'>
            <div className='pl-11 z-10 pr-5 max-w-[700px] flex flex-col'>
              <h1 className='mt-40'>
                {heading.map((item, index) => (
                  <span
                    ref={(el) => (headingRef.current[index] = el)}
                    key={index}
                    className='text-6xl inline-block font-bold text-white'
                  >
                    {item} <br />
                  </span>
                ))}
              </h1>

              <p className='max-w-[32vw] mt-10'>
                {paragraph.map((item, index) => (
                  <span
                    ref={(el) => (paraRef.current[index] = el)}
                    key={index}
                    className='text-xl inline-block pr-2 text-white'
                  >
                    {item}{' '}
                  </span>
                ))}
              </p>

              <button
                ref={btnRef}
                className='max-w-[10vw] mt-10 bg-[#1b123a] px-2 py-2 rounded-md overflow-hidden drop-shadow-[0_0_10px_#222]'
              >
                {button.map((item, index) => (
                  <span
                    ref={(el) => (btnTextRef.current[index] = el)}
                    key={index}
                    className={`text-white ${index === 3 ? 'ml-2' : ''} inline-block`}
                  >
                    {item}
                  </span>
                ))}
              </button>
            </div>

            <div className='flex-1 flex gap-5 pt-20 mr-24'>
              {/* Reserved for right side visuals, cards or images */}
            </div>
          </div>

          <div ref={rightLine} className='h-[100vh] w-[1px] bg-[#444]'></div>
        </div>
      </div>
    </div>
  )
}
