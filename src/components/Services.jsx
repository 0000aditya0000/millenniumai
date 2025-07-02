import { FaBoxOpen, FaTruck, FaCheckCircle, FaPalette, FaCar, FaEraser, FaTags, FaCogs, FaBolt, FaShieldAlt } from "react-icons/fa";

const services = [
  {
    title: "BOPP Packaging Tape",
    desc: "Strong & long-lasting",
    icon: <FaBoxOpen className="text-5xl text-[#b07a3c]" />,
    link: "#services"
  },
  {
    title: "Automotive Tapes",
    desc: "Heat & vibration resistant",
    icon: <FaCar className="text-5xl text-[#b07a3c]" />,
    link: "#services"
  },
  {
    title: "Masking Tapes",
    desc: "Clean removal, high precision",
    icon: <FaEraser className="text-5xl text-[#b07a3c]" />,
    link: "#services"
  },
  {
    title: "Custom Printed Tapes",
    desc: "Brand your packaging",
    icon: <FaTags className="text-5xl text-[#b07a3c]" />,
    link: "#services"
  },
  {
    title: "Logistics & Carton Sealing",
    desc: "Secure, reliable, and easy to use",
    icon: <FaTruck className="text-5xl text-[#b07a3c]" />,
    link: "#services"
  },
  {
    title: "Color & Specialty Tapes",
    desc: "Highlight, code, or decorate with style",
    icon: <FaPalette className="text-5xl text-[#b07a3c]" />,
    link: "#services"
  },
  {
    title: "Industrial Strength Tapes",
    desc: "Heavy-duty, high performance",
    icon: <FaCogs className="text-5xl text-[#b07a3c]" />,
    link: "#services"
  },
  {
    title: "Electrical Insulation Tapes",
    desc: "Safe, flexible, and durable",
    icon: <FaBolt className="text-5xl text-[#b07a3c]" />,
    link: "#services"
  },
  {
    title: "Protective & Security Tapes",
    desc: "Tamper-evident, anti-counterfeit",
    icon: <FaShieldAlt className="text-5xl text-[#b07a3c]" />,
    link: "#services"
  },
];




export default function Services() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a2341] mb-10">Our Tape Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
          {services.map((s, i) => (
            <div key={i} className="flex items-center gap-5 p-2">
              <div className="flex-shrink-0">{s.icon}</div>
              <div>
                <div className="font-bold text-lg text-[#1a2341]">{s.title}</div>
                <div className="text-[#4b4b4b] text-sm mb-1">{s.desc}</div>
                <a href={s.link} className="text-[#1a2341] text-sm font-semibold hover:underline flex items-center gap-1">
                  View Details <span className="text-lg">&gt;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}