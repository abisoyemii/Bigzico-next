const highlights = [
  { icon: '🛡', title: 'Warranty', copy: 'Manufacturer-backed support on eligible appliances.' },
  { icon: '🚚', title: 'Fast Delivery', copy: 'Reliable dispatch across major Nigerian cities.' },
  { icon: '🔒', title: 'Secure Payment', copy: 'Safe online checkout and trusted payment channels.' },
  { icon: '☎️', title: 'Customer Support', copy: 'Technical assistance and service booking available daily.' },
  { icon: '↺', title: 'Easy Returns', copy: 'Flexible return support for unused products in original condition.' },
];

export function ServiceHighlights() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">Why buy from BIGZICO</p>
        <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Trusted experience from checkout to delivery</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {highlights.map((item) => (
          <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-2xl">{item.icon}</div>
            <h3 className="mt-4 font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm text-gray-500">{item.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
