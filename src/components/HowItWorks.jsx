// src/components/HowItWorks.jsx
const steps = [
    { step: "1", title: "Contact Us", desc: "Reach out with your requirements." },
    { step: "2", title: "Get a Quote", desc: "Receive a tailored offer quickly." },
    { step: "3", title: "Production", desc: "We manufacture your order to spec." },
    { step: "4", title: "Delivery", desc: "Fast, reliable shipping to your door." },
  ];
  
  export default function HowItWorks() {
    return (
      <section className="w-full bg-[#f3e7d2] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a2341] mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#b07a3c] text-white flex items-center justify-center text-2xl font-bold mb-2">{s.step}</div>
                <div className="font-bold text-lg text-[#1a2341]">{s.title}</div>
                <div className="text-[#4b4b4b] text-sm mt-1">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }