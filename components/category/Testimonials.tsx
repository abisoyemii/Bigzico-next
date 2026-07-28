import type { Product } from '@/lib/mock-data';

export function Testimonials({ products, categoryName }: { products: Product[]; categoryName: string }) {
  const reviews = products.flatMap((product) => product.reviews.map((review) => ({ ...review, productName: product.name })));

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">Customer reviews</p>
        <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">What buyers say about {categoryName}</h2>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {reviews.slice(0, 3).map((review) => (
          <div key={review.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-1 text-amber-500">{'★'.repeat(review.rating)}</div>
            <p className="mt-4 text-sm text-slate-600">“{review.comment}”</p>
            <div className="mt-6">
              <p className="font-semibold text-slate-900">{review.customerName}</p>
              <p className="text-sm text-slate-500">{review.productName}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
