import type { CategoryPageContent } from '@/data/categories';

export function Benefits({ benefits }: { benefits: CategoryPageContent['benefits'] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">Why customers love this range</p>
        <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">Category advantages</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {benefits.map((benefit) => (
          <div key={benefit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-xl text-teal-700">✓</div>
            <h3 className="font-semibold text-slate-900">{benefit}</h3>
            <p className="mt-2 text-sm text-slate-600">Selected for performance, value, and reliability.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
