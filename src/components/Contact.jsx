export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#f3e7d2] via-white to-[#f3e7d2] px-6 relative overflow-hidden">
      {/* Decorative SVG blob */}
      <svg className="absolute left-0 bottom-0 w-60 h-60 opacity-20 blur-2xl -z-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#b07a3c" d="M44.8,-67.2C57.2,-59.2,65.2,-44.8,70.2,-29.7C75.2,-14.7,77.2,1,72.2,14.7C67.2,28.3,55.2,39.8,42.2,48.2C29.2,56.7,14.6,62.1,-0.7,62.9C-16,63.7,-32,59.9,-44.2,51.1C-56.4,42.3,-64.8,28.5,-68.2,13.6C-71.6,-1.3,-70,-17.2,-62.7,-29.7C-55.4,-42.2,-42.4,-51.3,-28.2,-58.2C-14,-65.1,1.4,-69.8,16.7,-70.2C32,-70.6,44.8,-67.2,44.8,-67.2Z" transform="translate(100 100)" />
      </svg>
      <h2 className="text-4xl font-bold mb-10 text-center text-[#b07a3c]">Get in Touch</h2>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch gap-10 md:gap-0 bg-white rounded-2xl shadow-lg border-4 border-[#b07a3c] overflow-hidden">
        {/* Contact Info Card */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-10 bg-white">
          <h3 className="text-2xl font-extrabold text-[#b07a3c] mb-1 text-center">Power Fixit Tapes Industries</h3>
          <p className="text-[#1a2341] font-semibold leading-tight mb-1 text-center">
            Khasra No.649/1, Plot No. A 29-30, Achronda Industrial Area,<br />
            Village Achronda, Partapur, Meerut, 250103 (Uttar Pradesh)
          </p>
          <p className="text-lg font-bold text-[#1a2341] mb-1 text-center">9458201918, 9997028787</p>
          <p className="text-[#1a2341] mb-1 text-center">powerfixittapes@gmail.com</p>
          <a href="https://www.powerfixittapes.in" target="_blank" rel="noopener noreferrer" className="text-[#b07a3c] underline hover:text-[#a86b2d] text-center block">www.powerfixittapes.in</a>
          <p className="mt-6 italic text-lg text-[#1a2341] font-semibold text-center">Adhesives For Professionals Who Demand Excellence.</p>
        </div>
        {/* Divider for desktop */}
        <div className="hidden md:block w-px bg-[#b07a3c]" />
        {/* Contact Form */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-10 bg-white">
          <p className="mb-4 text-lg text-[#1a2341] text-center md:text-left">Ready to order or have questions? Our team is here to help!</p>
          <form className="max-w-xl w-full mx-auto space-y-4">
            <input type="text" placeholder="Name" className="w-full p-3 border-2 border-[#b07a3c] rounded" required />
            <input type="email" placeholder="Email" className="w-full p-3 border-2 border-[#b07a3c] rounded" required />
            <input type="tel" placeholder="Phone (optional)" className="w-full p-3 border-2 border-[#b07a3c] rounded" />
            <textarea placeholder="Message" rows="5" className="w-full p-3 border-2 border-[#b07a3c] rounded" required></textarea>
            <button className="bg-[#b07a3c] text-white px-6 py-3 rounded hover:bg-[#a86b2d] transition w-full font-bold text-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}