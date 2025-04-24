import React, { useRef, useState } from "react";
import {
  Image as ImageIcon,
  Video,
  FileText,
  Mic,
  Map,
  Stethoscope,
  Database,
  Lock,
  Sparkles,
} from "lucide-react";
import ServiceCard from "./ServiceCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const serviceH1Ref = useRef(null);
  const servicePRef = useRef(null);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [showAll, setShowAll] = useState(false);
  const textRef = useRef(null);
  const cardsRef = useRef(null);

  const services = [
    {
      icon: ImageIcon,
      title: "Image Annotation",
      id: 0,
      backgroundUrl:
        "https://images.pexels.com/photos/8439084/pexels-photo-8439084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "High-accuracy image annotation for AI—bounding boxes, segmentation, and polygons. Expert-labeled, format-flexible, and built to scale across industries like retail, autonomous driving, and healthcare.",
    },
    {
      icon: Video,
      title: "Video Annotation",
      id: 1,
      backgroundUrl:
        "https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Frame-accurate video annotation for object tracking, activity recognition, and scene understanding. We specialize in temporal labeling, 2D/3D formats, and consistent tracking across frames—ideal for surveillance, self-driving, and sports analytics.",
    },
    {
      icon: Map,
      title: "Geospatial Annotation",
      id: 2,
      backgroundUrl:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "AI-ready geospatial annotation—satellite, LiDAR & aerial data for land use, objects, roads & buildings. GIS-compliant. Precision for urban, agri & location AI.",
    },
    {
      icon: Stethoscope,
      title: "Medical Annotation",
      id: 3,
      backgroundUrl:
        "https://images.pexels.com/photos/8439065/pexels-photo-8439065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Expert medical image annotation for MRI, CT, X-rays, and pathology slides. We deliver accurate organ segmentation, tumor marking, and condition classification—compliant with medical privacy standards. Perfect for AI diagnostics, research, and clinical tools.",
    },
    {
      icon: Database,
      title: "Data Collection Service",
      id: 4,
      backgroundUrl:
        "https://images.pexels.com/photos/9783812/pexels-photo-9783812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "End-to-end data collection for AI—covering text, images, audio, video, and sensor data. We ensure quality, relevance, and diversity through validated, ethically sourced datasets that are privacy-compliant and ready for training.",
    },
    {
      icon: Lock,
      title: "Data Re-identification",
      id: 5,
      backgroundUrl:
        "https://www.paubox.com/hubfs/Understanding%20data%20re-identification%20in%20healthcare.jpg",
      description:
        "Privacy-first data de-identification for AI—removing PII from structured and unstructured data using anonymization, pseudonymization, and aggregation. Fully compliant with GDPR, HIPAA, and CCPA, with documented processes and up-to-date methods.",
    },
    {
      icon: Sparkles,
      title: "Generative AI Data Solutions",
      id: 6,
      backgroundUrl:
        "https://www.paubox.com/hubfs/Understanding%20data%20re-identification%20in%20healthcare.jpg",
      description:
        "Generative AI data solutions for synthetic data creation, augmentation, and validation. We generate realistic text, images, and videos to boost model performance, tackle data scarcity, and cut costs—while preserving real-world patterns and ensuring privacy.",
    },
    {
      icon: FileText,
      title: "Text Annotation",
      id: 7,
      backgroundUrl:
        "https://cdn.prod.website-files.com/6391b5b30283a58cafb3bb77/672cc092b9f15740985d6a75_text-annotation-innovatiana.jpg",
      description:
        "Text annotation for NLP tasks like entity recognition, sentiment analysis, classification, and relationship extraction. Multilingual, domain-flexible, and quality-controlled—ideal for chatbots, content analysis, and document automation.",
    },
    {
      icon: Mic,
      title: "Audio Annotation",
      id: 8,
      backgroundUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNaHk_SVwdMGZjcsqGJiPTI2BvTsbsJJMJG_6xwaf9uW7AY3PSPrE076c9StS_p_hsHq0&usqp=CAU",
      description:
        "Audio annotation for speech recognition and analysis—covering speaker ID, emotion detection, and sound event classification. Multi-language, high-quality datasets with rigorous review for audio AI applications.",
    },
    {
      icon: Mic,
      title: "NLP",
      id: 9,
      backgroundUrl:
        "https://cdn.prod.website-files.com/656a6f5ca4824808211181c5/657792558785c8e1344de5d0_NLP-2-1.png",
      description:
        "NLP enables computers to understand and interact with human language. Applications include machine translation, sentiment analysis, text summarization, and speech recognition.",
    },
  ];

  useGSAP(() => {
    gsap.from(serviceH1Ref.current, {
      y: 100,
      scrollTrigger: {
        trigger: serviceH1Ref.current,
        start: "top 70%",
        end: "top 50%",
        scrub: 1,
      },
      opacity: 0,
    });
    gsap.from(servicePRef.current, {
      y: 100,
      scrollTrigger: {
        trigger: servicePRef.current,
        start: "top 70%",
        end: "top 50%",
        scrub: 1,
      },
      opacity: 0,
    });
    gsap.utils.toArray(cardRefs.current).forEach((card, i) => {
      gsap.from(card, {
        y: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        delay: i * 0.1,
      });
    });
    

    gsap.to(textRef.current,{
      y:-40,
      opacity:0,
      scrollTrigger:{
        trigger:textRef.current,
        start:"bottom 30%",
        end:"bottom 20%",
        scrub:1,
      }
    })

    // gsap.utils.toArray(cardRefs.current).forEach((card, i) => {
    //   gsap.to(card, {
    //     y: -40,
    //     opacity: 0,
    //     duration:.5,
    //     scrollTrigger: {
    //       trigger: card,
    //       start: "top 10%",
    //       end: "top 0%",
    //       scrub: 1,
    //     },
    //   });
    // });

  });

  return (
    <section
      ref={containerRef}
      style={{ fontFamily: "verdana" }}
      id="services"
      className="py-20 px-10 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div ref={textRef} className="text-center mb-16">
          <h1 ref={serviceH1Ref} className="text-5xl font-bold text-gray-100">
            Our Services
          </h1>
          <p
            ref={servicePRef}
            className="text-xl mt-10 text-gray-400 max-w-3xl mx-auto"
          >
            We offer comprehensive AI-powered data annotation and content
            management solutions to help businesses build better AI models.
          </p>
        </div>

        <div ref={cardsRef} className="flex flex-wrap justify-evenly gap-8">
          {(showAll ? services : services.slice(0, 6)).map((item, index) => (
            <ServiceCard
              ref={(el) => (cardRefs.current[index] = el)}
              key={index}
              item={item}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="bg-[#0e0c15] text-white px-6 py-2 rounded-full hover:bg-[#2a2b6e] transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
    </div>
    </section >
  );
};

export default Services;
