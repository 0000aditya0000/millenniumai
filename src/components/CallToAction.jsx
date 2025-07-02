export default function CallToAction() {
  return (
    <section className="w-full bg-[#b07a3c] py-12 flex justify-center items-center">
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience Premium Tapes?</h2>
        <p className="text-white/90 mb-6">Contact us today for a quote or to discuss your custom requirements.</p>
        <a
          href="#contact"
          className="bg-white text-[#b07a3c] font-bold px-8 py-3 rounded-full shadow-lg text-lg transition-all duration-200 hover:bg-[#f3e7d2]"
        >
          Get a Quote
        </a>
      </div>
    </section>
  );
} 