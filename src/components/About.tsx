import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Users, Lightbulb } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutH1Ref = useRef(null);
  const aboutPRef = useRef(null);
  const aboutCardsRefs = useRef([]);
  const containerRef = useRef(null);

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
    });

    gsap.from(aboutCardsRefs.current, {
      y: 100,
      stagger: 0.1,
      scrollTrigger: {
        trigger: aboutCardsRefs.current,
        start: "top 70%",
        end: "top 50%",
        scrub: 1,
      },
      opacity: 0,
    });

    gsap.to(containerRef.current, {
      y: -200,
      opacity: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "bottom 50%",
        end: "bottom 30%",
        scrub: 1,
      },
    });
  }, []);

  const aboutContent = [
    {
      title: "Our Mission",
      description:
        "To empower businesses with AI-driven solutions that drive growth, efficiency, and innovation in the digital age. We aim to revolutionize industries by providing intelligent systems that enable companies to stay competitive, make informed decisions, and achieve sustainable success. Our mission is rooted in solving real-world problems with cutting-edge technology.",
      icon: Target,
    },
    {
      title: "Our Team",
      description:
        "A diverse group of AI experts, developers, business strategists, and thought leaders working together to deliver exceptional results. Our team combines deep technical expertise with creative problem-solving and strategic vision to ensure that every project we undertake is impactful, efficient, and aligned with our clients' long-term goals. We believe that collaboration and innovation are the keys to our success.",
      icon: Users,
    },
    {
      title: "Our Vision",
      description:
        "To lead the AI revolution by creating innovative solutions that shape the future of technology and business. We envision a world where AI seamlessly integrates with everyday business processes, driving growth and transformation. Our vision is to stay at the forefront of technological advancements and use our expertise to drive change in industries across the globe.",
      icon: Lightbulb,
    },
  ];
  

  return (
    <section id="about" style={{ fontFamily: "verdana" }} ref={containerRef} className="relative py-20">
      <div className="px-20">
        <h1 ref={aboutH1Ref} className="text-5xl font-bold text-gray-100 text-center mt-20">
          Who are We
        </h1>
        <p ref={aboutPRef} className="text-xl mt-10 text-center text-gray-100 max-w-3xl mx-auto">
          We are pioneers in AI technology, dedicated to transforming businesses through innovative solutions and cutting-edge artificial intelligence.
        </p>
      </div>

      <div className="flex justify-center mt-20 border-[#444]">
        <div className="grid md:grid-cols-3">
          {aboutContent.map((content, index) => (
            <div
              ref={(el) => (aboutCardsRefs.current[index] = el)}
              key={index}
              className={`flex flex-col justify-between py-10 min-h-[500px] px-20 border-r ${
                index === aboutContent.length - 1 ? "border-none" : ""
              } border-[#444]`}
            >
              <div className="flex items-center flex-col-reverse justify-center">
                <h3 className="text-5xl mt-5 font-semibold text-gray-100 mb-4">
                  {content.title}
                </h3>
                <content.icon className="h-12 w-12 text-indigo-600" />
              </div>
              <p className="text-gray-100 text-center text-md">{content.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
