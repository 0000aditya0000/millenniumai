import { FaBoxOpen, FaTruck, FaCheckCircle, FaPalette, FaCar, FaEraser, FaTags, FaCogs, FaBolt, FaShieldAlt, FaPlug, FaPaintRoller, FaGripLines, FaRoad } from "react-icons/fa";
import { motion } from "framer-motion";

const generalTapes = [
  {
    title: "BOPP Packaging Tape",
    desc: "Strong & long-lasting",
    icon: <FaBoxOpen className="text-5xl text-[#b07a3c]" />,
    details: [
      "Ideal for carton sealing",
      "High tensile strength",
      "Excellent adhesion on all surfaces"
    ]
  },
  {
    title: "Automotive Tapes",
    desc: "Heat & vibration resistant",
    icon: <FaCar className="text-5xl text-[#b07a3c]" />,
    details: [
      "Withstands high temperatures",
      "Reduces noise and vibration",
      "Used in trims, wire harnessing"
    ]
  },
  {
    title: "Masking Tapes",
    desc: "Clean removal, high precision",
    icon: <FaEraser className="text-5xl text-[#b07a3c]" />,
    details: [
      "Perfect for painting jobs",
      "Leaves no residue",
      "Easy to tear by hand"
    ]
  },
  {
    title: "Custom Printed Tapes",
    desc: "Brand your packaging",
    icon: <FaTags className="text-5xl text-[#b07a3c]" />,
    details: [
      "Showcase your logo",
      "Enhance brand visibility",
      "Available in multiple colors"
    ]
  },
  {
    title: "Logistics & Carton Sealing",
    desc: "Secure, reliable, and easy to use",
    icon: <FaTruck className="text-5xl text-[#b07a3c]" />,
    details: [
      "Quick application",
      "Strong hold for shipping",
      "Suitable for all box types"
    ]
  },
  {
    title: "Color & Specialty Tapes",
    desc: "Highlight, code, or decorate with style",
    icon: <FaPalette className="text-5xl text-[#b07a3c]" />,
    details: [
      "Color code inventory",
      "Decorative and functional",
      "Multiple color options"
    ]
  },
];

const specialtyTapes = [
  {
    title: "PVC Insulation Tape",
    desc: "Pressure-sensitive tape for electrical insulation. Vinyl-based for long-lasting performance.",
    icon: <FaPlug className="text-5xl text-[#b07a3c]" />,
    details: [
      "Insulates electrical wires",
      "Flexible and stretchable",
      "Resistant to abrasion and moisture"
    ]
  },
  {
    title: "Masking Tapes",
    desc: "Painter's tape for clean lines and easy removal. Available in various widths.",
    icon: <FaPaintRoller className="text-5xl text-[#b07a3c]" />,
    details: [
      "Used in painting and surface protection",
      "Removes cleanly after use",
      "Available in various widths"
    ]
  },
  {
    title: "Cross Filament Tape",
    desc: "Glass fiber-reinforced, extremely strong for heavy packing and strapping.",
    icon: <FaGripLines className="text-5xl text-[#b07a3c]" />,
    details: [
      "High tensile strength",
      "Ideal for bundling and palletizing",
      "Replaces metal strapping in many cases"
    ]
  },
  {
    title: "Floor Marking Tape",
    desc: "Adhesive tape for marking hazards, aisles, and directions in industrial spaces.",
    icon: <FaRoad className="text-5xl text-[#b07a3c]" />,
    details: [
      "Marks safety zones and aisles",
      "Highly visible colors",
      "Durable and easy to apply"
    ]
  },
];

// const applications = [
//   { caption: "Automotive Use", icon: <FaCar className="text-3xl text-[#1a2341]" /> },
//   { caption: "General Masking", icon: <FaPaintRoller className="text-3xl text-[#1a2341]" /> },
//   { caption: "Industrial Application", icon: <FaCogs className="text-3xl text-[#1a2341]" /> },
// ];

export default function Services() {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1a2341] mb-4">Our Tape Solutions</h2>
        <p className="text-lg text-center text-[#b07a3c] mb-10 max-w-2xl mx-auto">Discover our full range of general and specialty tapes, engineered for performance across industries. From packaging to insulation, we have the perfect tape for your needs.</p>
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#b07a3c] mb-6">General Tapes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {generalTapes.map((t, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center bg-white rounded-xl p-6 shadow-md border border-[#f3e7d2] hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 cursor-pointer text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ scale: 1.04 }}
              >
                {t.icon}
                <div className="font-bold text-lg text-[#1a2341] mt-3 mb-1">{t.title}</div>
                <div className="text-[#4b4b4b] text-sm mb-2">{t.desc}</div>
                <ul className="text-xs text-left text-[#1a2341] mb-2 list-disc list-inside">
                  {t.details && t.details.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#b07a3c] mb-6">Specialty Tapes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {specialtyTapes.map((t, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center bg-[#f3e7d2] rounded-xl p-6 shadow-md border border-[#e5d3b3] hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 cursor-pointer text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ scale: 1.04 }}
              >
                {t.icon}
                <div className="font-bold text-lg text-[#1a2341] mt-3 mb-1">{t.title}</div>
                <div className="text-[#1a2341] text-sm mb-2">{t.desc}</div>
                <ul className="text-xs text-left text-[#1a2341] mb-2 list-disc list-inside">
                  {t.details && t.details.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center mt-8">
          <motion.a
            href="#contact"
            className="inline-block bg-[#b07a3c] hover:bg-[#a86b2d] text-white font-bold px-10 py-4 rounded-full shadow-lg text-lg transition-all duration-200 text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Request Sample
          </motion.a>
          {/* <div className="flex justify-center gap-8 mt-2">
            {applications.map((a, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.08 }}
              >
                <div className="bg-white rounded-lg shadow p-3 mb-2">{a.icon}</div>
                <div className="text-xs text-[#1a2341] font-semibold text-center">{a.caption}</div>
              </motion.div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}