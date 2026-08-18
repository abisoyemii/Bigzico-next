const items = [
  'Emmanuel from Ogun just booked AC repair',
  'Chioma from Lagos purchased an LG 420L refrigerator',
  'New 5-star review from Amina in Port Harcourt',
  'Same-day delivery completed in Ikeja',
  'Technician dispatched to Lekki',
];

export function LiveActivity() {
  return (
    <section className="overflow-hidden bg-brand-primary py-3 text-white" aria-label="Live activity">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4">
        <span className="flex-shrink-0 rounded bg-teal-600 px-2 py-1 text-xs font-bold">LIVE</span>
        <div className="relative flex-1 overflow-hidden">
          <div className="whitespace-nowrap text-sm" style={{ animation: 'marquee 20s linear infinite' }}>
            {items.map((item, index) => (
              <span key={`${item}-${index}`} className="mr-8 inline-block">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
