import aboutimg from "../assets/42_files/powerfixit.pdf-image-054.jpg"

export default function About() {
  return (
    <section className="py-24 bg-white px-6 relative overflow-hidden">
      <div className="absolute left-0 top-0 w-60 h-60 bg-yellow-100 rounded-full opacity-20 blur-3xl -z-10" />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        <div className="md:w-1/2 flex justify-center">
          <img src={aboutimg} alt="Tape Rolls" className="rounded-2xl shadow-xl border-4 border-yellow-100 w-120 h-120 object-cover" />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6">About PowerFixit Tapes</h2>
          <p className="text-lg text-gray-700 mb-6">
            Since 2009, PowerFixit has been a trusted name in BOPP self-adhesive tapes. Our mission is to deliver strong, reliable, and customizable tape solutions for packaging, shipping, and industrial needs. We are ISO 9001:2015 certified, ensuring every roll meets the highest standards of quality and performance.
          </p>
          <ul className="text-left text-gray-800 space-y-2 mb-6">
            <li className="flex items-center gap-2"><span className="text-yellow-600 font-bold">•</span> Customer-first approach</li>
            <li className="flex items-center gap-2"><span className="text-yellow-600 font-bold">•</span> Consistent product quality</li>
            <li className="flex items-center gap-2"><span className="text-yellow-600 font-bold">•</span> Fast, reliable delivery</li>
            <li className="flex items-center gap-2"><span className="text-yellow-600 font-bold">•</span> Custom branding options</li>
          </ul>
          <p className="text-base text-gray-600">Join hundreds of satisfied customers who trust us to secure their products and their reputation.</p>
        </div>
      </div>
    </section>
  );
}