import Link from 'next/link';
import type { Product } from '@/lib/mock-data';

export function CategoryCard({ name, slug, product, productCount }: { name: string; slug: string; product?: Product; productCount?: number }) {
  return (
    <Link href={`/categories/${slug}`} className="group relative min-h-56 overflow-hidden rounded-[24px] border border-slate-200 bg-white p-6 text-slate-900 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:shadow-[0_30px_70px_-25px_rgba(15,23,42,0.35)]">
      <img src={product?.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/70 to-teal-900/50" />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <span className="w-fit rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-100">
          {productCount ?? 24} products
        </span>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-200">BigZico collection</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{name}</h3>
          <span className="mt-3 inline-flex text-sm font-semibold text-slate-100">Explore collection →</span>
        </div>
      </div>
    </Link>
  );
}
