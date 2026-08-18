import Link from 'next/link';
import type { CategoryPageContent } from '@/data/categories';

export function CategoryHero({ category, productCount }: { category: CategoryPageContent; productCount: number }) {
  return (
    <section className="overflow-hidden rounded-lg sm:rounded-[32px] bg-gradient-to-br from-slate-950 via-slate-900 to-teal-900 px-3 sm:px-6 py-6 sm:py-10 lg:px-14 lg:py-16 text-white shadow-2xl">
      <div className="grid gap-4 sm:gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="min-w-0">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-teal-300">BIGZICO category</p>
          <h1 className="mt-2 sm:mt-3 text-2xl sm:text-4xl lg:text-5xl font-bold">{category.name}</h1>
          <p className="mt-2 sm:mt-4 text-base sm:text-lg font-semibold text-teal-100">{category.subtitle}</p>
          <p className="mt-2 sm:mt-4 max-w-2xl text-xs sm:text-sm lg:text-base leading-5 sm:leading-7 text-slate-200">{category.description}</p>
          <div className="mt-4 sm:mt-8 flex flex-wrap items-center gap-2 sm:gap-3">
            <Link href="#products" className="rounded-full bg-teal-500 px-4 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white transition hover:bg-teal-400 whitespace-nowrap">Browse Products</Link>
            <div className="rounded-full border border-white/20 bg-white/10 px-3 sm:px-4 py-1.5 sm:py-3 text-xs sm:text-sm text-slate-100">{productCount} products available</div>
          </div>
        </div>
        <div className="hidden sm:block rounded-lg sm:rounded-[24px] border border-white/10 bg-white/10 p-2 sm:p-4 backdrop-blur">
          <img src={category.image} alt={category.name} className="h-48 sm:h-56 lg:h-72 w-full rounded-lg sm:rounded-[20px] object-cover" loading="eager" />
        </div>
      </div>
    </section>
  );
}
