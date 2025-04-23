import React, { useRef } from 'react'
import Parallelogram from './Parallelogram'
import Image1 from '../assets/images/image1.png'
import Image2 from '../assets/images/image2.png'
import Image3 from '../assets/images/image3.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Hero() {
  const topLine = useRef(null)
  const leftLine = useRef(null)
  const rightLine = useRef(null)
  const headingRef = useRef<(HTMLSpanElement | null)[]>([])
  const paraRef = useRef<(HTMLSpanElement | null)[]>([])
  const parallelogramRef = useRef<(HTMLDivElement | null)[]>([])
  const btnRef = useRef(null)
  const btnTextRef = useRef<(HTMLSpanElement | null)[]>([])

  const heading = ['Accelerate Your AI', 'with Precision', 'Annotation']
  const para =
    'Image, Video & Geospatial Annotation Services powered by experts and smart tech.'
  const paragraph = para.split(' ')
  const btn = 'Get Started'
  const button = btn.split('')

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
    <>
      <div className='absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-[1] pointer-events-none'></div>

      <div className='relative z-10 px-20 py-20 bg-transparent'>
        

        <div className='flex'>

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

        </div>
      </div>
    </>
  )
}
