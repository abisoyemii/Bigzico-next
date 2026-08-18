import Link from 'next/link';
import type { Product } from '@/lib/mock-data';
import { ProductGrid } from '@/components/ProductGrid';

export function ProductSection({
  title,
  subtitle,
  products,
  href = '/products',
  ctaLabel = 'View all',
}: {
  title: string;
  subtitle: string;
  products: Product[];
  href?: string;
  ctaLabel?: string;
}) {
  if (!products.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">BIGZICO picks</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="mt-2 text-gray-600">{subtitle}</p>
        </div>
        <Link href={href} className="text-sm font-semibold text-teal-700 hover:underline">
          {ctaLabel} →
        </Link>
      </div>
      <ProductGrid products={products.slice(0, 8)} />
    </section>
  );
}
