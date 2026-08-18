const tips = [
  { title: 'Fridge Maintenance', copy: 'Keep doors sealed and coils clean for efficient cooling.' },
  { title: 'AC Efficiency', copy: 'Clean filters monthly to improve airflow and reduce power use.' },
  { title: 'Air Fryer Care', copy: 'Avoid harsh abrasives and clean the basket after each use.' },
  { title: 'Washing Machine Tips', copy: 'Leave the door open between washes to prevent mould.' },
  { title: 'Microwave Safety', copy: 'Use microwave-safe containers and keep the cavity clean.' },
  { title: 'Water Heater Maintenance', copy: 'Flush mineral deposits regularly to extend the heater life.' },
];

export function CareTips() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16" aria-label="Appliance care tips">
      <div className="mb-8 text-center sm:mb-12">
        <h2 className="font-display text-2xl font-bold sm:text-3xl md:text-4xl">Appliance Care Tips</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 sm:text-base">Expert advice to keep your appliances running longer</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tips.map((tip) => (
          <div key={tip.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-xl text-teal-700">💡</div>
            <h3 className="font-semibold text-slate-900">{tip.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{tip.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
