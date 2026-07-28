import type { CategoryPageContent } from '@/data/categories';

export function FAQ({ category }: { category: CategoryPageContent }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">FAQ</p>
        <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">{category.name} FAQ</h2>
      </div>
      <div className="mx-auto max-w-3xl space-y-3">
        {category.faqs.map((item) => (
          <details key={item.question} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm" open={item.question.includes('delivery')}>
            <summary className="cursor-pointer font-semibold text-slate-900">{item.question}</summary>
            <p className="mt-3 text-sm text-slate-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
