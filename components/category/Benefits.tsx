import type { CategoryPageContent } from '@/data/categories';

export function Benefits({ benefits }: { benefits: CategoryPageContent['benefits'] }) {
  return (
    <section className="mx-auto max-w-7xl px-3 py-8 sm:px-4 sm:py-12 lg:px-8 lg:py-16">
      <div className="mb-6 sm:mb-8 text-center">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-teal-600">Why customers love this range</p>
        <h2 className="mt-2 sm:mt-3 text-lg sm:text-3xl lg:text-4xl font-bold text-slate-900">Category advantages</h2>
      </div>
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {benefits.map((benefit) => (
          <div key={benefit} className="rounded-lg sm:rounded-3xl border border-slate-200 bg-white p-3 sm:p-6 shadow-sm">
            <div className="mb-2 sm:mb-4 flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg sm:rounded-2xl bg-teal-50 text-lg sm:text-xl text-teal-700">✓</div>
            <h3 className="text-sm sm:text-base font-semibold text-slate-900">{benefit}</h3>
            <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">Selected for performance, value, and reliability.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
