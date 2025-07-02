import { FaCogs, FaCertificate, FaShippingFast, FaSmile } from "react-icons/fa";

const features = [
  { icon: <FaCogs className="text-3xl text-[#b07a3c]" />, title: "In-House Manufacturing", desc: "Direct control over quality and delivery." },
  { icon: <FaCertificate className="text-3xl text-[#b07a3c]" />, title: "ISO Certified", desc: "Internationally recognized quality standards." },
  { icon: <FaShippingFast className="text-3xl text-[#b07a3c]" />, title: "Fast Delivery", desc: "Quick turnaround and reliable logistics." },
  { icon: <FaSmile className="text-3xl text-[#b07a3c]" />, title: "Customer Satisfaction", desc: "Hundreds of happy clients across industries." },
];

export default function Features() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a2341] mb-10">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {f.icon}
              <div className="font-bold text-lg text-[#1a2341] mt-2">{f.title}</div>
              <div className="text-[#4b4b4b] text-sm mt-1">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
