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

export default function Testimonials() {
  return (
    <section className="py-24 bg-yellow-50 px-6 text-center relative overflow-hidden">
      <div className="absolute right-0 top-0 w-60 h-60 bg-yellow-200 rounded-full opacity-20 blur-3xl -z-10" />
      <h2 className="text-4xl font-bold mb-10">What Our Customers Say</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white max-w-sm p-8 rounded-2xl shadow-xl border border-yellow-100 flex flex-col items-center hover:scale-105 transition-transform duration-200"
          >
            <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full border-2 border-yellow-300 mb-4 shadow" />
            <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
            <div className="font-semibold text-yellow-700">{t.name}</div>
            <div className="text-gray-500 text-sm">{t.company}</div>
          </div>
        ))}
      </div>
    </section>
  );
}