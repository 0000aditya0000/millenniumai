import React from 'react';
import { Image as ImageIcon, Video, FileText, Mic, ShieldCheck, Tags, Map, Stethoscope, Database, Lock, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: ImageIcon,
      title: 'Image Annotation',
      image: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66',
      description: 'Our comprehensive image annotation service delivers high-precision labeling for computer vision and machine learning models. We specialize in bounding boxes, semantic segmentation, and polygon annotation, ensuring pixel-perfect accuracy for your AI training needs. Our team of expert annotators handles diverse image types, from simple object detection to complex scene understanding. We employ rigorous quality control measures and support multiple annotation formats, making it easier to integrate with your existing ML pipeline. Whether you need retail product identification, autonomous vehicle training data, or medical image analysis, our service scales to meet your specific requirements while maintaining consistent quality and accuracy.'
    },
    {
      icon: Video,
      title: 'Video Annotation',
      image: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30',
      description: 'Our advanced video annotation service provides frame-by-frame precision for complex video analysis tasks. We offer comprehensive solutions for object tracking, activity recognition, and scene understanding in video content. Our team specializes in temporal annotation, ensuring consistent object tracking across frames, activity labeling for human behavior analysis, and detailed scene segmentation. We handle diverse video formats and support both 2D and 3D annotation requirements. Our service is particularly valuable for surveillance systems, autonomous driving projects, and sports analytics. We employ state-of-the-art tools and methodologies to deliver accurate, time-coded annotations that enhance your video AI applications.'
    },
    {
      icon: Map,
      title: 'Geospatial Annotation',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
      description: 'Our geospatial annotation service specializes in processing and labeling geographic data for AI applications. We provide comprehensive solutions for satellite imagery analysis, mapping applications, and location-based services. Our expert team handles various types of geospatial data, including satellite imagery, aerial photographs, and LiDAR point clouds. We offer services such as land use classification, object detection in aerial imagery, building footprint extraction, and road network mapping. Our annotation process incorporates GIS standards and supports multiple coordinate systems. We ensure high accuracy through our quality control process that includes cross-validation and geometric precision checks. This service is essential for urban planning, environmental monitoring, precision agriculture, and location-based AI applications.'
    },
    {
      icon: Stethoscope,
      title: 'Medical Annotation',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
      description: 'Our specialized medical annotation service caters to the healthcare and biomedical research sectors. We provide expert annotation for medical imaging data, including MRI scans, CT scans, X-rays, and pathology slides. Our team of trained medical annotators works closely with healthcare professionals to ensure accurate labeling of anatomical structures, abnormalities, and pathological findings. We follow strict medical data handling protocols and comply with healthcare data privacy regulations. Our service supports various annotation types, including organ segmentation, tumor marking, measurement annotations, and classification of medical conditions. We maintain the highest standards of accuracy crucial for medical AI applications, diagnostic tools, and research projects.'
    },
    {
      icon: Database,
      title: 'Data Collection Service',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d',
      description: 'Our comprehensive data collection service helps organizations build robust datasets for AI training. We specialize in gathering diverse, high-quality data across multiple domains and formats. Our team employs systematic collection methodologies to ensure data relevance and representation. We handle various data types, including text, images, audio, video, and sensor data. Our service includes data sourcing, validation, and initial preprocessing to ensure quality and usability. We focus on creating balanced, unbiased datasets that represent real-world scenarios and edge cases. Our collection process adheres to data privacy regulations and ethical guidelines, ensuring compliant and responsible data gathering practices.'
    },
    {
      icon: Lock,
      title: 'Data De-identification',
      image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec',
      description: 'Our data de-identification service ensures privacy compliance while maintaining data utility for AI applications. We employ advanced techniques to remove or mask personally identifiable information (PII) from various data types. Our comprehensive approach includes automated and manual review processes to ensure thorough de-identification. We handle structured and unstructured data, applying appropriate methods such as pseudonymization, anonymization, and aggregation. Our service complies with major privacy regulations including GDPR, HIPAA, and CCPA. We maintain detailed de-identification logs and provide documentation of our processes. Our team regularly updates our methods to address emerging privacy concerns and new types of identifying information.'
    },
    {
      icon: Sparkles,
      title: 'Generative AI Data Solutions',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
      description: 'Our cutting-edge Generative AI data solutions help organizations leverage the power of synthetic data generation and augmentation. We provide comprehensive services for creating, validating, and optimizing training data for generative AI models. Our team specializes in generating diverse, realistic synthetic datasets that complement real-world data and address data scarcity challenges. We offer solutions for text generation, image synthesis, and synthetic video creation. Our service includes data quality assessment, bias detection, and performance validation of generated content. We employ advanced techniques to ensure the synthetic data maintains statistical properties and relationships present in real data while protecting privacy and reducing collection costs.'
    },
    {
      icon: FileText,
      title: 'Text Annotation',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a',
      description: 'Our text annotation service provides comprehensive solutions for natural language processing tasks. We offer expert annotation for named entity recognition, sentiment analysis, text classification, and relationship extraction. Our team handles multiple languages and domains, ensuring consistent quality across diverse text types. We employ sophisticated annotation tools and maintain strict quality control measures through multiple review stages. Our service is particularly valuable for developing chatbots, content analysis systems, and automated document processing solutions.'
    },
    {
      icon: Mic,
      title: 'Audio Annotation',
      image: 'https://images.unsplash.com/photo-1631223046052-4919f9819ab9',
      description: 'Our professional audio annotation service specializes in creating high-quality labeled datasets for speech recognition and audio analysis systems. We provide comprehensive solutions for speaker identification, emotion detection, and sound event classification. Our team handles multiple languages and accents, ensuring broad coverage for your audio AI applications. We employ advanced audio processing tools and maintain strict quality standards through our multi-stage review process.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive AI-powered data annotation and content management solutions to help businesses build better AI models.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-indigo-600/20 group-hover:bg-indigo-600/30 transition-colors"></div>
                <service.icon className="absolute top-4 right-4 h-8 w-8 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                <button className="mt-4 inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
                  Learn More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;