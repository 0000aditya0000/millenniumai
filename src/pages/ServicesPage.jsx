import React from 'react';
import { FaBoxOpen, FaCar, FaEraser, FaTags, FaTruck, FaPalette, FaCogs, FaBolt, FaShieldAlt, FaPlug, FaPaintRoller, FaGripLines, FaRoad } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const services = [
  {
    icon: <FaBoxOpen className="text-5xl text-[#b07a3c] mb-4" />, title: 'BOPP Packaging Tape', desc: 'Strong, long-lasting, and perfect for carton sealing.', features: ["Ideal for carton sealing", "High tensile strength", "Excellent adhesion on all surfaces"]
  },
  {
    icon: <FaCar className="text-5xl text-[#b07a3c] mb-4" />, title: 'Automotive Tapes', desc: 'Heat and vibration resistant for trims and wire harnessing.', features: ["Withstands high temperatures", "Reduces noise and vibration", "Used in trims, wire harnessing"]
  },
  {
    icon: <FaEraser className="text-5xl text-[#b07a3c] mb-4" />, title: 'Masking Tapes', desc: 'Clean removal, high precision, and no residue.', features: ["Perfect for painting jobs", "Leaves no residue", "Easy to tear by hand"]
  },
  {
    icon: <FaTags className="text-5xl text-[#b07a3c] mb-4" />, title: 'Custom Printed Tapes', desc: 'Brand your packaging and enhance visibility.', features: ["Showcase your logo", "Enhance brand visibility", "Available in multiple colors"]
  },
  {
    icon: <FaTruck className="text-5xl text-[#b07a3c] mb-4" />, title: 'Logistics & Carton Sealing', desc: 'Secure, reliable, and easy to use for all box types.', features: ["Quick application", "Strong hold for shipping", "Suitable for all box types"]
  },
  {
    icon: <FaPalette className="text-5xl text-[#b07a3c] mb-4" />, title: 'Color & Specialty Tapes', desc: 'Highlight, code, or decorate with style.', features: ["Color code inventory", "Decorative and functional", "Multiple color options"]
  },
  {
    icon: <FaCogs className="text-5xl text-[#b07a3c] mb-4" />, title: 'Wire Harnessing Tapes', desc: 'Insulate and protect wires in automotive and electronics.', features: ["High-temperature resistance", "Flexible and stretchable", "Ideal for automotive and electronics"]
  },
  {
    icon: <FaBolt className="text-5xl text-[#b07a3c] mb-4" />, title: 'White Goods Tapes', desc: 'Durable, moisture-resistant, and long-lasting adhesion.', features: ["Used in appliances and electronics", "Resistant to heat and moisture", "Provides long-lasting adhesion"]
  },
  {
    icon: <FaShieldAlt className="text-5xl text-[#b07a3c] mb-4" />, title: 'Surface Protection Tapes', desc: 'Protect surfaces from scratches and damage.', features: ["Ideal for glass, metal, and plastic surfaces", "Easy to apply and remove", "Long-lasting protection"]
  },
  {
    icon: <FaPlug className="text-5xl text-[#b07a3c] mb-4" />, title: 'PVC Insulation Tape', desc: 'Pressure-sensitive, flexible, and abrasion-resistant.', features: ["Insulates electrical wires", "Flexible and stretchable", "Resistant to abrasion and moisture"]
  },
  {
    icon: <FaPaintRoller className="text-5xl text-[#b07a3c] mb-4" />, title: 'Painter’s Masking Tape', desc: 'Clean lines and easy removal for painting.', features: ["Used in painting and surface protection", "Removes cleanly after use", "Available in various widths"]
  },
  {
    icon: <FaGripLines className="text-5xl text-[#b07a3c] mb-4" />, title: 'Cross Filament Tape', desc: 'Glass fiber-reinforced for heavy packing.', features: ["High tensile strength", "Ideal for bundling and palletizing", "Replaces metal strapping in many cases"]
  },
  {
    icon: <FaRoad className="text-5xl text-[#b07a3c] mb-4" />, title: 'Floor Marking Tape', desc: 'Mark hazards, aisles, and directions in industrial spaces.', features: ["Marks safety zones and aisles", "Highly visible colors", "Durable and easy to apply"]
  },
];

const stats = [
  { label: 'Years Experience', value: 15 },
  { label: 'Clients Served', value: 1200 },
  { label: 'Tape Variants', value: 30 },
  { label: 'Industries Covered', value: 12 },
];

const CustomCTA = () => (
  <section className="w-full bg-[#1a2341] py-16 px-4 flex flex-col items-center justify-center text-center rounded-3xl shadow-lg my-16">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Ready to Upgrade Your Packaging?</h2>
    <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
      Get in touch for a free consultation or to request a custom tape sample. Our experts are here to help you find the perfect solution for your business.
    </p>
    <a
      href="/contact"
      className="inline-block bg-[#b07a3c] hover:bg-[#a86b2d] text-white font-bold px-10 py-4 rounded-full shadow-lg text-lg transition-all duration-200 text-center focus:outline-none focus:ring-2 focus:ring-[#b07a3c] hover:scale-105"
    >
      Request a Free Sample
    </a>
  </section>
);

function AnimatedStat({ value, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start({ count: value });
    }
  }, [inView, value, controls]);
  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow border border-[#f3e7d2]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.span
        className="text-4xl md:text-5xl font-bold text-[#b07a3c] mb-2"
        animate={controls}
        initial={{ count: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        {inView ? <AnimatedNumber value={value} /> : 0}
      </motion.span>
      <span className="text-lg text-[#1a2341] font-semibold">{label}</span>
    </motion.div>
  );
}

function AnimatedNumber({ value }) {
  const controls = useAnimation();
  const ref = useRef(0);
  const [display, setDisplay] = React.useState(0);
  useEffect(() => {
    controls.start({ n: value });
    controls.set({ n: 0 });
    controls.stop();
    controls.start({ n: value, transition: { duration: 2, ease: 'easeOut' } });
    return controls.stop;
  }, [value, controls]);
  
  return <span>{display}</span>;
}

const ServicesPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 px-4 flex flex-col items-center justify-center bg-[#b07a3ca5] overflow-hidden">
        <div className="max-w-3xl mx-auto text-center z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1a2341] mb-6 tracking-tight drop-shadow">Premium Tape Solutions</h1>
          <p className="text-lg md:text-xl text-[#4b4b4b] mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover our full range of general and specialty tapes, engineered for reliability, performance, and your unique business needs. From packaging to insulation, we have the perfect tape for you.
          </p>
        </div>
        {/* Decorative SVG blob */}
        <svg className="absolute left-0 top-0 w-60 h-60 opacity-20 blur-2xl -z-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#b07a3c" d="M44.8,-67.2C57.2,-59.2,65.2,-44.8,70.2,-29.7C75.2,-14.7,77.2,1,72.2,14.7C67.2,28.3,55.2,39.8,42.2,48.2C29.2,56.7,14.6,62.1,-0.7,62.9C-16,63.7,-32,59.9,-44.2,51.1C-56.4,42.3,-64.8,28.5,-68.2,13.6C-71.6,-1.3,-70,-17.2,-62.7,-29.7C-55.4,-42.2,-42.4,-51.3,-28.2,-58.2C-14,-65.1,1.4,-69.8,16.7,-70.2C32,-70.6,44.8,-67.2,44.8,-67.2Z" transform="translate(100 100)" />
        </svg>
      </section>
      {/* Stats Section */}
      <section className="max-w-5xl mx-auto py-12 px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <AnimatedStat key={i} value={stat.value} label={stat.label} />
        ))}
      </section>
      {/* Services Swiper */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={32}
          slidesPerView={1}
          loop
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          navigation
          pagination={{ clickable: true }}
          className="!pb-12"
        >
          {services.map((s, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center bg-white rounded-2xl p-10 shadow-md border border-[#f3e7d2] hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 cursor-pointer text-center h-[420px] group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
                <div className="font-bold text-xl text-[#1a2341] mb-2 tracking-tight">{s.title}</div>
                <div className="text-[#4b4b4b] text-base mb-4 leading-relaxed">{s.desc}</div>
                <ul className="text-left mx-auto text-[#1a2341] text-sm list-disc list-inside max-w-xs">
                  {s.features && s.features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* Custom CTA Section */}
      <CustomCTA />
    </div>
  );
};

export default ServicesPage;
