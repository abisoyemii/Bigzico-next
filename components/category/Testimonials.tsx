import type { Product } from '@/lib/product';

export function Testimonials({
  products,
  categoryName,
}: {
  products: Product[];
  categoryName: string;
}) {
  const reviews = products
    .filter((product) => product.reviewCount > 0)
    .slice(0, 3)
    .map((product) => ({
      id: product.id,
      rating: product.rating ?? 5,
      comment:
        product.reviewCount === 1
          ? 'A customer has reviewed this product.'
          : `${product.reviewCount} customers have reviewed this product.`,
      customerName: 'Verified customer',
      productName: product.name,
    }));

  return (
    <section className="mx-auto max-w-7xl px-3 py-8 sm:px-4 sm:py-12 lg:px-8 lg:py-16">
      <div className="mb-6 sm:mb-8 text-center">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-teal-600">
          Customer reviews
        </p>

        <h2 className="mt-2 sm:mt-3 text-lg sm:text-3xl lg:text-4xl font-bold text-slate-900">
          What buyers say about {categoryName}
        </h2>
      </div>

      {reviews.length > 0 ? (
        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-1 text-amber-500">
                {'★'.repeat(Math.round(review.rating))}
              </div>

              <p className="mt-4 text-sm text-slate-600">
                “{review.comment}”
              </p>

              <div className="mt-6">
                <p className="font-semibold text-slate-900">
                  {review.customerName}
                </p>

                <p className="text-sm text-slate-500">
                  {review.productName}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <p className="text-sm text-slate-600">
            Customer reviews will appear here as products receive reviews.
          </p>
        </div>
      )}
    </section>
  );
}