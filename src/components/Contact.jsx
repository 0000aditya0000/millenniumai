import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.email.trim()) errs.email = 'Email is required.';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'Invalid email.';
    if (!form.message.trim()) errs.message = 'Message is required.';
    return errs;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setForm({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#f3e7d2] via-white to-[#f3e7d2] px-6 relative overflow-hidden">
      {/* Decorative SVG blob */}
      <svg className="absolute left-0 bottom-0 w-60 h-60 opacity-20 blur-2xl -z-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#b07a3c" d="M44.8,-67.2C57.2,-59.2,65.2,-44.8,70.2,-29.7C75.2,-14.7,77.2,1,72.2,14.7C67.2,28.3,55.2,39.8,42.2,48.2C29.2,56.7,14.6,62.1,-0.7,62.9C-16,63.7,-32,59.9,-44.2,51.1C-56.4,42.3,-64.8,28.5,-68.2,13.6C-71.6,-1.3,-70,-17.2,-62.7,-29.7C-55.4,-42.2,-42.4,-51.3,-28.2,-58.2C-14,-65.1,1.4,-69.8,16.7,-70.2C32,-70.6,44.8,-67.2,44.8,-67.2Z" transform="translate(100 100)" />
      </svg>
      <h2 className="text-4xl font-bold mb-10 text-center text-[#b07a3c]">Get in Touch</h2>
      <motion.div
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch gap-10 md:gap-0 bg-white rounded-2xl shadow-lg border-4 border-[#b07a3c] overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        {/* Contact Info Card */}
        <div className="flex-1 flex flex-col items-left justify-center p-8 md:p-10 bg-white">
          <h3 className="text-2xl font-extrabold text-[#b07a3c] mb-4">Power Fixit Tapes Industries</h3>
          <div className="flex items-start gap-3 mb-2">
            <FaMapMarkerAlt className="text-[#b07a3c] text-xl mt-1" />
            <p className="text-[#1a2341] font-semibold leading-tight text-left">
              Khasra No.649/1, Plot No. A 29-30, Achronda Industrial Area,<br />
              Village Achronda, Partapur, Meerut, 250103 (Uttar Pradesh)
            </p>
          </div>
          <div className="flex items-center gap-3 mb-1">
            <FaPhoneAlt className="text-[#b07a3c] text-lg" />
            <p className="text-lg font-bold text-[#1a2341]">9458201918, 9997028787</p>
          </div>
          <div className="flex items-center gap-3 mb-1">
            <FaEnvelope className="text-[#b07a3c] text-lg" />
            <p className="text-[#1a2341]">powerfixittapes@gmail.com</p>
          </div>
          <div className="flex items-center gap-3 mb-1">
            <FaGlobe className="text-[#b07a3c] text-lg" />
            <a href="https://www.powerfixittapes.in" target="_blank" rel="noopener noreferrer" className="text-[#b07a3c] underline hover:text-[#a86b2d] text-center block">www.powerfixittapes.in</a>
          </div>
          <p className="mt-6 italic text-lg text-[#1a2341] font-semibold text-center">Adhesives For Professionals Who Demand Excellence.</p>
        </div>
        {/* Divider for desktop */}
        <div className="hidden md:block w-px bg-[#b07a3c]" />
        {/* Contact Form */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-10 bg-white">
          <p className="mb-4 text-lg text-[#1a2341] text-center md:text-left">Ready to order or have questions? Our team is here to help!</p>
          <form className="max-w-xl w-full mx-auto space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className={`w-full p-3 border-2 rounded focus:outline-none ${errors.name ? 'border-red-400' : 'border-[#b07a3c]'}`}
                value={form.name}
                onChange={handleChange}
                required
              />
              {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={`w-full p-3 border-2 rounded focus:outline-none ${errors.email ? 'border-red-400' : 'border-[#b07a3c]'}`}
                value={form.email}
                onChange={handleChange}
                required
              />
              {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone (optional)"
              className="w-full p-3 border-2 border-[#b07a3c] rounded focus:outline-none"
              value={form.phone}
              onChange={handleChange}
            />
            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                className={`w-full p-3 border-2 rounded focus:outline-none ${errors.message ? 'border-red-400' : 'border-[#b07a3c]'}`}
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
              {errors.message && <div className="text-red-500 text-xs mt-1">{errors.message}</div>}
            </div>
            <motion.button
              type="submit"
              className="bg-[#b07a3c] text-white px-6 py-3 rounded hover:bg-[#a86b2d] transition w-full font-bold text-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Send Message
            </motion.button>
            {submitted && <div className="text-green-600 text-center font-semibold mt-2">Thank you! Your message has been sent.</div>}
          </form>
        </div>
      </motion.div>
    </section>
  );
}