const services = [
  { label: 'Delivery to Lekki, Lagos', value: '75%', tone: 'bg-teal-400' },
  { label: 'AC Repair in Gwarinpa, Abuja', value: '40%', tone: 'bg-blue-400' },
  { label: 'Order BZ-8921 — PH City', value: '90%', tone: 'bg-purple-400' },
];

export function ServiceTracker() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16" aria-label="Live service tracker">
      <div className="rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">Live service tracker</p>
            <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">Real-time activity from our delivery and technician network</h2>
          </div>
          <span className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700">12 Active Now</span>
        </div>
        <div className="space-y-3">
          {services.map((service) => (
            <div key={service.label} className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-3 sm:gap-4 sm:p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-lg shadow-sm">⚡</div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">{service.label}</p>
                <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                  <div className={`h-2 rounded-full ${service.tone}`} style={{ width: service.value }} />
                </div>
              </div>
              <span className="text-sm font-semibold text-gray-500">{service.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
