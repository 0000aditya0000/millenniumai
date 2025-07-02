export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white px-6">
      <h2 className="text-4xl font-bold mb-10 text-center">Get in Touch</h2>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch gap-10 md:gap-0 bg-yellow-50 rounded-2xl shadow-lg border border-yellow-200 overflow-hidden">
        {/* Contact Info Card */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-10 bg-yellow-50">
          <img src="https://i.imgur.com/9QwQ8Qy.png" alt="Power Fixit Logo" className="w-24 h-24 object-contain rounded-xl shadow mb-4" />
          <h3 className="text-2xl font-extrabold text-red-700 mb-1 text-center">Power Fixit Tapes Industries</h3>
          <p className="text-gray-800 font-semibold leading-tight mb-1 text-center">
            Khasra No.649/1, Plot No. A 29-30, Achronda Industrial Area,<br />
            Village Achronda, Partapur, Meerut, 250103 (Uttar Pradesh)
          </p>
          <p className="text-lg font-bold text-gray-900 mb-1 text-center">9458201918, 9997028787</p>
          <p className="text-gray-700 mb-1 text-center">powerfixittapes@gmail.com</p>
          <a href="https://www.powerfixittapes.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900 text-center block">www.powerfixittapes.in</a>
          <p className="mt-6 italic text-lg text-blue-900 font-semibold text-center">Adhesives For Professionals Who Demand Excellence.</p>
        </div>
        {/* Divider for desktop */}
        <div className="hidden md:block w-px bg-yellow-200" />
        {/* Contact Form */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-10 bg-white">
          <p className="mb-4 text-lg text-gray-700 text-center md:text-left">Ready to order or have questions? Our team is here to help!</p>
          <form className="max-w-xl w-full mx-auto space-y-4">
            <input type="text" placeholder="Name" className="w-full p-3 border rounded" required />
            <input type="email" placeholder="Email" className="w-full p-3 border rounded" required />
            <input type="tel" placeholder="Phone (optional)" className="w-full p-3 border rounded" />
            <textarea placeholder="Message" rows="5" className="w-full p-3 border rounded" required></textarea>
            <button className="bg-yellow-700 text-white px-6 py-3 rounded hover:bg-yellow-800 transition w-full font-bold text-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}