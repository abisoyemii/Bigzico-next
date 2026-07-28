import Link from 'next/link';
import type { CategoryPageContent } from '@/data/categories';

export function CategoryHero({ category, productCount }: { category: CategoryPageContent; productCount: number }) {
  return (
    <section className="overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-950 via-slate-900 to-teal-900 px-6 py-10 text-white shadow-2xl sm:px-10 lg:px-14 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-300">BIGZICO category</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">{category.name}</h1>
          <p className="mt-4 text-lg font-semibold text-teal-100">{category.subtitle}</p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">{category.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="#products" className="rounded-full bg-teal-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-400">Browse Products</Link>
            <div className="rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-slate-100">{productCount} products available</div>
          </div>
        </div>
        <div className="rounded-[24px] border border-white/10 bg-white/10 p-4 backdrop-blur">
          <img src={category.image} alt={category.name} className="h-72 w-full rounded-[20px] object-cover" loading="eager" />
        </div>
      </div>
    </section>
  );
}
