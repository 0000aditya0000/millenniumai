import { FaBoxOpen, FaTruck, FaCheckCircle, FaPalette, FaCar, FaEraser, FaTags, FaCogs, FaBolt, FaShieldAlt } from "react-icons/fa";
import browntape from "../assets/42_files/powerfixit.pdf-image-004.jpg"
import colurtape from "../assets/42_files/powerfixit.pdf-image-005.jpg"
import dormewear from "../assets/42_files/powerfixit.pdf-image-032.jpg"
import redrock from "../assets/42_files/powerfixit.pdf-image-033.png"
import kakkar from "../assets/42_files/powerfixit.pdf-image-035.jpg"
import powerfixit from "../assets/42_files/powerfixit.pdf-image-036.jpg"        
import hyeto from "../assets/42_files/powerfixit.pdf-image-037.jpg"
import ciel from "../assets/42_files/powerfixit.pdf-image-043.jpg"
import vaikunth from "../assets/42_files/powerfixit.pdf-image-039.jpg"
import snapdo from "../assets/42_files/powerfixit.pdf-image-048.jpg"
import swadhin from "../assets/42_files/powerfixit.pdf-image-037.jpg"
import bhopa from "../assets/42_files/powerfixit.pdf-image-042.jpg"
import pearl from "../assets/42_files/powerfixit.pdf-image-006.png" 
import krishna from "../assets/42_files/powerfixit.pdf-image-047.jpg"
import pharmacy from "../assets/42_files/powerfixit.pdf-image-052.jpg"
import yellow from "../assets/42_files/powerfixit.pdf-image-045.png"
import zcpi from "../assets/42_files/powerfixit.pdf-image-053.jpg"
import masking from "../assets/42_files/powerfixit.pdf-image-006.png"
import custom from "../assets/42_files/powerfixit.pdf-image-015.png"
import { motion } from "framer-motion";

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

const printedTapeClients = [
  { name: "Dormewear", img: dormewear },
  { name: "Red Rock", img: redrock },
  { name: "Kakkar", img: kakkar },
  { name: "Power Fixit", img: powerfixit },
  { name: "Hyeto", img: hyeto },
  { name: "Ciel Sports", img: ciel },
  { name: "Vaikunth", img: vaikunth },
  { name: "Snapdo", img: snapdo },
  { name: "Swadhin Biri", img: swadhin },
  { name: "Bhopa", img: bhopa },
  { name: "Pearl", img: pearl },
  { name: "Krishna", img: krishna },
  { name: "Pharmacy Healthcare", img: pharmacy },
  { name: "Yellow", img: yellow },
  { name: "ZCPI", img: zcpi }
];

const productTable = [
  { brand: "POWER FIXIT", length: "25 to 650 mtr.", colour: "Clear", core: "Inner", thickness: "36", size: "12", jumbo: "144" },
  { brand: "WONDER BRO", length: "Body Jumbo Length", colour: "Red, Yellow", core: "Diameter", thickness: "38", size: "48", jumbo: "210" },
  { brand: "MARUTI GOLD", length: "1500 mtr.", colour: "Green", core: "Oil core", thickness: "42", size: "36", jumbo: "246" },
  { brand: "SHREE GEE", length: "Jumbo Length 1025/1315", colour: "Yellow", core: "76 mm", thickness: "48", size: "48", jumbo: "280" },
  { brand: "POWER GRIP", length: "4000 mtr.", colour: "Blue", core: "76 mm", thickness: "55", size: "72", jumbo: "1315" }
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