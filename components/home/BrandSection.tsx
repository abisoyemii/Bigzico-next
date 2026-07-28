import Image from 'next/image';

const brands = [
  { name: 'Nexus', logo: '/images/brand-nexus.svg' },
  { name: 'Scanfrost', logo: '/images/brand-scanfrost.svg' },
  { name: 'Haier Thermocool', logo: '/images/brand-haier-thermocool.svg' },
  { name: 'Bruhm', logo: '/images/brand-bruhm.svg' },
  { name: 'Maxi', logo: '/images/brand-maxi.svg' },
  { name: 'Binatone', logo: '/images/brand-binatone.svg' },
];

function BrandCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex h-28 items-center justify-center rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {logo ? (
        <Image src={logo} alt={name} width={140} height={56} className="max-h-12 w-full object-contain" />
      ) : (
        <div className="text-lg font-bold text-slate-900">{name}</div>
      )}
    </div>
  );
}

export function BrandSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">Trusted brands</p>
        <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Brands that power BIGZICO homes</h2>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {brands.map((brand) => (
          <BrandCard key={brand.name} name={brand.name} logo={brand.logo} />
        ))}
      </div>
    </section>
  );
}
