import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutH1Ref = useRef(null);
  const aboutPRef = useRef(null);
  const aboutCardsRefs = useRef([])

  useGSAP(() => {

    gsap.from(aboutH1Ref.current, {
      y: 100,
      scrollTrigger: {
        trigger: aboutH1Ref.current,
        start: "top 70%",
        end: "top 50%",
        // scrub: true,
      },
      opacity: 0,
    });

    gsap.from(aboutPRef.current, {
      y: 100,
      scrollTrigger: {
        trigger: aboutPRef.current,
        start: "top 70%",
        end: "top 50%",
        // scrub: true,
      },
      opacity: 0,
    })

    gsap.from(aboutCardsRefs.current, {
      y: 100,
      stagger : 0.1,
      scrollTrigger: {
        trigger: aboutCardsRefs.current,
        start: "top 70%",
        end: "top 50%",
        // scrub: true,
      },
      opacity: 0,
    })

    

  }, []);

  const aboutContent = [
    {
      title: "Our Mission",
      description:
        " To empower businesses with AI-driven solutions that drive growth, efficiency, and innovation in the digital age.",
    },
    {
      title: "Our Team",
      description:
        " A diverse group of AI experts, developers, and business strategists working together to deliver exceptional results.",
    },
    {
      title: "Our Vision",
      description:
        " To lead the AI revolution by creating innovative solutions that shape the future of technology and business.",
    },
  ];

  return (
    <section className="bg-[#0e0c15] relative py-20">
      <div className="px-20">
        <h2 ref={aboutH1Ref} className="text-4xl font-bold text-gray-100 text-center mt-20">
          Who are We
        </h2>
        <p ref={aboutPRef} className="text-xl mt-10 text-center text-gray-600 max-w-3xl mx-auto">
          We are pioneers in AI technology, dedicated to transforming businesses through innovative solutions and cutting-edge artificial intelligence.
        </p>
      </div>

        
      <div className="flex justify-center mt-20 border-[#444]">
        
        <div className="grid md:grid-cols-3">
          {aboutContent.map((content, index) => (
            <div
              ref={(el) => (aboutCardsRefs.current[index] = el)}
              key={index}
              className={`bg-[#0e0c15] flex flex-col justify-between py-10 min-h-[500px] px-20 border-r ${index === aboutContent.length - 1 ? "border-none" : ""
                } border-[#444]`}
            >
              <h3 className="text-5xl font-semibold text-gray-100 mb-4">
                {content.title}
              </h3>
              <p className="text-gray-400 text-md">{content.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
