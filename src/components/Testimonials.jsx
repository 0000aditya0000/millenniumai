const testimonials = [
  {
    quote: "The best tape we've ever used for our packaging! Super strong and always reliable.",
    name: "Rohit Sharma",
    company: "Sharma Logistics",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "Custom printed tapes from PowerFixit made our brand stand out. Fast delivery too!",
    name: "Priya Mehta",
    company: "Mehta Retailers",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "Excellent quality and customer service. Highly recommended for any business.",
    name: "Amit Verma",
    company: "Verma Exports",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg"
  }
];
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Testimonials() {
  return (
    <section className="py-24 px-6 text-center relative overflow-hidden bg-gradient-to-br from-[#f3e7d2] via-white to-[#f3e7d2]">
      {/* Decorative SVG blob */}
      <svg className="absolute right-0 top-0 w-60 h-60 opacity-20 blur-2xl -z-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#b07a3c" d="M44.8,-67.2C57.2,-59.2,65.2,-44.8,70.2,-29.7C75.2,-14.7,77.2,1,72.2,14.7C67.2,28.3,55.2,39.8,42.2,48.2C29.2,56.7,14.6,62.1,-0.7,62.9C-16,63.7,-32,59.9,-44.2,51.1C-56.4,42.3,-64.8,28.5,-68.2,13.6C-71.6,-1.3,-70,-17.2,-62.7,-29.7C-55.4,-42.2,-42.4,-51.3,-28.2,-58.2C-14,-65.1,1.4,-69.8,16.7,-70.2C32,-70.6,44.8,-67.2,44.8,-67.2Z" transform="translate(100 100)" />
      </svg>
      <h2 className="text-4xl font-bold mb-10 text-[#b07a3c]">What Our Customers Say</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-white max-w-sm p-8 rounded-2xl shadow-xl border-4 border-[#b07a3c] flex flex-col items-center hover:scale-105 transition-transform duration-200"
          >
            <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full border-2 border-[#b07a3c] mb-4 shadow" />
            <p className="text-[#1a2341] italic mb-4">“{t.quote}”</p>
            <div className="font-semibold text-[#b07a3c]">{t.name}</div>
            <div className="text-[#1a2341] text-sm">{t.company}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#b07a3c] text-white text-center py-6 border-t-4 border-[#a86b2d] relative overflow-hidden">
      {/* Decorative SVG blob */}
      <svg className="absolute right-0 top-0 w-60 h-60 opacity-20 blur-2xl -z-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#a86b2d" d="M44.8,-67.2C57.2,-59.2,65.2,-44.8,70.2,-29.7C75.2,-14.7,77.2,1,72.2,14.7C67.2,28.3,55.2,39.8,42.2,48.2C29.2,56.7,14.6,62.1,-0.7,62.9C-16,63.7,-32,59.9,-44.2,51.1C-56.4,42.3,-64.8,28.5,-68.2,13.6C-71.6,-1.3,-70,-17.2,-62.7,-29.7C-55.4,-42.2,-42.4,-51.3,-28.2,-58.2C-14,-65.1,1.4,-69.8,16.7,-70.2C32,-70.6,44.8,-67.2,44.8,-67.2Z" transform="translate(100 100)" />
      </svg>
      <div className="flex justify-center gap-6 mb-2 relative z-10">
        <a href="#" className="hover:text-[#1a2341] transition" aria-label="Facebook"><FaFacebookF /></a>
        <a href="#" className="hover:text-[#1a2341] transition" aria-label="Twitter"><FaTwitter /></a>
        <a href="#" className="hover:text-[#1a2341] transition" aria-label="Instagram"><FaInstagram /></a>
      </div>
      <p className="relative z-10">&copy; {new Date().getFullYear()} PowerFixit Tapes. All rights reserved.</p>
    </footer>
  );
}