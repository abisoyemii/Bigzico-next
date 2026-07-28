import Link from 'next/link';
import { CategoryCard } from '@/components/CategoryCard';
import { ProductGrid } from '@/components/ProductGrid';
import { bestSellingProducts, brands, categories, featuredProducts, products } from '@/lib/mock-data';

const categoryPills = [
  { label: 'Refrigerators', href: '/categories/refrigerators' },
  { label: 'Freezers', href: '/categories/freezers' },
  { label: 'Air Conditioners', href: '/categories/air-conditioners' },
  { label: 'Washing Machines', href: '/categories/washing-machines' },
  { label: 'Televisions', href: '/categories/televisions' },
  { label: 'Generators', href: '/categories/generators' },
];

const whyChooseItems = [
  { title: 'Genuine Products', description: 'Every appliance is sourced from trusted brands and verified for quality.', icon: '✓' },
  { title: 'Fast Nationwide Delivery', description: 'Prompt delivery across major cities with careful handling and tracking.', icon: '↗' },
  { title: 'Secure Payment', description: 'Flexible, protected payment options for a smooth and confident checkout.', icon: '◌' },
  { title: 'Warranty & Support', description: 'Dedicated after-sales support and warranty coverage on selected appliances.', icon: '✦' },
];

const serviceCards = [
  { title: 'Air Conditioner Installation', icon: '❄' },
  { title: 'Generator Repairs', icon: '⚡' },
  { title: 'Refrigerator Repairs', icon: '🧊' },
  { title: 'TV Installation', icon: '📺' },
  { title: 'Washing Machine Repairs', icon: '🧺' },
];

function SectionHeading({ eyebrow, title, description, actionHref, actionLabel }: { eyebrow: string; title: string; description: string; actionHref?: string; actionLabel?: string }) {
  return (
    <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">{eyebrow}</p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">{description}</p>
      </div>
      {actionHref && actionLabel ? (
        <Link href={actionHref} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-teal-700">
          {actionLabel}
          <span aria-hidden>→</span>
        </Link>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  const newArrivals = products.slice(0, 16);
  const featured = featuredProducts.slice(0, 16);
  const bestSellers = bestSellingProducts.slice(0, 16);
  const categorySpotlights = categories
    .slice(0, 6)
    .map((category) => ({
      ...category,
      items: products.filter((item) => item.categorySlug === category.slug).slice(0, 3),
    }))
    .filter((item) => item.items.length > 0);
  const groupedProducts = categories
    .map((category) => ({
      ...category,
      items: products.filter((product) => product.categorySlug === category.slug),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <main className="page-transition bg-slate-50/70">
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-6 sm:px-6 lg:px-8 lg:pb-12 lg:pt-8">
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_35px_90px_-40px_rgba(15,23,42,0.35)]">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
            <div className="flex flex-col justify-center">
              <p className="inline-flex w-fit rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-700">Premium electronics, delivered with confidence</p>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Modern home appliances for everyday luxury.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Discover stylish refrigerators, powerful generators, and smart home essentials from trusted brands — all backed by dependable service in Nigeria.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/products" className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
                  Shop now
                </Link>
                <Link href="/services" className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-teal-500 hover:text-teal-700">
                  Book technician
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600">
                <span className="rounded-full bg-slate-100 px-3 py-1">Nationwide delivery</span>
                <span className="rounded-full bg-slate-100 px-3 py-1">Verified brands</span>
                <span className="rounded-full bg-slate-100 px-3 py-1">Warranty support</span>
              </div>
            </div>

            <div className="rounded-[28px] bg-slate-950 p-6 text-white sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-300">Why BigZico</p>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <p className="text-2xl font-semibold">Fast installation</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Professional setup for air conditioners, TVs, and large appliances.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <p className="text-2xl font-semibold">Trusted nationwide</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Serving homes, offices, and businesses with dependable support at every step.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 rounded-full border border-slate-200 bg-white/80 p-2 shadow-sm backdrop-blur">
          {categoryPills.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-900 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <SectionHeading
          eyebrow="Shop by categories"
          title="Curated collections for every room and every need"
          description="Browse practical, design-forward appliances built to elevate modern living in Nigeria."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {categories.slice(0, 8).map((category) => (
            <CategoryCard
              key={category.slug}
              name={category.name}
              slug={category.slug}
              product={products.find((item) => item.categorySlug === category.slug)}
              productCount={category.productCount || 24}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <SectionHeading
          eyebrow="Browse by department"
          title="Shop by category, the way modern customers expect"
          description="Each department is grouped with a curated selection so visitors can discover the right product faster."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {categorySpotlights.map((item) => (
            <div key={item.slug} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">{item.name}</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">Popular picks for {item.name.toLowerCase()}</h3>
                </div>
                <Link href={`/categories/${item.slug}`} className="text-sm font-semibold text-slate-700 transition hover:text-teal-700">
                  View all
                </Link>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {item.items.map((product) => (
                  <Link key={product.id} href={`/products/${product.slug}`} className="overflow-hidden rounded-[18px] border border-slate-200 bg-slate-50 transition hover:-translate-y-1 hover:shadow-md">
                    <img src={product.thumbnail} alt={product.name} className="h-24 w-full object-cover" />
                    <div className="p-3">
                      <p className="text-sm font-semibold text-slate-900 line-clamp-2">{product.name}</p>
                      <p className="mt-2 text-sm font-semibold text-teal-700">₦{product.price.toLocaleString()}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <SectionHeading
          eyebrow="All categories"
          title="See every product grouped by category"
          description="Browse the full catalog grouped by department, so visitors can quickly find the right store section and product range."
        />
        <div className="space-y-10">
          {groupedProducts.map((group) => (
            <section key={group.slug} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">{group.name}</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">{group.items.length} products available</h3>
                </div>
                <Link href={`/categories/${group.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-teal-700">
                  Browse {group.name}
                  <span aria-hidden>→</span>
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {group.items.slice(0, 4).map((product) => (
                  <Link key={product.id} href={`/products/${product.slug}`} className="overflow-hidden rounded-[20px] border border-slate-200 bg-slate-50 transition hover:-translate-y-1 hover:shadow-md">
                    <img src={product.thumbnail} alt={product.name} className="h-44 w-full object-cover" />
                    <div className="p-4">
                      <p className="text-sm font-semibold text-slate-900 line-clamp-2">{product.name}</p>
                      <p className="mt-2 text-sm text-slate-500">{product.brand}</p>
                      <p className="mt-3 text-base font-semibold text-teal-700">₦{product.price.toLocaleString()}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <SectionHeading
          eyebrow="Featured products"
          title="Engineered for comfort, built for daily performance"
          description="Explore our most-loved appliances with elegant finishes, reliable power, and premium value."
          actionHref="/products"
          actionLabel="View all"
        />
        <ProductGrid products={featured} />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <SectionHeading
          eyebrow="Best sellers"
          title="Top picks chosen by customers across Nigeria"
          description="These dependable essentials are already winning trust for quality and long-term value."
          actionHref="/products"
          actionLabel="See more"
        />
        <ProductGrid products={bestSellers} />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <SectionHeading
          eyebrow="New arrivals"
          title="Fresh arrivals with modern features"
          description="Stay ahead with the latest designs, smarter controls, and refined finishes."
          actionHref="/products"
          actionLabel="Browse new picks"
        />
        <ProductGrid products={newArrivals} />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow="Why choose BigZico"
            title="A premium shopping experience, from first click to final install"
            description="We combine trusted brands, effortless shopping, and reliable support in one polished experience."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {whyChooseItems.map((item) => (
              <div key={item.title} className="rounded-[22px] border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-600/10 text-lg font-semibold text-teal-700">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="rounded-[30px] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-300">Professional installation & repair services</p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Expert help that keeps your appliances running beautifully.</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
                Book a qualified technician for installation, repairs, and ongoing support across major Nigerian locations.
              </p>
            </div>
            <Link href="/services" className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
              Book a technician
            </Link>
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {serviceCards.map((service) => (
              <div key={service.title} className="rounded-[20px] border border-white/10 bg-white/10 p-4">
                <div className="text-2xl">{service.icon}</div>
                <h3 className="mt-3 text-base font-semibold">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">Trusted brands</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Chosen for performance and lasting quality</h2>
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {brands.slice(0, 8).map((brand) => (
              <div key={brand.id} className="rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-5 text-center text-sm font-semibold text-slate-700">
                {brand.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 pt-4 sm:px-6 lg:px-8 lg:pb-16">
        <div className="rounded-[30px] border border-slate-200 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 text-center text-white shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-300">Newsletter</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Stay in the loop with premium deals and product drops.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
            Join thousands of Nigerian shoppers who receive timely offers and trusted appliance recommendations.
          </p>
          <div className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input type="email" placeholder="Enter your email" className="h-12 flex-1 rounded-full border border-white/10 bg-white/10 px-4 text-sm text-white placeholder:text-slate-400 focus:outline-none" />
            <button className="h-12 rounded-full bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">Subscribe</button>
          </div>
        </div>
      </section>
    </main>
  );
}
