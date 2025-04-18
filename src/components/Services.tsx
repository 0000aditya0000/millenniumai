import React from "react";
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
const Services = () => {
  const services = [
    {
      icon: ImageIcon,
      title: "Image Annotation",
      id: 0,
      backgroundUrl: "https://keymakr.com/blog/content/images/2021/05/segment.jpg",
      description:
        "High-accuracy image annotation for AI—bounding boxes, segmentation, and polygons. Expert-labeled, format-flexible, and built to scale across industries like retail, autonomous driving, and healthcare."
    },
    {
      icon: Video,
      title: "Video Annotation",
      id: 1,
      backgroundUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSivQUDOa6m59Hu27EUQs-2W8S1_PXn3zZ9ew&s",
      description:
"Frame-accurate video annotation for object tracking, activity recognition, and scene understanding. We specialize in temporal labeling, 2D/3D formats, and consistent tracking across frames—ideal for surveillance, self-driving, and sports analytics."    },
    {
      icon: Map,
      title: "Geospatial Annotation",
      id: 2,
      backgroundUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_baQ82eUqEzrHJZ2JYmwlqj9lgS8fkSYIAA&s",
      description:
"Geospatial annotation for AI—covering satellite imagery, LiDAR, and aerial data. We handle land use classification, object detection, building footprints, and road mapping with GIS standards and coordinate system support. Ideal for urban planning, agriculture, and location-based AI, with cross-validated, high-precision results."    },
    {
      icon: Stethoscope,
      title: "Medical Annotation",
      id: 3,
      backgroundUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8xc68mhtXlcrICVXLk2UdUc-M7DI_PoiFLw&s",
      description:
"Expert medical image annotation for MRI, CT, X-rays, and pathology slides. We deliver accurate organ segmentation, tumor marking, and condition classification—compliant with medical privacy standards. Perfect for AI diagnostics, research, and clinical tools."    },
    {
      icon: Database,
      title: "Data Collection Service",
      id: 4,
      backgroundUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfMFI6dCfUEQUOxALW7NhBWgrGtnIoRgFtSu6k9jWNW8cJa3VLIkPDHAK9hj_vgopWK04&usqp=CAU",
      description:
"End-to-end data collection for AI—covering text, images, audio, video, and sensor data. We ensure quality, relevance, and diversity through validated, ethically sourced datasets that are privacy-compliant and ready for training."    },
    {
      icon: Lock,
      title: "Data De-identification",
      id: 5,
      backgroundUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF-zlP8Lrc-vpgFTMrf2RmYVaMiiAPP7yUog&s",
      description:
"Privacy-first data de-identification for AI—removing PII from structured and unstructured data using anonymization, pseudonymization, and aggregation. Fully compliant with GDPR, HIPAA, and CCPA, with documented processes and up-to-date methods."    },
    {
      icon: Sparkles,
      title: "Generative AI Data Solutions",
      id: 6,
      backgroundUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6VcHVCrJtujxp8zpKNbRHqRVoqa8KQMb_rA&s",
      description:
"Generative AI data solutions for synthetic data creation, augmentation, and validation. We generate realistic text, images, and videos to boost model performance, tackle data scarcity, and cut costs—while preserving real-world patterns and ensuring privacy."    },
    {
      icon: FileText,
      title: "Text Annotation",
      id: 7,
      backgroundUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQYc3xlsGdnlozo5s5iaZvdWMo3w8Kg6uYA&s",
      description:
"Text annotation for NLP tasks like entity recognition, sentiment analysis, classification, and relationship extraction. Multilingual, domain-flexible, and quality-controlled—ideal for chatbots, content analysis, and document automation."    },
    {
      icon: Mic,
      title: "Audio Annotation",
      id: 8,
      backgroundUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqRparNtPHvt0Ad5lWKomfgSgioJwGh-wa3g&s",
      description:
"Audio annotation for speech recognition and analysis—covering speaker ID, emotion detection, and sound event classification. Multi-language, high-quality datasets with rigorous review for audio AI applications."    },
    {
      icon: Mic,
      title: "NLP (Natural Language Processing)",
      id: 9,
      backgroundUrl:
        "https://www.shaip.com/wp-content/uploads/2022/10/Blog-What-is-NLP.jpg",
      description:
"NLP enables computers to understand and interact with human language. Applications include machine translation, sentiment analysis, text summarization, and speech recognition."    },
  ];

  return (
    <section id="services" className="py-20 px-10 overflow-hidden bg-[#0E0C15]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We offer comprehensive AI-powered data annotation and content
            management solutions to help businesses build better AI models.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <ServiceCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
