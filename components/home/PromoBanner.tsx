import Link from 'next/link';

export function PromoBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-brand-primary to-teal-800 p-8 text-white shadow-xl">
          <img src="/images/promo-banner.svg" alt="BIGZICO promotional banner" className="mb-6 h-36 w-full rounded-2xl object-cover" />
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-200">Limited time offer</p>
          <h3 className="mt-3 font-display text-3xl font-bold">Upgrade your home with premium appliances</h3>
          <p className="mt-3 max-w-xl text-sm text-teal-50">From fridges and ACs to generators and kitchen essentials, BIGZICO has a deal ready for you.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/products" className="rounded-full bg-white px-6 py-3 font-semibold text-brand-primary hover:bg-gray-100">Shop Now</Link>
            <Link href="/services" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20">Book Technician</Link>
          </div>
        </div>
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">Why customers love BIGZICO</p>
          <h3 className="mt-3 font-display text-2xl font-bold">Professional delivery and after-sales care</h3>
          <ul className="mt-5 space-y-3 text-sm text-gray-600">
            <li>• Certified technicians for installation and repairs</li>
            <li>• Genuine warranties on eligible products</li>
            <li>• Nationwide delivery and service support</li>
            <li>• Flexible support for homes, offices, and businesses</li>
          </ul>
          <Link href="/warranty" className="mt-6 inline-flex rounded-full bg-teal-600 px-6 py-3 font-semibold text-white hover:bg-teal-700">Learn about Warranty</Link>
        </div>
      </div>
    </section>
  );
}
