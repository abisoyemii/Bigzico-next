const testimonials = [
  {
    name: 'Chidi Okafor',
    role: 'Lagos homeowner',
    quote: 'The delivery was fast and the installation team was professional. My new fridge looks great and runs quietly.',
  },
  {
    name: 'Halima Yusuf',
    role: 'Abuja family',
    quote: 'I found the right AC and the support team helped me choose the perfect size for my space.',
  },
  {
    name: 'Tunde Adebayo',
    role: 'Business owner',
    quote: 'BIGZICO made it easy for me to buy a generator for our office. Everything arrived on time.',
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">Customer reviews</p>
        <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">What customers say about BIGZICO</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <div key={item.name} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-amber-500">★★★★★</div>
            <p className="mt-4 text-sm text-gray-600">“{item.quote}”</p>
            <div className="mt-6">
              <p className="font-semibold text-slate-900">{item.name}</p>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
