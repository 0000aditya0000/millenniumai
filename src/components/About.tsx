import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Users, Lightbulb } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);


export default function About() {
  const aboutH1Ref = useRef(null);
  const aboutPRef = useRef(null);
  const aboutCardsRefs = useRef([])
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(() => {

    gsap.from(aboutH1Ref.current, {
      y: 100,
      scrollTrigger: {
        trigger: aboutH1Ref.current,
        start: "top 70%",
        end: "top 50%",
        scrub: 1,
        
      },
      opacity: 0,
    });

    gsap.from(aboutPRef.current, {
      y: 100,
      scrollTrigger: {
        trigger: aboutPRef.current,
        start: "top 70%",
        end: "top 50%",
        scrub: 1,
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
        scrub: 1,

      },
      opacity: 0,
    })

    gsap.to(containerRef.current, {
      y:-200,
      opacity:0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "bottom 50%",
        end: "bottom 30%",
        scrub: 1,
      } 
    })

    gsap.to(textRef.current, {
      y:-50,
      opacity:0,
      scrollTrigger:{
        trigger: textRef.current,
        start: "bottom 40%",
        end: "bottom 30%",
        scrub: 1,
      }
    })

    gsap.to(cardsRef.current, {
      y:-50,
      opacity:0,
      scrollTrigger:{
        trigger: cardsRef.current,
        start: "bottom 70%",
        end: "bottom 50%",
        scrub: 1,
      }
    })

  }, []);

  const aboutContent = [
    {
      title: "Our Mission",
      description:
        " Our mission is to empower businesses with cutting-edge, AI-driven solutions that fuel growth, enhance operational efficiency, and spark innovation, helping them thrive in the ever-evolving digital landscape.",
      icon : Target
    },
    {
      title: "Our Team",
      description:
        "We are a diverse team of AI experts, skilled developers, and forward-thinking business strategists united by a shared vision—to collaborate seamlessly and deliver exceptional, results-driven solutions tailored to each client’s unique goals.",
        icon: Users
    },
    {
      title: "Our Vision",
      description:
       "Our vision is to lead the AI revolution by developing groundbreaking solutions that not only push the boundaries of technology but also transform the way businesses operate—shaping a smarter, more efficient, and forward-looking future.",
        icon: Lightbulb
    },
  ];

  return (
    <section id="about" style={{fontFamily:"verdana"}} ref={containerRef} className=" relative py-20">
      <div ref={textRef} className="px-20">
        <h1 ref={aboutH1Ref} className="text-5xl font-bold text-gray-100 text-center mt-20">
          Who are We
        </h1>
        <p ref={aboutPRef} className="text-xl mt-10 text-center text-gray-600 max-w-3xl mx-auto">
          We are pioneers in AI technology, dedicated to transforming businesses through innovative solutions and cutting-edge artificial intelligence.
        </p>
      </div>

        
      <div className="flex justify-center mt-20 border-[#444]">
        
        <div ref={cardsRef} className="grid md:grid-cols-3">
          {aboutContent.map((content, index) => (
            <div
              ref={(el) => (aboutCardsRefs.current[index] = el)}
              key={index}
              className={`flex flex-col justify-evenly py-10 min-h-[500px] px-20 border-r ${index === aboutContent.length - 1 ? "border-none" : ""
                } border-[#444]`}
            >
             <div className="flex items-center flex-col-reverse justify-center">
             <h3 className="text-5xl mt-5 font-semibold text-gray-100 mb-4">
                {content.title}
              </h3>
              <content.icon className="h-12 w-12 text-indigo-600" />
             </div>
              <p className="text-gray-400 text-center text-md">{content.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
