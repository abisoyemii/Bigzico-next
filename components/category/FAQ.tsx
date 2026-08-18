import type { CategoryPageContent } from '@/data/categories';

export function FAQ({ category }: { category: CategoryPageContent }) {
  return (
    <section className="mx-auto max-w-7xl px-3 py-8 sm:px-4 sm:py-12 lg:px-8 lg:py-16">
      <div className="mb-6 sm:mb-8 text-center">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-teal-600">FAQ</p>
        <h2 className="mt-2 sm:mt-3 text-lg sm:text-3xl lg:text-4xl font-bold text-slate-900">{category.name} FAQ</h2>
      </div>
      <div className="mx-auto max-w-3xl space-y-2 sm:space-y-3">
        {category.faqs.map((item) => (
          <details key={item.question} className="rounded-lg sm:rounded-2xl border border-slate-200 bg-white p-3 sm:p-4 shadow-sm" open={item.question.includes('delivery')}>
            <summary className="cursor-pointer text-sm sm:text-base font-semibold text-slate-900 pr-8">{item.question}</summary>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
